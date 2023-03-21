import Todo from './Todo';

export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  // Get array of unique projects
  get projects() {
    return this.todos.reduce(
      (values, todo) => {
        if (!values.includes(todo.project) && todo.project !== null) {
          values.push(todo.project);
        }
        return values;
      },
      // Default projects can not be deleted
      ['All Tasks', 'Work', 'Study', 'Sports', 'Groceries']
    );
  }

  addTodo(id, text, project) {
    if (!text) return;

    const todo = new Todo(id, text, project);
    this.todos.push(todo);
    return this.todos;
  }

  find(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos;
  }

  toggleTodo(id) {
    const todo = this.find(id);
    todo.toggleComplete();
    return this.todos;
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete);
  }

  filterByProject(project) {
    return this.todos.filter((todo) => todo.project === project);
  }
}
