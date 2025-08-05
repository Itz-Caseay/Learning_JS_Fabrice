document.addEventListener('DOMContentLoaded', () => {
            const input = document.getElementById('input-box');
            const todo = document.getElementById('list-container');
            const submit = document.getElementById('submit');
            localStorage.getItem('todoList') && (todo.innerHTML = localStorage.getItem('todoList'));

            submit.addEventListener('click', () => {
                const value = input.value.trim();
                if (value !== "") {
                    const li = document.createElement('li');
                    li.textContent = value;
                    todo.appendChild(li);
                    input.value = "";
                }
            });

            // Toggle checked class on click
            todo.addEventListener('click', function(e) {
                if (e.target.tagName === 'LI') {
                    e.target.classList.toggle('checked');
                }
            });
            // Save to localStorage
            localStorage.setItem('todoList', todo.innerHTML);
        });

        document.getElementById('reset').addEventListener('click', () => {
            const todo = document.getElementById('list-container');
            todo.innerHTML = '';
            localStorage.removeItem('todoList');
        });