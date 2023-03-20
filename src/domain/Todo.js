export default class Todo {
  constructor(title, project = null) {
    this.title = title;
    this.project = project;
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
    return this.complete;
  }
}
