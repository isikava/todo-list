import Project from './domain/Project';

const App = () => {
  let projects = [new Project('All Tasks'), new Project('Sports')];

  const getProjects = () => projects;

  const addProject = (title) => {
    const project = new Project(title);
    projects = [...projects, project];
    return projects;
  };

  const removeProject = (index) => {
    projects = projects.filter((_, i) => i !== index);
    return projects;
  };

  addProject('Study');

  projects[0].addTodo('Todo 1');

  return {
    getProjects,
    addProject,
    removeProject,
  };
};

export default App;
