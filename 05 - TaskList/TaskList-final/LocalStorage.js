function LS() {}

LS.prototype.getTasks = function () {
  let tasks = localStorage.getItem('tasks');
  // if (tasks) {
  //   tasks = JSON.parse(tasks);
  // } else {
  //   tasks = [];
  // }

  tasks = tasks ? JSON.parse(tasks) : [];
  return tasks;
};

LS.prototype.storeTasks = function (task) {
  const tasks = this.getTasks();
  tasks.unshift(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.findTask = function (id) {
  const tasks = this.getTasks();
  // const task = tasks.find((task) => task.id === id);
  // return task;

  return tasks.find((task) => task.id === id);
};

LS.prototype.updateTask = function (title, id) {
  let tasks = this.getTasks();
  let index = tasks.findIndex((task) => task.id === id);
  tasks[index].title = title;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.deleteTask = function (id) {
  let tasks = this.getTasks();
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

LS.prototype.completeTask = function (id) {
  let tasks = this.getTasks();
  let index = tasks.findIndex((task) => task.id === id);
  // if(tasks[index].isCompleted) {
  //   task[index].isCompleted = false;
  // } else {
  //   task[index].isCompleted = true;
  // }
  tasks[index].isCompleted = !tasks[index].isCompleted;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default LS;