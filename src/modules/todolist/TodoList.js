import Todo from './Todo';

export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  addTodo(text) {
    if (!text) return;
    const todo = new Todo(text);

    console.log('adding todo');
    this.todos.push(todo);
    return this.todos;
  }

  removeTodo(index) {
    console.log('deleting todo');
    this.todos.splice(index, 1);
    return this.todos;
  }

  toggleTodo(index) {
    console.log('toggle todo');
    const todo = this.todos[index];
    todo.toggleComplete();
    return this.todos;
  }
}
