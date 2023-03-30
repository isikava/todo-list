export default class Todo {
  constructor({ id, title, project, complete = false }) {
    this.id = id;
    this.title = title;
    this.project = project;
    this.complete = complete;
  }
}
