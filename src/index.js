import TodoList from './domain/TodoList';
import App from './App';
import data from './data';
import './style.scss';

const todoList = new TodoList(data);
const app = App(todoList);
