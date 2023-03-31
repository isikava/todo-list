export default class Todo {
  constructor({ id, title, project, dueDate, complete = false }) {
    this.id = id;
    this.title = title;
    this.project = project;
    this.dueDate = dueDate;
    this.complete = complete;
  }
}
