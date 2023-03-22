/** querySelector wrapper
 * @returns { Node } an element from the DOM
 */
export function qs(selector, scope) {
  if (scope) {
    return scope.querySelector(selector);
  }
  return document.querySelector(selector);
}

/** Create an element with an optional CSS class
 * @returns { Node } an element
 */
export function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

// Create View components
export function createMenuItem(title, selected, count) {
  const item = createElement('sl-menu-item');
  item.textContent = title;

  // Set active menu element
  if (title == selected) {
    item.classList.add('active-menu-item');
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

export function createTodoItem(title, complete, project) {
  const li = createElement('li');

  const checkbox = createElement('sl-checkbox');
  checkbox.checked = complete;
  checkbox.textContent = title;

  li.append(checkbox);

  // Add badge
  if (project) {
    li.insertAdjacentHTML(
      'beforeend',
      `<sl-badge slot="suffix" data-project="${project}" pill>${project}</sl-badge>`
    );
  }

  // Delete button
  li.insertAdjacentHTML(
    'beforeend',
    `<sl-button class="delete">
       <sl-icon name="x-lg" label="Delete"></sl-icon>
     </sl-button>`
  );

  return li;
}

export function createTodoCount(count) {
  const p = createElement('p');
  const todoString = count === 1 ? 'task' : 'tasks';
  p.innerText = `${count} ${todoString} remaining`;

  return p;
}
