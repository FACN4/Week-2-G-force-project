var test = require("tape");
var logic = require("./logic");

test("addToDo", function(t) {
  t.equal(
    logic.addTodo([1], [1]).isarray,
    [1, 1].isarray,
    "should return an array"
  );
  var actual = logic.addTodo(
    [{ id: 1, description: "grow a tree", done: false }], "eat an apple" );
  var expected = [
    { id: 1, description: "grow a tree", done: false },
    { id: 2, description: "eat an apple", done: false }
  ];
  t.same(
    actual,
    expected,
    'should return [{id: 1, description: "grow a tree", done :false}, {id: 2, description: "eat an apple", done: false}]'
  );
  t.end();
});

test("deleteTodo", function(t) {
  var actual = logic.deleteTodo(
    [{ id: 1, description: "grow a tree", done: false }],
    1
  );
  var expected = [];
  t.same(actual, expected, "should return an empty array");
  t.end();
});

test("markTodo", function(t) {
  var actual = logic.markTodo([{ id: 1, description: "grow a tree", done: false }], 1);
  var expected = [{ id: 1, description: "grow a tree", done: true }];
  t.same(actual, expected, "should be marked as done");

  var actual = logic.markTodo([{ id: 1, description: "grow a tree", done: true }], 1);
  var expected = [{ id: 1, description: "grow a tree", done: false }];
  t.same(actual, expected, "should toggle doen status");

  var actual = logic.markTodo([{ id: 100, description: "grow a tree", done: true }],1);
  var expected = [{ id: 100, description: "grow a tree", done: true }];
  t.same(actual, expected, "mark to-do should not change when ID number don't match");
  t.end();
});
