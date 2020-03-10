import {
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  GET_PROJECTS_SUCCESS,
  ADD_PROJECT_SUCCESS,
  GET_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS
} from "./types";

//
//Saga
//
const getProjects = () => {
  return {
    type: GET_PROJECTS
  };
};

const addProject = (project, history) => {
  return {
    type: ADD_PROJECT,
    project,
    history
  };
};

const getProject = identifier => {
  return {
    type: GET_PROJECT,
    identifier
  };
};

const updateProject = (project, history) => {
  return {
    type: UPDATE_PROJECT,
    project,
    history
  };
};

const deleteProject = identifier => {
  return {
    type: DELETE_PROJECT,
    identifier
  };
};

//
//Redux
//

const getProjectsSuccess = projects => {
  return {
    type: GET_PROJECTS_SUCCESS,
    projects
  };
};

const addProjectSuccess = project => {
  return {
    type: ADD_PROJECT_SUCCESS,
    project
  };
};

const getProjectSuccess = project => {
  return {
    type: GET_PROJECT_SUCCESS,
    project
  };
};

const deleteProjectSuccess = identifier => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    identifier
  };
};

const updateProjectSuccess = project => {
  return {
    type: UPDATE_PROJECT_SUCCESS,
    project
  };
};

export {
  getProjects,
  addProject,
  getProject,
  updateProject,
  deleteProject,
  //
  getProjectsSuccess,
  addProjectSuccess,
  getProjectSuccess,
  updateProjectSuccess,
  deleteProjectSuccess
};
