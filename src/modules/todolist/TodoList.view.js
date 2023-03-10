import { createElement, qs } from '../utils';
import TodoListController from './TodoList.controller';

const TodoListView = (model) => {
  console.log('todolist view');

  console.log(model);
  const controller = TodoListController(model);

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

  tasksEl.addEventListener('click', controller.handleDelete);
  tasksEl.addEventListener('sl-change', controller.handleToggleTodo);

  return {
    displayTodos,
  };
};

export default TodoListView;
