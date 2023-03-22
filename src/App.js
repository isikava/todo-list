import { nanoid } from 'nanoid';
import {
  qs,
  createElement,
  createMenuItem,
  createTodoItem,
  createTodoCount,
} from './dom';

const projects = {
  all: 'All Tasks',
  sports: 'Sports',
  study: 'Study',
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
  const $menu = document.querySelector('.menu');
  const $menuBtn = document.querySelector('#menuBtn');
  const $closeMenu = document.querySelector('#closeMenu');

  TodoList.addTodo(nanoid(10), 'New 1', 'new');
  TodoList.addTodo(nanoid(10), 'New 2', 'new');
  TodoList.addTodo(nanoid(10), 'Sport 1', projects.sports);
  TodoList.addTodo(nanoid(10), 'Study 1', projects.study);

  // Selected project
  let selected = projects.all;

  function countCompleteByProject(project) {
    return TodoList.todos.filter(
      (todo) => todo.project === project && !todo.complete
    ).length;
  }

  // Render projects menu
  function renderProjects() {
    // console.log(TodoList.projects);

    // Delete all nodes
    $menuList.innerHTML = '';

    // Create menu item for each project
    TodoList.projects.forEach((project) => {
      const count = countCompleteByProject(project);
      const item = createMenuItem(project, selected, count);
      item.dataset.projectId = project;
      $menuList.append(item);
    });
  }

  function renderTodos(todos = []) {
    // console.log(TodoList.todos);

    // Delete all nodes
    $todos.innerHTML = '';

    // Show default message
    if (todos.length === 0) {
      const p = createElement('p');
      p.textContent = 'Nothing to do! Add a task?';
      $todos.append(p);
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

    // Add todos count
    const incompleteTodosCount = todos.filter((todo) => !todo.complete).length;
    const count = createTodoCount(incompleteTodosCount);
    $todos.append(count);

    $input.focus();
  }

  // Render App
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
    closeMenu();
    render();
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const { value } = $input;
    if (value.trim() === '') {
      return;
    }

    // If selected tab is All Tasks
    // Assign project property to null
    const project = selected === projects.all ? null : selected;
    TodoList.addTodo(nanoid(10), value, project);

    $input.value = '';
    render();
  }

  function handleDeleteTodo(e) {
    if (!e.target.closest('.delete')) {
      return;
    }

    const { id } = e.target.parentElement.dataset;
    TodoList.removeTodo(id);
    render();
  }

  function handleToggleTodo(e) {
    const { id } = e.target.closest('li').dataset;
    TodoList.toggleTodo(id);
    render();
  }

  function handleAddProject(e) {
    e.preventDefault();
    const { value } = $addProjectInput;
    if (value.trim() === '') {
      return;
    }

    // Add project and select last project
    TodoList.addProject(value);
    selected = value;
    $addProjectInput.value = '';
    closeMenu();
    render();
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
  $todos.addEventListener('sl-change', handleToggleTodo);
  $addProjectForm.addEventListener('submit', handleAddProject);

  // Initial render
  render();

  return {
    render,
  };
};

export default App;
