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
