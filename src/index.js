import './style.scss';
import { TodoListView } from './modules';
import { createElement, qs } from './modules/utils';

const view = TodoListView();

const projectsEl = qs('.menu');
const tasksPane = qs('.tasks-pane');
const h1 = qs('h1');

const projects = [
  { id: 1, name: 'All Tasks' },
  { id: 2, name: 'Sports' },
];
let selectedId = null;

function renderProjects(projects = []) {
  projectsEl.innerHTML = '';

  projects.forEach((project) => {
    const item = createElement('sl-menu-item');
    item.dataset.projectId = project.id;
    item.textContent = project.name;

    if (project.id == selectedId) {
      item.classList.add('active-menu');
    }
    projectsEl.append(item);
  });
}

function render() {
  renderProjects(projects);
  const selectedProject = projects.find((project) => project.id == selectedId);
  if (selectedId === null) {
    tasksPane.style.display = 'none';
  } else {
    tasksPane.style.display = '';
    h1.textContent = selectedProject.name;
  }
}

render();

projectsEl.addEventListener('click', (e) => {
  if (e.target.dataset.projectId) {
    selectedId = e.target.dataset.projectId;
    render();
  }
});
