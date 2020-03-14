import { CREATE_NEW_USER, LOGIN_USER, SET_CURRENT_USER } from "./types";
import setJWTToken from "../security/securityUtils";

const createNewUser = (newUser, history) => {
  return {
    type: CREATE_NEW_USER,
    newUser,
    history
  };
};

const loginUser = (loginInfo, history) => {
  return {
    type: LOGIN_USER,
    loginInfo,
    history
  };
};

const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload
  };
};

const logout = () => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  return {
    type: SET_CURRENT_USER,
    payload: null
  };
};

export { createNewUser, loginUser, setCurrentUser, logout };
