document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const todoText = input.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
      }
    });
  
    function addTodoItem(todoText) {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${todoText}</span>
        <span class="delete">❌</span>
      `;
      todoList.appendChild(li);
    }
  
    todoList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
      }
    });
  });
  