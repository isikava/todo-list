import Todo from './Todo';

export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
    this.projects = this.todos.reduce(
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

  addProject(title) {
    this.projects.push(title);
  }

  addTodo(id, text, project) {
    if (!text) return;

    const todo = new Todo(id, text, project);
    this.todos.push(todo);
  }

  find(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id) {
    const todo = this.find(id);
    todo.toggleComplete();
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.complete);
  }

  filterByProject(project) {
    return this.todos.filter((todo) => todo.project === project);
  }
}
