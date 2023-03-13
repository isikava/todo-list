import TodoList from './TodoList';
import { createElement, qs } from '../utils';

const TodoListView = () => {
  const model = new TodoList();

  model.addTodo('Todo 1');
  model.addTodo('Todo 2');

  model.addTodo('Toggle me');
  model.toggleTodo(2);

  const form = qs('#addTodoForm');
  const input = qs('#addTodo');
  // The visual representation of the todo list
  const tasksEl = qs('#tasks');

  function renderTodos(todos = []) {
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

  function getTodoText() {
    return input.value;
  }

  function resetInput() {
    input.value = '';
  }

  function handleDelete(e) {
    if (e.target.variant !== 'danger') return;

    const { id } = e.target.parentElement.dataset;
    renderTodos(model.removeTodo(id));
  }

  // Receive change event
  function handleToggleTodo(e) {
    // Get change target element index
    const { id } = e.target.parentElement.dataset;
    // Update Model with index
    renderTodos(model.toggleTodo(id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (getTodoText()) {
      renderTodos(model.addTodo(getTodoText()));
      resetInput();
    }
  }

  form.addEventListener('submit', handleSubmit);
  tasksEl.addEventListener('click', handleDelete);
  tasksEl.addEventListener('sl-change', handleToggleTodo);

  // Display initial todos
  renderTodos(model.todos);

  return {
    renderTodos,
  };
};

export default TodoListView;
