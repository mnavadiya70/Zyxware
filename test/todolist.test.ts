import ToDoList, {Task} from '../src/ToDoList';

describe('Todo List', () => {
  const todoList = new ToDoList('My To-Do List', 'This is my to-do list');
  it('should add new task', () => {
    todoList.addTask(new Task('Task 1', 'This is task 1', new Date()));
    todoList.addTask(new Task('Task 2', 'This is task 2', new Date()));
    todoList.addTask(new Task('Task 3', 'This is task 3', new Date()));
    expect(todoList.tasks).toHaveLength(3);
  });

  it('should change status', () => {
    todoList.tasks[0].setStatus('in progress');
    expect(todoList.tasks[0].status).toEqual('in progress');
  });

  it('should edit task', () => {
    todoList.editTask(
      1,
      new Task('Task 2', 'This is task 2 to be edit', new Date())
    );
    console.log(todoList);
    expect(todoList.tasks[1].description).toEqual('This is task 2 to be edit');
  });

  it('should delete task', () => {
    todoList.removeTask(2);
    console.log(todoList);
    expect(todoList.tasks.length).toEqual(2);
  });
});
