import {
  qs,
  createElement,
  createMenuItem,
  createTodoItem,
  createTodoCount,
} from './dom';

const View = (App) => {
  const menuList = qs('#menuList');
  const todosPane = qs('#todosPane');
  const todosEl = qs('#todos');
  const h1 = qs('h1', todosPane);
  const form = qs('#addTodoForm');
  const input = qs('#addTodo');
  const addProjectForm = qs('#addProjectForm');
  const addProjectInput = qs('#addProject');

  // State of the App
  let projects = App.getProjects();
  let selected = 0;

  function renderProjects() {
    // Get state
    projects = App.getProjects();

    // Delete all nodes
    menuList.innerHTML = '';

    // Populate projects list
    projects.forEach((project, index) => {
      const item = createMenuItem(index, project.title, selected);
      menuList.append(item);
    });

    input.focus();
  }

  function renderTodos() {
    // Get state
    const { todos } = projects[selected];

    // Delete all nodes
    todosEl.innerHTML = '';

    // Show default message
    if (todos.length === 0) {
      const p = createElement('p');
      p.textContent = 'Nothing to do! Add a task?';
      todosEl.append(p);
      return;
    }

    // Create todo item nodes for each todo in state
    todos.forEach((todo, index) => {
      const { title, complete } = todo;
      const li = createTodoItem(index, title, complete);

      // Append nodes to the todo list
      todosEl.append(li);
    });

    // Add todos count
    const incompleteTodosCount = todos.filter((todo) => !todo.complete).length;
    const count = createTodoCount(incompleteTodosCount);
    todosEl.append(count);

    input.focus();
  }

  // Render App
  function render() {
    projects = App.getProjects();
    const selectedProject = projects[selected];

    renderProjects();

    if (selected === null) {
      todosPane.style.display = 'none';
    } else {
      todosPane.style.display = '';
      h1.textContent = selectedProject.title;
      renderTodos();
    }
  }

  function resetInput() {
    input.value = '';
  }

  // Handlers
  function handleAddTodo(e) {
    e.preventDefault();
    const { value } = input;
    if (value.trim() === '') {
      return;
    }

    const selectedProject = projects[selected];
    selectedProject.addTodo(value);
    resetInput();
    renderTodos();
  }

  function handleDeleteTodo(e) {
    if (!e.target.closest('.delete')) {
      return;
    }

    const { id } = e.target.parentElement.dataset;
    const selectedProject = projects[selected];
    selectedProject.removeTodo(id);
    renderTodos();
  }

  function handleToggleTodo(e) {
    const { id } = e.target.closest('li').dataset;
    const selectedProject = projects[selected];
    selectedProject.toggleTodo(id);
    renderTodos();
  }

  function handleMenuChange(e) {
    if (!e.target.dataset.projectId) {
      return;
    }

    selected = +e.target.dataset.projectId;
    render();
  }

  function handleAddProject(e) {
    e.preventDefault();
    const { value } = addProjectInput;
    if (value.trim() === '') {
      return;
    }

    // Add project and select last project
    selected = App.addProject(value).length - 1;
    render();
    addProjectInput.value = '';
  }

  // Event listeners
  menuList.addEventListener('click', handleMenuChange);
  addProjectForm.addEventListener('submit', handleAddProject);
  form.addEventListener('submit', handleAddTodo);
  todosEl.addEventListener('click', handleDeleteTodo);
  todosEl.addEventListener('sl-change', handleToggleTodo);

  // Initial render
  render();

  return {
    render,
  };
};

export default View;
