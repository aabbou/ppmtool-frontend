const projectReducerDefaultState = {
  projects: [],
  project: {}
};

const projectsReducer = (state = projectReducerDefaultState, action) => {
  const { type, project, projects, identifier } = action;
  switch (type) {
    case "LOAD_PROJECTS":
      return { ...state, project: {}, projects: [...projects] };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, project]
      };
    case "DELETE_PROJECT_SUCCESS":
      return {
        ...state,
        projects: [...state.projects].filter(
          pr => pr.projectIdentifier !== identifier
        )
      };
    case "GET_PROJECT_SUCCESS":
      return {
        ...state,
        project: { ...project }
      };
    case "EDIT_PROJECT":
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
