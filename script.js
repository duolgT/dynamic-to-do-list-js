// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // 1. Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // Task list (ul)

    // 2. Define the addTask function
    function addTask() {
        // Get the input value and trim spaces
        const taskText = taskInput.value.trim();

        // If input is empty, alert user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText; // Set li text

        // Create a Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn'; // Assign class

        // When Remove is clicked → delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // 3. Attach Event Listeners
    // Click "Add Task" button
    addButton.addEventListener('click', addTask);

    // Press Enter inside input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // 4. Invoke addTask on DOMContentLoaded (per instructions)
    // This runs once when the page loads, but since the input is empty
    // it will just trigger the alert until a user types a task.
    addTask();
});
