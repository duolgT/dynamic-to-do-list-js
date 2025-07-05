document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks(); // Load saved tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and clean input

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');         // Create <li>
        li.textContent = taskText;                        // Set textContent to taskText

        const removeBtn = document.createElement('button'); // Create Remove button
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove li when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText); // Also remove from storage
        };

        li.appendChild(removeBtn); // Append remove button to li
        taskList.appendChild(li);  // Append li to ul list

        taskInput.value = ''; // Clear input field

        saveTaskToStorage(taskText); // Save to storage
    }

    // Attach event listener for button click
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Save a task to localStorage
    function saveTaskToStorage(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove a task from localStorage
    function removeTaskFromStorage(taskToRemove) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskToRemove);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks on page load
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            removeBtn.onclick = function () {
                taskList.removeChild(li);
                removeTaskFromStorage(taskText);
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
});
