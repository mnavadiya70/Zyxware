// interface Task {
//   name: string;
//   description: string;
//   date: Date;
//   status?: string;
// }

export class Task {
  name: string;
  description: string;
  date: Date;
  status?: string;
  constructor(
    name: string,
    description: string,
    date: Date,
    status: string = 'not completed'
  ) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.status = status;
  }

  setStatus(status: string) {
    this.status = status;
  }
}

class ToDoList {
  name: string;
  description: string;
  tasks: Task[];
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.tasks = [];
  }

  addTask(task: Task) {
    const obj = new Task(task.name, task.description, task.date, task.status);
    this.tasks.push(obj);
  }

  editTask(index: number, task: Task) {
    let editTask = this.tasks[index];
    editTask.date = task.date;
    editTask.description = task.description;
    editTask.name = task.name;
    editTask.status = task.status ?? editTask.status;
    this.tasks[index] = editTask;
  }

  removeTask(indexToBeDeleted: number) {
    this.tasks = this.tasks.filter((task, index) => index !== indexToBeDeleted);
  }
}

export default ToDoList;

// const todoList = new ToDoList('My To-Do List', 'This is my to-do list');
// todoList.addTask(new Task('Task 1', 'This is task 1', new Date()));
// todoList.addTask(new Task('Task 2', 'This is task 2', new Date()));
// todoList.addTask(new Task('Task 3', 'This is task 3', new Date()));
// console.log(todoList);
