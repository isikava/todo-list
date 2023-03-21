export default class Todo {
  constructor(id, title, project = null) {
    this.id = id;
    this.title = title;
    this.project = project;
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
    return this.complete;
  }
}
