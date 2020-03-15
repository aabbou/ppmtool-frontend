import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ERRORS } from "../actions/types";
import axios from "axios";
import { CREATE_NEW_USER, LOGIN_USER } from "../actions/types";
import { setCurrentUser } from "../actions/securityActions";
import jwt_decode from "jwt-decode";
import setJWTToken from "../security/securityUtils";

const apiUrl = "/api/users";

const postCreateUserAPI = user => axios.post(`${apiUrl}/register`, user);

function* createNewUser(action) {
  try {
    yield call(postCreateUserAPI, action.newUser);
    yield put({ type: GET_ERRORS, payload: {} });
    yield action.history.push("/login");
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

const postLoginUserAPI = loginInfo => axios.post(`${apiUrl}/login`, loginInfo);

function* loginUser(action) {
  try {
    const response = yield call(postLoginUserAPI, action.loginInfo);
    const { token } = response.data;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    // set our token in header ***
    setJWTToken(token);
    // decode token on React
    const decoded = jwt_decode(token);
    // dispatch to our securityReducer
    yield put(setCurrentUser(decoded));
    yield put({ type: GET_ERRORS, payload: {} });
    yield action.history.push("/dashboard");
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* SecuritySagas() {
  yield takeEvery(CREATE_NEW_USER, createNewUser);
  yield takeEvery(LOGIN_USER, loginUser);
}

export default SecuritySagas;
