var test = require('tape');
var todoFunctions = require('./logic.js');
var todos = [];
var newTodo = { description: 'make smoothie out of things that should really be cooked' };
/*var todos = ['make smoothie '];
var newTodo = { description: 'make smoothie out of things that should really be cooked' };
var updatedTodos = todoFunctions.addTodo(todos, newTodos);
console.log(updatedTodos);*/
var exp=[{id: 1 ,description: "make smoothie out of things that should really be cooked",
 done: false, sortId:0}]
test('Example test', function(t) {
  t.deepEqual(todoFunctions.addTodo(todos, newTodo),exp,"it should return make smothie");
  t.end();
});
