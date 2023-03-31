import { nanoid } from 'nanoid';
import { qs, createElement, createMenuItem, createTodoItem } from './dom';

const projects = {
  all: 'All Tasks',
};

const App = (TodoList) => {
  const $menuList = qs('#menuList');
  const $todosPane = qs('#todosPane');
  const $todos = qs('#todos');
  const $h1 = qs('h1', $todosPane);
  const $form = qs('#addTodoForm');
  const $input = qs('#addTodo');
  const $addProjectForm = qs('#addProjectForm');
  const $addProjectInput = qs('#addProject');
  const $menu = qs('.menu');
  const $menuBtn = qs('#menuBtn');
  const $closeMenu = qs('#closeMenu');
  const $todosMsg = qs('#todosMessage');
  const $drawer = qs('.drawer');
  $drawer.show();

  const $saveEditBtn = qs('sl-button[value="save"]', $drawer);
  const $editForm = qs('#editForm', $drawer);
  const $titleInput = qs('sl-input[name="title"]', $editForm);
  const $projectSelect = qs('sl-select[name="project"]', $editForm);
  const $dueDateInput = qs('sl-input[name="dueDate"]', $editForm);

  // Selected project
  let selected = projects.all;

  function countIncompleteByProject(project) {
    return TodoList.todos.filter(
      (todo) => todo.project === project && !todo.complete
    ).length;
  }

  /** Save to localStorage */
  const save = () => {
    localStorage.setItem('todos', JSON.stringify(TodoList));
  };

  /** Render projects menu */
  function renderProjects() {
    // console.log(TodoList.projects);

    // Delete all nodes
    $menuList.innerHTML = '';

    // Add All Tasks tab
    const $allTasksMenu = createMenuItem(projects.all, selected);
    $allTasksMenu.dataset.projectId = projects.all;
    $menuList.append($allTasksMenu);

    // Create menu item for each project
    TodoList.projects.forEach((project) => {
      // Add count of incomplete todos
      const count = countIncompleteByProject(project);
      const item = createMenuItem(project, selected, count);
      item.dataset.projectId = project;
      $menuList.append(item);
    });
  }

  /** Render Todo List */
  function renderTodos(todos = []) {
    // console.log(TodoList.todos);

    // Delete all nodes
    $todos.innerHTML = '';

    // Show default message
    $todosMsg.classList.add('hidden');
    if (todos.length === 0) {
      $todosMsg.textContent = 'Nothing to do! Add a task?';
      $todosMsg.classList.remove('hidden');
      return;
    }

    // Create todo item nodes for each todo in state
    todos.forEach((todo) => {
      const { id, title, project, complete } = todo;

      // Add badge if selected All Tasks
      const selectedProject = selected === projects.all ? project : null;

      const li = createTodoItem(title, complete, selectedProject);
      li.dataset.id = id;

      // Append nodes to the todo list
      $todos.append(li);
    });

    $input.focus();
  }

  /** Render App */
  function render() {
    renderProjects();

    if (selected === null) {
      $todosPane.classList.add('hidden');
      return;
    }

    $h1.textContent = selected;
    $todosPane.classList.remove('hidden');

    if (selected === projects.all) {
      // Display All Todos
      renderTodos(TodoList.todos);
    } else {
      // Display Filtered by Project Todos
      const filtered = TodoList.filterByProject(selected);
      renderTodos(filtered);
    }

    $input.focus();
  }

  // Event handlers
  function handleMenuChange(e) {
    if (!e.target.dataset.projectId) {
      return;
    }

    selected = e.target.dataset.projectId;

    render();
    // Close menu on smaller screens
    if (window.innerWidth < 960) {
      closeMenu();
    }
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const { value } = $input;
    if (value.trim() === '') {
      return;
    }

    // If selected tab is All Tasks
    // Assign project property to empty string
    const project = selected === projects.all ? '' : selected;
    TodoList.addTodo(nanoid(10), value, project);
    save();

    $input.value = '';
    render();
  }

  function handleDeleteTodo(e) {
    if (!e.target.matches('[data-delete]')) {
      return;
    }

    const $todoItem = e.target.closest('.todo-item');
    const { id } = $todoItem.dataset;
    $todoItem.remove();
    TodoList.removeTodo(id);
    save();
    // Update task count view
    renderProjects();
  }

  function editTodo(id) {
    // Get data from drawer form
    const data = new FormData($editForm);
    const newTodo = Object.fromEntries(data);
    if (newTodo.title.trim() === '') {
      return;
    }

    TodoList.editTodo(id, newTodo);
    save();
    render();
    // Close drawer
    $drawer.hide();
  }

  // On todo edit click
  function handleEditTodo(e) {
    if (!e.target.matches('[data-edit]')) {
      return;
    }

    // Open drawer
    $drawer.show();

    // Get current todo values
    const $todoItem = e.target.closest('.todo-item');
    const { id } = $todoItem.dataset;

    const todo = TodoList.find(id);
    const { title, project, dueDate } = todo;

    // Add select project options to form
    const options = TodoList.projects
      .map((project) => `<sl-option value="${project}">${project}</sl-option>`)
      .join('');

    $projectSelect.innerHTML = options;

    // Populate drawer form inputs with todo data
    $titleInput.value = title;
    $projectSelect.value = project;
    $dueDateInput.value = dueDate;

    // On click Save button
    // update model with new data
    $saveEditBtn.onclick = () => editTodo(id);
  }

  function handleToggleTodo(e) {
    const { id } = e.target.closest('.todo-item').dataset;
    const todo = TodoList.find(id);
    todo.complete = e.target.checked;
    save();
    // Update task count view
    renderProjects();
  }

  function handleAddProject(e) {
    e.preventDefault();
    const { value } = $addProjectInput;
    if (value.trim() === '') {
      return;
    }

    // Add project and select last project
    TodoList.addProject(value);
    save();
    selected = value;
    $addProjectInput.value = '';
    render();
    // Close menu on smaller screens
    if (window.innerWidth < 960) {
      closeMenu();
    }
  }

  function toggleMenu() {
    $menu.classList.toggle('active-menu');
  }

  function closeMenu() {
    $menu.classList.remove('active-menu');
  }

  $menuBtn.onclick = toggleMenu;
  $closeMenu.onclick = closeMenu;

  // Event listeners
  $menuList.addEventListener('click', handleMenuChange);
  $form.addEventListener('submit', handleAddTodo);
  $todos.addEventListener('click', handleDeleteTodo);
  $todos.addEventListener('click', handleEditTodo);
  $todos.addEventListener('sl-change', handleToggleTodo);
  $addProjectForm.addEventListener('submit', handleAddProject);

  // Initial render
  render();

  return {
    render,
  };
};

export default App;
