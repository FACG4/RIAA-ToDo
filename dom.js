// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
    var ulList;

    var state = [
      { id: -3, description: 'first todo' },
      { id: -2, description: 'second todo' },
      { id: -1, description: 'third todo' },
    ]; // this is our initial todoList

    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      todoNode.setAttribute('id', todo.id);
  
      // you will need to use addEventListener
      // add span holding description
      var span = document.createElement('span');
      span.textContent = todo.description;
      todoNode.appendChild(span);
      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
      
      // add markTodo button
      // add classes for css
      
      return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var description = {description: event.target.description.value};
        // var description = document.getElementById("description").value; // event.target ....
        var newState =todoFunctions.addTodo(state, description);
        update(newState);
      });
    }
    var update = function(newState) {
      state = newState;
      renderState(state);
      console.log('updated', state);      
    };

    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });

      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstElementChild);
      ulList = document.querySelector('ul');
    };

    if (container) renderState(state);
    
    

  // add editTodo Listener
  var targetSpan;
  var targetedSpanParent;
  var tempInput;

  ulList.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() == 'span') {
      targetSpan = e.target;
      targetedSpanParent = e.target.parentNode;
      tempInput = document.createElement('input');
      tempInput.value = e.target.textContent
      targetedSpanParent.replaceChild(tempInput, e.target);
    }
  });
  ulList.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
      var newspan = document.createElement('span');
      newspan.textContent = tempInput.value;
      var newState1 = todoFunctions.editTodo(state, parseInt(targetedSpanParent.getAttribute('id')), tempInput.value);
      update(newState1);
      targetedSpanParent.replaceChild(newspan, tempInput);

    }
  });

    
  })();
