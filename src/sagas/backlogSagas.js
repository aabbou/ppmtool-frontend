import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ERRORS } from "../actions/types";
import setJWTToken from "../security/securityUtils";
import {
  addProjectTaskSuccess,
  getBacklogSuccess,
  getProjectTaskSuccess,
  updateProjectTaskSuccess,
  deleteProjectTaskSuccess
} from "../actions/backlogActions";

import {
  GET_BACKLOG,
  GET_PROJECT_TASK,
  ADD_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  UPDATE_PROJECT_TASK
} from "../actions/types";

import axios from "axios";

const apiUrl = "/api/backlog";

const postCreatePTAPI = (backlog_id, task) =>
  axios.post(`${apiUrl}/${backlog_id}`, task);

function* createProjectTask(action) {
  try {
    const token = localStorage.getItem("jwtToken");
    setJWTToken(token);
    const response = yield call(
      postCreatePTAPI,
      action.backlog_id,
      action.project_task
    );
    yield put(addProjectTaskSuccess(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
    yield action.history.push(`/projectBoard/${action.backlog_id}`);
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

const putUpdatePTAPI = (backlog_id, pt_id, project_task) =>
  axios.patch(`${apiUrl}/${backlog_id}/${pt_id}`, project_task);

function* updateProjectTask(action) {
  try {
    const response = yield call(
      putUpdatePTAPI,
      action.backlog_id,
      action.pt_id,
      action.project_task
    );
    yield put(updateProjectTaskSuccess(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
    action.history.push(`/projectBoard/${action.backlog_id}`);
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

const getBacklogAPI = backlog_id => axios.get(`${apiUrl}/${backlog_id}`);

function* getBacklog(action) {
  try {
    const response = yield call(getBacklogAPI, action.backlog_id);
    yield put(getBacklogSuccess(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

const getPTAPI = (backlog_id, pt_id) =>
  axios.get(`${apiUrl}/${backlog_id}/${pt_id}`);

function* getProjectTask(action) {
  try {
    const response = yield call(
      getPTAPI,
      action.backlog_id,
      action.pt_id,
      action.identifier
    );
    yield put(getProjectTaskSuccess(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

const deletePTAPI = (backlog_id, pt_id) =>
  axios.delete(`${apiUrl}/${backlog_id}/${pt_id}`);

function* deleteProjectTask(action) {
  try {
    yield call(deletePTAPI, action.backlog_id, action.pt_id);
    yield put(deleteProjectTaskSuccess(action.pt_id));
    yield put({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* BacklogSagas() {
  yield takeEvery(ADD_PROJECT_TASK, createProjectTask);
  yield takeEvery(GET_BACKLOG, getBacklog);
  yield takeEvery(GET_PROJECT_TASK, getProjectTask);
  yield takeEvery(UPDATE_PROJECT_TASK, updateProjectTask);
  yield takeEvery(DELETE_PROJECT_TASK, deleteProjectTask);
}

export default BacklogSagas;
