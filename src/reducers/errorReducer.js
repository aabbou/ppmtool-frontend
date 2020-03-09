import { GET_ERRORS } from "../actions/types";

const errorReducerDefaultState = {};

const errorsReducer = (state = errorReducerDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return payload;
    default:
      return state;
  }
};

export default errorsReducer;
