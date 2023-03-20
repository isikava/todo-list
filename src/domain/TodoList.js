import Todo from './Todo';

export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  // Get array of unique projects
  get projects() {
    return this.todos.reduce(
      (values, todo) => {
        if (!values.includes(todo.project)) {
          values.push(todo.project);
        }
        return values;
      },
      ['all']
    );
  }

  addTodo(text, project) {
    if (!text) return;

    const todo = new Todo(text, project);
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

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete);
  }

  getProjectTodos(project) {
    return this.todos.filter((todo) => todo.project === project);
  }
}
