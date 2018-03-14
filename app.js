//define ui vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearnBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners

loadEventListeners();

//load all event listeners

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
}

//add task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    } else {
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //append link to li
    li.appendChild(link);
    //append li to ui
    taskList.appendChild(li);
    //clear input
    taskInput.value = '';
    }
    e.preventDefault();
}