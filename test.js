var test = require("tape");
var logic = require("./logic");

// test("Example test", function(t) {
//   t.pass();
//   t.end();
// });
test("addTodo returns an array", function(t) {
  t.equal(logic.addTodo([1], [1]).isarray, [1, 1].isarray, "should return an array");
  t.end();
});

test("addToDo returns correct values", function(t) {
  t.same(logic.addTodo([1],[1]), [1,1], "should return [1, 1]");
  console.log(logic.addTodo([1],[1]));
  t.end();
})

test("addToDo returns correct values", function(t) {
  var actual = logic.addTodo([{id : 1,task : "grow a tree", completed :false}], [{id : 2,task : "eat an apple", completed :false}])
  var expected = [{id : 1,task : "grow a tree", completed :false}, {id : 2,task : "eat an apple", completed :false}]
  t.same(actual, expected, 'should return [{id : 1,task : "grow a tree", completed :false}, {id : 2,task : "eat an apple", completed :false}]');
  console.log(actual);
  t.end();
})
