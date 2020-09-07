import Task from './Task.js';
import UI from './UI.js';

const ui = new UI();

ui.showAllTasks();

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {
  const title = document.querySelector('#newtaskID').value;
  const task = new Task(title);
  ui.AddToUI(task);
  ui.clearField();
});

document.querySelector('.task-list').addEventListener('click', (e) => {
  if (e.target.className.includes('task__op_edit')) {
    ui.updateTask(e);
  }
  if (e.target.className.includes('task__op_delete')) {
    ui.deleteTask(e);
  }

  if (e.target.className.includes('task-check')) {
    ui.completeTask(e);
  }
});

document.querySelector('.EditTaskBtn').addEventListener('click', (e) => {
  ui.editTask();
});

document.querySelector('.CancelTaskBtn').addEventListener('click', (e) => {
  ui.cancelTask();
});
