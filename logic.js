// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd



var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
      var state = JSON.parse(localStorage.getItem('state'));
      
      var indexOflast=state? (state.length-1):0;
      
      console.log(typeof(indexOflast) );
      
      var idCounter = state? indexOflast : 0 ;   //ternary operator!

      function incrementCounter() {
        return (idCounter += 1);
      }

      return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
      return todos.map(function(todo){
        return JSON.parse(JSON.stringify(todo));
      });
    },

    addTodo: function(todos, newTodo) {
      //console.log(newTodo,'kkkkkkkkk');
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // returns a new array, it should contain todos with the newTodo added to the end.
      // add an id to the newTodo. You can use the generateId function to create an id.
      // hint: array.concat
      if(newTodo.description.trim().length > 0)
      {
      var arr =  JSON.parse(JSON.stringify(todos));
      newTodo.id = todoFunctions.generateId();
      newTodo.done = false,
      arr.push(newTodo);
      }
      return arr;
    },

    deleteTodo: function(todos, idToDelete) {
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // return a new array, this should not contain any todo with an id of idToDelete
      // hint: array.filter

      var copy_arr = todoFunctions.cloneArrayOfObjects(todos);
      return copy_arr.filter(function(item){
        return item.id != idToDelete;
        });

      //short way :
      // return copy_arr.filter((item,i) => item.id != idToDelete);
    },

    markTodo: function(todos, idToMark) {
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // in the new todo array, all elements will remain unchanged except the one with id: idToMark
      // this element will have its done value toggled
      // hint: array.map
      var todos2=todoFunctions.cloneArrayOfObjects(todos);
      // for ( i = 0; i <  todos2.length; i++) {
      //   if (todos2[i].id===idToMark) {
      //     todos2[i].done = true;
      //
      //   }}
      var newObject = todos2.map(function (key){
          if(key.id == idToMark){

            key.done = !key.done;
          }
          return key ;
      });
      return newObject;
    },

    sortTodos: function(todos) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort

     
      const CloneArray=todoFunctions.cloneArrayOfObjects(todos);
      // function for dynamic sorting
function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
        return 0;
    }
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }
      CloneArray.sort(compareValues('sortId','desc'));
      return CloneArray;

    },


    editTodo: function(todos, idToEdit, newDescription) {
      // still working on it
      var copy_arr = todoFunctions.cloneArrayOfObjects(todos);
      for (let item of copy_arr) {
        if (item.id == idToEdit) {
          item.description = newDescription;
          }
        }
      return copy_arr;
      }
    };
  // Why is this if statement necessary?
  // The answer has something to do with needing to run code both in the browser and in Node.js
  // See this article for more details:
  // http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }
