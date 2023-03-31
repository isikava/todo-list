import './style.scss';
import TodoList from './domain/TodoList';
import App from './App';
import data from './data';
import './theme';

/* Init App */
const todoList = new TodoList(data);
const app = App(todoList);
