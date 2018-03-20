var test = require('tape');
var logic = require('./logic');


<<<<<<< HEAD
var todos =[{id:0,done:false},{id:1,done:false}];


test('todos2' , function(t) {
var actual = 1;
var expect =1;
t.equal(actual, expect , 'should equal');
t.end();

})

test('todos2' , function(t) {
var actual = logic.markTodo(todos,0);
var expect =[{id:0,done:true},{id:1,done:false}];
t.deepEqual(actual, expect , 'should equal');
t.end();

})
=======
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
>>>>>>> b337b5093cea2cfb6d4188f72bf1180718f2d2da
