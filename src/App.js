import Project from './domain/Project';

const App = () => {
  console.log('App init');

  let projects = [new Project('All Tasks'), new Project('Sports')];
  let selected = 0;

  const getProjects = () => projects;

  const getSelected = () => selected;

  const setSelected = (num) => (selected = num);

  const selectedProject = () => projects.find((_, index) => index == selected);

  const addProject = (title) => {
    console.log('adding project');
    const project = new Project(title);
    projects = [...projects, project];
    console.log(projects);
    return projects;
  };

  const removeProject = (index) => {
    console.log('removing project');
    projects = projects.filter((_, i) => i !== index);
    console.log(projects);
    return projects;
  };

  addProject('Study');

  projects[0].addTodo('Todo 1');

  return {
    getProjects,
    getSelected,
    setSelected,
    selectedProject,
    addProject,
    removeProject,
  };
};

export default App;
