const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask(taskText) {
    const listItem = document.createElement('li');
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('task-text');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';

    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });
    
    editButton.addEventListener('click', function () {
        const newText = prompt('Edit task:', taskTextElement.textContent);
        if (newText !== null) {
            taskTextElement.textContent = newText;
        }
    });

    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    taskList.appendChild(listItem);
}

addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});
