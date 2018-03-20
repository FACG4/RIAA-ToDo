var test = require('tape');
var logic = require('./logic');


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
