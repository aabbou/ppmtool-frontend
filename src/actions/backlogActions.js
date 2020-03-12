import {
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  ADD_PROJECT_TASK,
  UPDATE_PROJECT_TASK,
  GET_BACKLOG_SUCCESS,
  GET_PROJECT_TASK_SUCCESS,
  DELETE_PROJECT_TASK_SUCCESS,
  ADD_PROJECT_TASK_SUCCESS,
  UPDATE_PROJECT_TASK_SUCCESS
} from "./types";

//Fix bug with priority in Spring Boot Server, needs to check null first

//
//Saga
//
export const addProjectTask = (backlog_id, project_task, history) => {
  return {
    type: ADD_PROJECT_TASK,
    backlog_id,
    project_task,
    history
  };
};

export const getBacklog = backlog_id => {
  return {
    type: GET_BACKLOG,
    backlog_id
  };
};

export const getProjectTask = (backlog_id, pt_id) => {
  return {
    type: GET_PROJECT_TASK,
    backlog_id,
    pt_id
  };
};

export const updateProjectTask = (backlog_id, pt_id, project_task, history) => {
  return {
    type: UPDATE_PROJECT_TASK,
    backlog_id,
    pt_id,
    project_task,
    history
  };
};

export const deleteProjectTask = (backlog_id, pt_id) => {
  return {
    type: DELETE_PROJECT_TASK,
    backlog_id,
    pt_id
  };
};

//
//Redux
//

export const addProjectTaskSuccess = project_task => {
  return {
    type: ADD_PROJECT_TASK_SUCCESS,
    project_task
  };
};

export const getBacklogSuccess = backlog => {
  return {
    type: GET_BACKLOG_SUCCESS,
    backlog
  };
};

export const getProjectTaskSuccess = project_task => {
  return {
    type: GET_PROJECT_TASK_SUCCESS,
    project_task
  };
};

export const updateProjectTaskSuccess = project_task => {
  return {
    type: UPDATE_PROJECT_TASK_SUCCESS,
    project_task
  };
};

export const deleteProjectTaskSuccess = pt_id => {
  return {
    type: DELETE_PROJECT_TASK_SUCCESS,
    pt_id
  };
};
