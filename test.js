var test = require('tape');
var logic = require('./logic.js');
//deleteTodo
test('deleteTodo test', function(t) {
  var actual = logic.deleteTodo([
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },{
    id: 1,
    description: 'make coffee',
    done: false,
  }],1)
  var expected =[{
  id: 0,
  description: 'smash avocados',
  done: true,
<<<<<<< HEAD
}]
  t.deepEqual(actual,expected, 'Massage should be readble' );
=======
}], 'should return the first object only' );
>>>>>>> aeacca5ceb0a98468b9b16c9f3f01234af6866e4
  t.end();
});

// editTodo
test('editTodo test', function(t) {
  t.deepEqual(logic.editTodo([
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
],1,'make tea'),[
{
  id: 0,
  description: 'smash avocados',
  done: true,
},
{
  id: 1,
  description: 'make tea',
  done: false,
}], 'should change the second object description to "make tea"' );
  t.end();
});

//markTodo
test('todos2' , function(t) {
var actual = logic.markTodo(todos,0);
var expect =[{id:0,done:true},{id:1,done:false}];
t.deepEqual(actual, expect , 'should equal');
t.end();

});

//addTodo
test('AddToDoTest', function(t) {
var todos = [];
var newTodo = { description: 'make smoothie out of things that should really be cooked' };
var exp=[{id: 1 ,description: "make smoothie out of things that should really be cooked",
 done: false, sortId:0}]

  t.deepEqual(logic.addTodo(todos, newTodo),exp,"it should return make smothie");
  t.end();
});

//SortToDoTest
test('SortToDoTest', function(t) {
var actual = logic.sortTodos('a')
var todos=[ { id: 1, description: 'make coffee', done: false, sortId: 1 }, { id: 0, description: 'smash avocados', done: true, sortId: 0 }, { id: 2, description: 'smash avocados', done: true, sortId: 0 } ];
t.deepEqual(actual, todos , "matched ^");
t.end();

});
