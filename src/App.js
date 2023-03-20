const projects = {
  all: 'all',
  sports: 'sports',
  study: 'study',
};

const App = (TodoList) => {
  const $root = document.querySelector('#root');

  TodoList.addTodo('Todo 1', 'new');
  TodoList.addTodo('Todo 2', 'new');
  TodoList.addTodo('Todo 3', projects.sports);
  TodoList.addTodo('Todo 4', projects.study);
  // TodoList.removeTodo(3);
  TodoList.toggleTodo(0);
  // TodoList.removeCompleted();

  function renderTodos() {
    console.log(TodoList.todos);
  }

  function renderProjects() {
    console.log(TodoList.projects);
  }

  function render() {
    renderProjects();
    renderTodos();
  }

  render();

  return {
    render,
  };
};

export default App;
