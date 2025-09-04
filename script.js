document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Clean input

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');   // Create <li>
        li.textContent = taskText;                 // Set text content

        const removeBtn = document.createElement('button'); 
        removeBtn.textContent = 'Remove';          // Button text
        removeBtn.className = 'remove-btn';        // Assign class name

        // Remove li when button clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);  // Add button inside li
        taskList.appendChild(li);   // Add li to the list

        taskInput.value = '';       // Clear input
    }

    // Event listener for Add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
