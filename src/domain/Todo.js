export default class Todo {
  constructor(title) {
    this.title = title;
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}
