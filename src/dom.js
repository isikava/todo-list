// Retrieve an element from the DOM
export function qs(selector, scope) {
  if (scope) {
    return scope.querySelector(selector);
  }
  return document.querySelector(selector);
}

// Create an element with an optional CSS class
export function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

// Create View components
export function createMenuItem(index, title, selected, count) {
  const item = createElement('sl-menu-item');
  item.dataset.projectId = index;
  item.textContent = title;

  // Set active menu element
  if (index == selected) {
    item.classList.add('active-menu');
  }

  // Add count todos badge
  if (count > 0) {
    item.insertAdjacentHTML(
      'beforeend',
      `<sl-badge slot="suffix" variant="neutral" pill>${count}</sl-badge>`
    );
  }

  return item;
}

export function createTodoItem(index, title, complete) {
  const li = createElement('li');
  li.dataset.id = index;

  const checkbox = createElement('sl-checkbox');
  checkbox.checked = complete;
  checkbox.textContent = title;

  const deleteButton = createElement('sl-button', 'delete');
  deleteButton.innerHTML = `<sl-icon name="x-lg" label="Delete"></sl-icon>`;

  li.append(checkbox, deleteButton);

  return li;
}

export function createTodoCount(count) {
  const p = createElement('p');
  const todoString = count === 1 ? 'task' : 'tasks';
  p.innerText = `${count} ${todoString} remaining`;

  return p;
}
