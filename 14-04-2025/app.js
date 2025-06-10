const input = document.getElementById('create-task');
const list = document.getElementById('list-container');
const button = document.getElementById('add-task');

loadTasks();

function addTask(){
    const task = input.value.trim();
    if(task){
        createTaskElement(task);

        input.value = '';
        saveTasks();

    }else{
        alert('please enter a task!');
    }
}

function createTaskElement(task){
    const tasks = document.createElement('li');
    tasks.textContent = task;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'list-check';
    list.appendChild(checkbox);
    const deletebutton =document.createElement('button');
    deletebutton.textContent = 'Delete';
    deletebutton.className = 'deleteTask';
    tasks.appendChild(deletebutton);
    list.appendChild(tasks);
    deletebutton.addEventListener('click', function(){
        list.removeChild(tasks);
        saveTasks();
    });
}
function saveTasks(){
    let tasks = [];
    list.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete','').trim());
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(createTaskElement);
}

button.addEventListener('click',addTask);