import './style.scss';
import { Todo, TodoList } from './modules';

const todo1 = new Todo('Todo 1');
todo1.toggleComplete();
const todo2 = new Todo('Todo 2');

const todoList = new TodoList();
todoList.addTodo(todo1);
todoList.addTodo(todo2);

const togTodo = new Todo('Toggle me');
todoList.addTodo(togTodo);
todoList.toggleTodo(2);
