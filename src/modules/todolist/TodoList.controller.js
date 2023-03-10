import Todo from '../todo/Todo';
import { qs } from '../utils';

const TodoListController = (todoList) => {
  const form = qs('#addTodoForm');
  const input = qs('#addTodo');

  function getTodoText() {
    return input.value;
  }

  function resetInput() {
    input.value = '';
  }

  function handleAddTodo(title) {
    todoList.addTodo(new Todo(title));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (getTodoText()) {
      handleAddTodo(getTodoText());
      resetInput();
    }
  }

  function handleDelete(e) {
    if (e.target.variant === 'danger') {
      const { id } = e.target.parentElement.dataset;
      todoList.removeTodo(id);
    }
  }

  // Receive change event
  function handleToggleTodo(e) {
    // Get change target element
    const { id } = e.target.parentElement.dataset;
    // Update Model with index
    todoList.toggleTodo(id);
  }

  form.addEventListener('submit', handleSubmit);

  return {
    handleAddTodo,
    handleDelete,
    handleToggleTodo,
  };
};

export default TodoListController;
