var test = require('tape');
var logic = require('./logic');


test('AddToDoTest', function(t) {

var todoFunctions = require('./logic.js');
var todos = [];
var newTodo = { description: 'make smoothie out of things that should really be cooked' };
var exp=[{id: 1 ,description: "make smoothie out of things that should really be cooked",
 done: false, sortId:0}]

  t.deepEqual(todoFunctions.addTodo(todos, newTodo),exp,"it should return make smothie");
  t.end();
});

test('SortToDoTest', function(t) {
var actual = logic.sortTodos('a')
var todos=[ { id: 1, description: 'make coffee', done: false, sortId: 1 }, { id: 0, description: 'smash avocados', done: true, sortId: 0 }, { id: 2, description: 'smash avocados', done: true, sortId: 0 } ];
t.deepEqual(actual, todos , "matched ^");
t.end();

});