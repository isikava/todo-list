import TodoList from './domain/TodoList';
import App from './App';
import './style.scss';

const todoList = new TodoList();
const app = App(todoList);
