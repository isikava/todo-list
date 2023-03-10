/* eslint-disable max-classes-per-file */
import './style.scss';

/* Model */
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

// Retrieve an element from the DOM
function qs(selector) {
  return document.querySelector(selector);
}

// Create an element with an optional CSS class
function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

/* View */
const root = qs('#root');

// The visual representation of the todo list
const tasksEl = qs('#tasks');

function displayTodos(todos = []) {
  // Delete all nodes
  tasksEl.innerHTML = '';

  // Show default message
  if (todos.length === 0) {
    const p = createElement('p');
    p.textContent = 'Nothing to do! Add a task?';
    tasksEl.append(p);
    return;
  }

  // Create todo item nodes for each todo in state
  todos.forEach((todo, index) => {
    const li = createElement('li');
    li.dataset.id = index;

    const checkbox = createElement('sl-checkbox');
    checkbox.checked = todo.completed;

    if (todo.completed) {
      const strike = createElement('s');
      strike.textContent = todo.title;
      checkbox.append(strike);
    } else {
      checkbox.textContent = todo.title;
    }

    const deleteButton = createElement('sl-button');
    deleteButton.variant = 'danger';
    deleteButton.size = 'small';
    deleteButton.outline = true;
    deleteButton.textContent = 'Delete';

    li.append(checkbox, deleteButton);

    // Append nodes to the todo list
    tasksEl.append(li);
  });
}

displayTodos(todoList.todos);

/* Controller */
const form = qs('#addTodoForm');
const input = qs('#addTodo');

function getTodoText() {
  return input.value;
}

function resetInput() {
  input.value = '';
}

function handleAddTodo(title) {
  todoList.addTodo(new Todo(title));
  displayTodos(todoList.todos);
}

handleAddTodo('Todo 3');

function handleSubmit(e) {
  e.preventDefault();
  if (input.value) {
    handleAddTodo(input.value);
    resetInput();
  }
}

form.addEventListener('submit', handleSubmit);

function handleDelete(e) {
  if (e.target.variant === 'danger') {
    const { id } = e.target.parentElement.dataset;
    todoList.removeTodo(id);
    displayTodos(todoList.todos);
  }
}

tasksEl.addEventListener('click', handleDelete);
