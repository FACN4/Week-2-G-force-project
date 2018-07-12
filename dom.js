// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },

  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = todo.description;


    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.className += ' btn btn-delete'
    deleteButtonNode.textContent = 'X';
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });


    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(span);

    // add markTodo button
    var markToDoButtonNode = document.createElement('button');


    markToDoButtonNode.className += ' btn btn-markTodo';
    markToDoButtonNode.addEventListener('click', function(event) {
      markToDoButtonNode.textContent = "✓ test";
      var newState = todoFunctions.markTodo(state, todo.id);
      console.log('hi');
      update(newState);
    });
    todoNode.appendChild(markToDoButtonNode);
    // add classes for css

    return todoNode;
  };


  // bind create todo form

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var description = addTodoForm.firstElementChild.value; // event.target ....

      var newState = todoFunctions.addTodo(state, description);

      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      // hint: todoFunctions.addTodo
      // ?? change this!
      addTodoForm.firstElementChild.value = ''
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
