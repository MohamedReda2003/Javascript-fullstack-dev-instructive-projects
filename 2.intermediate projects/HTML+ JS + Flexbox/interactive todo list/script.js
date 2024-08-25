document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList').querySelector('ul');
    const inProgressList = document.getElementById('inProgressList').querySelector('ul');
    const doneList = document.getElementById('doneList').querySelector('ul');
    const themeToggle = document.getElementById('themeToggle');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
        todoList.innerHTML = '';
        inProgressList.innerHTML = '';
        doneList.innerHTML = '';

        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo.text;
            li.className = 'task';
            li.dataset.index = index;

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTodo(index));

            // Move button
            const moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to Next Phase';
            moveBtn.addEventListener('click', () => moveToNextPhase(index));

            li.appendChild(deleteBtn);
            li.appendChild(moveBtn);

            if (todo.status === 'todo') {
                todoList.appendChild(li);
            } else if (todo.status === 'inProgress') {
                inProgressList.appendChild(li);
            } else {
                doneList.appendChild(li);
            }
        });

        saveTodos();
    }

    function addTodo(text) {
        todos.push({ text, status: 'todo' });
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    function moveToNextPhase(index) {
        const todo = todos[index];
        if (todo.status === 'todo') {
            todo.status = 'inProgress';
        } else if (todo.status === 'inProgress') {
            todo.status = 'done';
        } else if (todo.status === 'done') {
            todo.status = 'todo'; // Optionally, cycle back to 'To Do'
        }
        renderTodos();
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (text) {
            addTodo(text);
            todoInput.value = '';
        }
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    renderTodos();
});
