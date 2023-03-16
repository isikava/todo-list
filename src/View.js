import {
  qs,
  createElement,
  createMenuItem,
  createTodoItem,
  createTodoCount,
} from './dom';

const View = (app) => {
  const menu = qs('#menu');
  const tasksPane = qs('#tasksPane');
  const tasksEl = qs('#tasks');
  const h1 = qs('h1', tasksPane);
  const form = qs('#addTodoForm');
  const input = qs('#addTodo');

  function renderProjects() {
    // Get state
    const projects = app.getProjects();
    const selected = app.getSelected();

    // Delete all nodes
    menu.innerHTML = '';

    // Populate projects list
    projects.forEach((project, index) => {
      const item = createMenuItem(index, project.title, selected);
      menu.append(item);
    });

    input.focus();
  }

  function renderTodos() {
    // Get state
    const { todos } = app.selectedProject();

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
      const { title, complete } = todo;
      const li = createTodoItem(index, title, complete);

      // Append nodes to the todo list
      tasksEl.append(li);
    });

    // Add todos count
    const incompleteTodosCount = todos.filter((todo) => !todo.complete).length;
    const count = createTodoCount(incompleteTodosCount);
    tasksEl.append(count);

    input.focus();
  }

  function render() {
    renderProjects();

    const selected = app.getSelected();
    const selectedProject = app.selectedProject();

    if (selected === null) {
      tasksPane.style.display = 'none';
    } else {
      tasksPane.style.display = '';
      h1.textContent = selectedProject.title;
      renderTodos();
    }
  }

  function resetInput() {
    input.value = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.value) {
      const selectedProject = app.selectedProject();
      selectedProject.addTodo(input.value);
      resetInput();
      renderTodos();
    }
  }

  function handleDeleteTodo(e) {
    if (!e.target.classList.contains('delete')) return;

    const { id } = e.target.parentElement.dataset;
    const selectedProject = app.selectedProject();
    selectedProject.removeTodo(id);
    renderTodos();
  }

  function handleToggleTodo(e) {
    const { id } = e.target.parentElement.dataset;

    const selectedProject = app.selectedProject();
    selectedProject.toggleTodo(id);
    renderTodos();
  }

  function handleMenuChange(e) {
    if (!e.target.dataset.projectId) return;

    app.setSelected(+e.target.dataset.projectId);
    render();
  }

  // Event listeners
  menu.addEventListener('click', handleMenuChange);
  form.addEventListener('submit', handleSubmit);
  tasksEl.addEventListener('click', handleDeleteTodo);
  tasksEl.addEventListener('sl-change', handleToggleTodo);

  // Initial render
  render();

  return {
    render,
  };
};

export default View;
