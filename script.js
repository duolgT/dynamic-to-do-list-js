document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks(); // Load tasks from localStorage

    // Add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const li = document.createElement('li');

        // Create span for task text (so the button doesn’t get overwritten)
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove task on click
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText);
        };

        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to storage
        saveTaskToStorage(taskText);

        // Clear input
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Save task to localStorage
    function saveTaskToStorage(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove task from localStorage
    function removeTaskFromStorage(taskToRemove) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskToRemove);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load saved tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.forEach(taskText => {
            const li = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            removeBtn.onclick = function () {
                taskList.removeChild(li);
                removeTaskFromStorage(taskText);
            };

            li.appendChild(taskSpan);
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
});
