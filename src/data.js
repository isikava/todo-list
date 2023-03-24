import { nanoid } from 'nanoid';

const defaultData = [
  { title: 'Learn MVC', project: 'Study' },
  {
    title: 'Buy Bananas for the pancakes',
    project: 'Groceries',
    complete: true,
  },
  { title: 'Go to the Gym', project: 'Sports', complete: true },
  { title: 'Prepare roadmap for MVP', project: 'Work' },
  { title: 'Read chapter 3 from Math book', project: 'Study' },
].map((todo) => ({ ...todo, id: nanoid(10) }));

// Load saves todos from localStorage
const data = localStorage.todos
  ? JSON.parse(localStorage.getItem('todos'))
  : defaultData;

export default data;
