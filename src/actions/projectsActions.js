//
//Saga
//
const getAllProjects = () => {
  return {
    type: "GET_PROJECTS"
  };
};

const createProject = (project, history) => {
  return {
    type: "CREATE_PROJECT",
    project,
    history
  };
};

const getProject = identifier => {
  return {
    type: "GET_PROJECT",
    identifier
  };
};

const updateProject = (project, history) => {
  return {
    type: "UPDATE_PROJECT",
    project,
    history
  };
};

const deleteProject = identifier => {
  return {
    type: "DELETE_PROJECT",
    identifier
  };
};

//
//Redux
//

const loadProjects = projects => {
  return {
    type: "LOAD_PROJECTS",
    projects
  };
};

const addProject = project => {
  return {
    type: "ADD_PROJECT",
    project
  };
};

const getProjectSuccess = project => {
  return {
    type: "GET_PROJECT_SUCCESS",
    project
  };
};

const deleteProjectSuccess = identifier => {
  return {
    type: "DELETE_PROJECT_SUCCESS",
    identifier
  };
};

const editProject = project => {
  return {
    type: "EDIT_PROJECT",
    project
  };
};

const removeProject = id => {
  return {
    type: "REMOVE_PROJECT",
    id
  };
};

export {
  loadProjects,
  addProject,
  removeProject,
  editProject,
  createProject,
  getAllProjects,
  getProject,
  getProjectSuccess,
  updateProject,
  deleteProjectSuccess,
  deleteProject
};
