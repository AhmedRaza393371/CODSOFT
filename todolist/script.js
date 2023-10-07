// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask(taskText) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a delete button with a trash icon
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

    // Add a click event listener to delete the task
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);



    });

    // Append the task text and delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);
}

// Event listener for adding a task
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});


//edit btn

function editTask(taskText) {

const editButton = document.createElement('button');
editButton.classList.add('edit-btn');
editButton.innerHTML = '<i class="fas fa-edit"></i>';


}