import Todo from './Todo';

export default class TodoList {
  // Initialize with an optional array of data
  constructor(dataArr) {
    if (dataArr) {
      // map it into an array of Todo objects
      this.todos = dataArr.map((todo) => new Todo(todo));
    } else {
      this.todos = [];
    }

    this.projects = this.todos.reduce(
      (values, todo) => {
        if (todo.project && !values.includes(todo.project)) {
          values.push(todo.project);
        }
        return values;
      },
      // Default projects can not be deleted
      ['Work', 'Study', 'Sports', 'Groceries']
    );
  }

  addProject(title) {
    this.projects.push(title);
  }

  addTodo(task) {
    if (!task) return;

    const todo = new Todo(task);
    this.todos.push(todo);
  }

  find(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id, newTodo) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? new Todo({ ...todo, ...newTodo }) : todo
    );
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete);
  }

  filterByProject(project) {
    return this.todos.filter((todo) => todo.project === project);
  }

  /**
   * Converts this model into a simple object for
   * JSON serialization
   */
  toJSON() {
    return this.todos;
  }
}
