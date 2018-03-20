var test = require('tape');
var logic = require('./logic');
test('deleteTodo test', function(t) {
  t.deepEqual(logic.deleteTodo([
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
],1),[{
  id: 0,
  description: 'smash avocados',
  done: true,
}], 'a;ldskfja;lskdj' );
  t.end();
});

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
}], 'a;ldskfja;lskdj' );
  t.end();
});
