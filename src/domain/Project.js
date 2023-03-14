import Todo from './Todo';

export default class Project {
  constructor(title = 'New Project', todos = []) {
    this.title = title;
    this.todos = todos;
  }

  addTodo(text) {
    if (!text) return;
    const todo = new Todo(text);
    this.todos.push(todo);
    return this.todos;
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
    return this.todos;
  }

  toggleTodo(index) {
    const todo = this.todos[index];
    todo.toggleComplete();
    return this.todos;
  }
}
