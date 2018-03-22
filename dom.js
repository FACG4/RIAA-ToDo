// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
    var sortId = document.getElementById('sortId');
    var proirty = document.getElementById('proirty');


    var state = []; // this is our initial todoList
    proirty.addEventListener('change',function(){
      proirty.value == 0 ?  proirty.value=1: proirty.value=0;
      update(state);
    })
    if (localStorage.getItem("state")) {
          // Code for localStorage/sessionStorage.
          state = JSON.parse(localStorage.getItem("state"))
    }
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      var span = document.createElement('span');
      var icon = document.createElement('i');
      icon.className = 'fa fa-lg fa-trash';
      var deleteButtonNode = document.createElement('button');
      span.textContent = todo.description;
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      var markTodoButtonNode = document.createElement('input');
      markTodoButtonNode.setAttribute('type', 'checkbox');
      if(todo.done){
        markTodoButtonNode.setAttribute('checked',"checked");
        todoNode.classList.add('done');
        markTodoButtonNode.classList.add('checked');
      }
      markTodoButtonNode.addEventListener('change', function(event) {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(markTodoButtonNode);
      todoNode.appendChild(span);
      deleteButtonNode.appendChild(icon);
      todoNode.appendChild(deleteButtonNode);
      
      // fantastic edit feature
      var tempInput = document.createElement('input');
      tempInput.setAttribute('autofocus', 'true');
      span.addEventListener('click', (e) => {
          tempInput.value = e.target.textContent;
          todoNode.replaceChild(tempInput, span);
        });
        tempInput.addEventListener('keypress', (e) => {        
          if (e.key == 'Enter') {
            const newState = todoFunctions.editTodo(state, todo.id, tempInput.value);
            update(newState);
          }
        });
    return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
      sortId.addEventListener('change',function(){
        sortId.value == 0 ?  sortId.value=1: sortId.value=0;
      })
      addTodoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var description = {description: event.target.description.value};
        description.sortId=sortId.value;
        event.target.description.value = '';
        event.target.sortId.checked = false;
        event.target.sortId.value = 0;
        var newState =todoFunctions.addTodo(state, description);        
        update(newState);
      });
    }
    var update = function(newState) {
      state = newState;
      if(proirty.value == 1){        
        state= todoFunctions.sortTodos(state);
      }
      renderState(state);
      localStorage.setItem('state', JSON.stringify(state));

    };

    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });

      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstElementChild);
    };

    //change store id 
 
    if (container) renderState(state);
        
  })();
