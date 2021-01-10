import LS from './LS.js';

const ls = new LS();

class UI {
  showAllTasks() {
    let tasks = ls.fetchTask();
    let newHtml = '';
    tasks.forEach((task) => {
      newHtml += `
    <div class="task ${task.isCompleted ? 'completed' : ''}" data-createdat="${
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
    </div>
    `;
    });

    document.querySelector('.task-list').innerHTML = newHtml;
  }

  addToUI(task) {
    ls.storeTask(task);
    const newHtml = `
  <div class="task" data-createdat="${task.id}">
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
      .insertAdjacentHTML('afterbegin', newHtml);
  }

  resetForm() {
    document.querySelector('#newtaskID').value = '';
  }

  deleteTask(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    ls.deleteTask(id);
    task.remove();
  }

  completeTask(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    ls.completeTask(id);
    task.classList.toggle('completed');
  }

  editTask(e) {
    const task = e.target.parentElement.parentElement;
    const id = task.dataset.createdat;
    const data = ls.findTask(id);

    document.querySelector('#newtaskID').value = data.title;
    document.querySelector('#updateTaskId').value = data.id;

    document.querySelector('.AddTaskBtn').style.display = 'none';
    document.querySelector('.EditTaskBtn').style.display = 'inline';
    document.querySelector('.CancelTaskBtn').style.display = 'inline';
  }

  updateTask(e) {
    const taskId = document.querySelector('#updateTaskId').value;
    const taskTitle = document.querySelector('#newtaskID').value;
    const tasks = document.querySelectorAll('.task-title');

    if (taskTitle.length > 0) {
      ls.updateTask(taskId, taskTitle);
      tasks.forEach((title) => {
        if (title.parentElement.parentElement.dataset.createdat === taskId) {
          title.innerText = taskTitle;
        }
      });
    }

    document.querySelector('#newtaskID').value = '';
    document.querySelector('#updateTaskId').value = '';

    document.querySelector('.AddTaskBtn').style.display = 'inline';
    document.querySelector('.EditTaskBtn').style.display = 'none';
    document.querySelector('.CancelTaskBtn').style.display = 'none';
  }

  cancelTask(e) {
    document.querySelector('#newtaskID').value = '';
    document.querySelector('#updateTaskId').value = '';

    document.querySelector('.AddTaskBtn').style.display = 'inline';
    document.querySelector('.EditTaskBtn').style.display = 'none';
    document.querySelector('.CancelTaskBtn').style.display = 'none';
  }
}

export default UI;
