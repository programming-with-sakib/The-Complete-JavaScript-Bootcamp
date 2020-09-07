import LS from './LocalStorage.js';

function UI() {}

const ls = new LS();

UI.prototype.showAllTasks = function () {
  const tasks = ls.getTasks();
  let newHtml = '';
  tasks.forEach((task) => {
    newHtml += `
    <div class="task ${task.isCompleted ? 'completed' : ''}" data-id="${
      task.id
    }">
      <div class="task__details">
        <input type="checkbox" class="task-check" ${
          task.isCompleted ? 'checked' : ''
        }/>
        <label class="task-title">${task.title}</label>
      </div>

      <div class="task__op">
        <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
        <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
      </div>
    </div> `;
  });
  document.querySelector('.task-list').innerHTML = newHtml;
};

UI.prototype.AddToUI = function (task) {
  if (task.title.length > 0) {
    ls.storeTasks(task);
    const newtask = `
    <div class="task" data-id="${task.id}">
      <div class="task__details">
        <input type="checkbox" class="task-check" />
        <label class="task-title">${task.title}</label>
      </div>

      <div class="task__op">
        <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
        <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
      </div>
    </div>
  `;

    document
      .querySelector('.task-list')
      .insertAdjacentHTML('afterbegin', newtask);
  }
};

UI.prototype.clearField = function () {
  document.querySelector('#newtaskID').value = '';
};

UI.prototype.updateTask = function (e) {
  const task = e.target.parentElement.parentElement;
  const id = task.dataset.id;
  const data = ls.findTask(id);

  document.querySelector('.UpdateTaskId').innerText = id;
  document.querySelector('#newtaskID').value = data.title;

  document.querySelector('.AddTaskBtn').style.display = 'none';
  document.querySelector('.EditTaskBtn').style.display = 'inline';
  document.querySelector('.CancelTaskBtn').style.display = 'inline';
};

UI.prototype.deleteTask = function (e) {
  const task = e.target.parentElement.parentElement;
  const id = task.dataset.id;
  ls.deleteTask(id);
  task.remove();
};

UI.prototype.editTask = function () {
  const taskId = document.querySelector('.UpdateTaskId').innerText;
  const taskTitle = document.querySelector('#newtaskID').value;

  if (taskTitle.length > 0) {
    ls.updateTask(taskTitle, taskId);

    const tasks = document.querySelectorAll('.task-title');
    tasks.forEach((task) => {
      if (
        task.parentElement.parentElement.dataset.id === taskId
      ) {
        task.innerText = taskTitle;
      }
    });

    console.log(taskTitle, taskId);

    document.querySelector('#newtaskID').value = '';

    document.querySelector('.AddTaskBtn').style.display = 'inline';
    document.querySelector('.EditTaskBtn').style.display = 'none';
    document.querySelector('.CancelTaskBtn').style.display = 'none';

    document.querySelector('.UpdateTaskId').innerText = '';
  }
};

UI.prototype.cancelTask = function () {
  document.querySelector('#newtaskID').value = '';

  document.querySelector('.AddTaskBtn').style.display = 'inline';
  document.querySelector('.EditTaskBtn').style.display = 'none';
  document.querySelector('.CancelTaskBtn').style.display = 'none';

  document.querySelector('.UpdateTaskId').innerText = '';
};

UI.prototype.completeTask = function (e) {
  const task = e.target.parentElement.parentElement;
  const id = task.dataset.id;

  task.classList.toggle('completed');

  ls.completeTask(id);
};

export default UI;