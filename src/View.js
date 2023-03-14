import { qs, createElement } from './dom';

const View = (app) => {
  console.log('app view');

  const menu = qs('#menu');
  const tasksPane = qs('#tasksPane');
  const tasksEl = qs('#tasks');
  const h1 = qs('h1', tasksPane);
  const form = qs('#addTodoForm');
  const input = qs('#addTodo');

  function renderProjects() {
    menu.innerHTML = '';

    const projects = app.getProjects();
    const selected = app.getSelected();

    projects.forEach((project, index) => {
      const item = createElement('sl-menu-item');
      item.dataset.projectId = index;
      item.textContent = project.title;

      if (index == selected) {
        item.classList.add('active-menu');
      }
      menu.append(item);
    });
  }

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
      checkbox.checked = todo.complete;

      if (todo.complete) {
        const strike = createElement('s');
        strike.textContent = todo.title;
        checkbox.append(strike);
      } else {
        checkbox.textContent = todo.title;
      }

      const deleteButton = createElement('sl-button', 'delete');
      deleteButton.innerHTML = `<sl-icon name="trash" label="Delete"></sl-icon>`;
      deleteButton.variant = 'danger';
      deleteButton.outline = true;

      li.append(checkbox, deleteButton);

      // Append nodes to the todo list
      tasksEl.append(li);
    });

    // Add todos count
    const count = createCount(todos);
    tasksEl.append(count);
  }

  function createCount(todos = []) {
    const incompleteTodosCount = todos.filter((todo) => !todo.complete).length;
    const p = createElement('p');
    const todoString = incompleteTodosCount === 1 ? 'task' : 'tasks';
    p.innerText = `${incompleteTodosCount} ${todoString} remaining`;

    return p;
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
      renderTodos(selectedProject.todos);
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
      render();
    }
  }

  function handleDelete(e) {
    if (e.target.variant !== 'danger') return;

    const { id } = e.target.parentElement.dataset;
    const selectedProject = app.selectedProject();
    selectedProject.removeTodo(id);
    render();
  }

  function handleToggleTodo(e) {
    const { id } = e.target.parentElement.dataset;

    const selectedProject = app.selectedProject();
    selectedProject.toggleTodo(id);
    render();
  }

  // Event listeners
  menu.addEventListener('click', (e) => {
    if (e.target.dataset.projectId) {
      app.setSelected(+e.target.dataset.projectId);
      render();
    }
  });
  form.addEventListener('submit', handleSubmit);
  tasksEl.addEventListener('click', handleDelete);
  tasksEl.addEventListener('sl-change', handleToggleTodo);

  // Initial render
  render();

  return {
    render,
  };
};

export default View;
