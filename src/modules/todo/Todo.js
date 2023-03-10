export default class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  toggleComplete() {
    console.log('todo completed');
    this.completed = !this.completed;
    this.render();
  }

  render() {
    console.log(this);
  }
}
