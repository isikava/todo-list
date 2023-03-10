import TodoListView from './TodoList.view';

export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
    this.view = TodoListView(this);
    console.log('view', this.view);
  }

  addTodo(todo) {
    if (!todo) return;

    console.log('adding todo');
    this.todos.push(todo);
    this.update();
  }

  removeTodo(index) {
    console.log('deleting todo');
    this.todos.splice(index, 1);
    this.update();
  }

  toggleTodo(index) {
    console.log('toggle todo');
    const todo = this.todos[index];
    todo.toggleComplete();
    this.update();
  }

  update() {
    this.view.displayTodos(this.todos);
  }
}
