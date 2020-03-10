import {
  GET_PROJECTS_SUCCESS,
  ADD_PROJECT_SUCCESS,
  GET_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS
} from "../actions/types";

const projectReducerDefaultState = {
  projects: [],
  project: {}
};

const projectsReducer = (state = projectReducerDefaultState, action) => {
  const { type, project, projects, identifier } = action;
  switch (type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, project: {}, projects: [...projects] };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, project]
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects].filter(
          pr => pr.projectIdentifier !== identifier
        )
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        project: { ...project }
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects].map(pr => {
          return pr.id === project.id ? { ...pr, ...project } : pr;
        })
      };
    default:
      return {
        ...state
      };
  }
};

export default projectsReducer;
