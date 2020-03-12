import {
  GET_BACKLOG_SUCCESS,
  GET_PROJECT_TASK_SUCCESS,
  DELETE_PROJECT_TASK_SUCCESS,
  ADD_PROJECT_TASK_SUCCESS
} from "../actions/types";

const initialState = {
  project_tasks: [],
  project_task: {}
};

const backlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BACKLOG_SUCCESS:
      return {
        ...state,
        project_tasks: [...action.backlog],
        project_task: {}
      };

    case GET_PROJECT_TASK_SUCCESS:
      return {
        ...state,
        project_task: { ...action.project_task }
      };

    case ADD_PROJECT_TASK_SUCCESS:
      return {
        ...state,
        project_tasks: [...state.project_tasks, action.project_task]
      };

    case DELETE_PROJECT_TASK_SUCCESS:
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          project_task => project_task.projectSequence !== action.pt_id
        )
      };

    default:
      return state;
  }
};

export default backlogReducer;
