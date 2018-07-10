var test = require("tape");
var logic = require("./logic");


test("addToDo", function(t) {
  t.equal(logic.addTodo([1], [1]).isarray, [1, 1].isarray, "should return an array");

  var actual = logic.addTodo([{id: 1,description: "grow a tree", done: false}], {description: "eat an apple"});
  var expected = [{id: 1,description: "grow a tree", done: false}, {id: 2,description: "eat an apple", done: false}];
  t.same(actual, expected, 'should return [{id: 1, description: "grow a tree", done :false}, {id: 2, description: "eat an apple", done: false}]');
  t.end();
})


test("deleteTodo", function(t) {
  var actual = logic.deleteTodo([{id: 1, description: "grow a tree", done: false}], 1);
  console.log(actual);
  var expected = [];
  t.same(actual, expected, 'should return an empty array');
  t.end();
})

test("markTodo", function(t) {
  var actual = logic.markTodo([{id: 1, description: "grow a tree", done: false}], 1);
  console.log(actual);
  var expected = [{id: 1, description: "grow a tree", done: true}];
  t.same(actual, expected, 'should be marked as done');
  t.end();
})
