class LS {
  fetchTask() {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    return tasks;
  }

  storeTask(task) {
    let tasks = this.fetchTask();
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  completeTask(id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    tasks[index].isCompleted = !tasks[index].isCompleted;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  findTask(id) {
    let tasks = this.fetchTask();
    return tasks.find((task) => task.id === id);
  }

  updateTask(id, title) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((task) => task.id === id);
    tasks[index].title = title;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export default LS;
