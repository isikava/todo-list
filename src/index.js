import './style.scss';
import App from './App';
import View from './View';

const app = App();
app.addProject('Home');

const view = View(app);
app.addProject();
view.render();
