/* eslint-disable max-classes-per-file */
import './style.scss';

class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  toggleComplete() {
    console.log('todo completed');
    this.completed = !this.completed;
    this.render();
  }

  render() {
    console.log(this);
  }
}

const todo1 = new Todo('Todo 1');
todo1.toggleComplete();
const todo2 = new Todo('Todo 2');

class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  addTodo(todo) {
    if (!todo) return;

    console.log('adding todo');
    this.todos.push(todo);
    this.render();
  }

  removeTodo(index) {
    console.log('deleting todo');
    this.todos.splice(index, 1);
    this.render();
  }

  render() {
    console.table(this.todos);
  }
}

const todoList = new TodoList();
todoList.addTodo(todo1);
todoList.addTodo(todo2);
todoList.removeTodo(0);
