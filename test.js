var test = require('tape');
var logic = require('./logic');


test('Example test', function(t) {
  var actual = logic.sortTodos('a')
  var todos=[ { id: 1, description: 'make coffee', done: false, sortId: 1 }, { id: 0, description: 'smash avocados', done: true, sortId: 0 }, { id: 2, description: 'smash avocados', done: true, sortId: 0 } ];
  t.deepEqual(actual, todos , "matched ^");
  t.end();
});