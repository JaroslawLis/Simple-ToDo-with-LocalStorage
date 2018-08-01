const todo = document.querySelector('.main-task');
const addNewTask = document.querySelector('.add-task');
const taskList = JSON.parse(localStorage.getItem('savedTasks')) || [];
addNewTask.addEventListener('submit', addTask);
todo.addEventListener('click', removeTask)

function addTask(event) {

    event.preventDefault();
    const textTask = document.querySelector('#add-task').value;
    const dateTask = document.querySelector('#add-date').value;
    const myTask = {
        textTask,
        dateTask
    }

    taskList.push(myTask);
    writeTask();
    showTasks();

    this.reset();
};

function showTasks() {

    let html = taskList.map(function (data, i) {
        return '<tr><td class="date-in-table">' + (i+1) + '</td><td class="task-in-table">' + data.textTask + '</td><td class="date-in-table"> ' + data.dateTask + '</td><td><button class="remove">usuń</button></td></tr>';
    });
    todo.innerHTML = html.join('');
};

function writeTask() {
    localStorage.setItem('savedTasks', JSON.stringify(taskList));
};

function removeTask(event) {

    const myElement = event.target;
    if (myElement.className === 'remove') {

        let idzad = myElement.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.outerText;
        let temp = taskList.splice(idzad, 1);
        writeTask();
        showTasks();
    }
}


showTasks();
