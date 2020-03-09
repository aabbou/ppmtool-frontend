import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  addProject,
  loadProjects,
  getProjectSuccess,
  editProject,
  deleteProjectSuccess
} from "../actions/projectsActions";
import axios from "axios";
import { GET_ERRORS } from "../actions/types";

const apiUrl = "http://localhost:8080/api/projects";

const postCreateProjectAPI = project => axios.post(`${apiUrl}`, project);

const getAllProjectsAPI = () => axios.get(`${apiUrl}/all`);

const getProjectAPI = projectId => axios.get(`${apiUrl}/${projectId}`);

const putUpdateProjectAPI = project => axios.put(`${apiUrl}`, project);

const deleteProjectAPI = projectId => axios.delete(`${apiUrl}/${projectId}`);

function* createProject(action) {
  try {
    const response = yield call(postCreateProjectAPI, action.project);
    yield put(addProject(response.data));
    yield action.history.push("/dashboard");
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* updateProject(action) {
  try {
    const response = yield call(putUpdateProjectAPI, action.project);
    yield put(editProject(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
    action.history.push("/dashboard");
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* getAllProjects() {
  try {
    const response = yield call(getAllProjectsAPI);
    yield put(loadProjects(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* getProject(action) {
  try {
    const response = yield call(getProjectAPI, action.identifier);
    yield put(getProjectSuccess(response.data));
    yield put({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* deleteProject(action) {
  try {
    yield call(deleteProjectAPI, action.identifier);
    yield put(deleteProjectSuccess(action.identifier));
    yield put({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    yield put({ type: GET_ERRORS, payload: err.response.data });
  }
}

function* createProjectSaga() {
  yield takeEvery("CREATE_PROJECT", createProject);
}

function* getAllProjectsSaga() {
  yield takeEvery("GET_PROJECTS", getAllProjects);
}

function* getProjectSaga() {
  yield takeEvery("GET_PROJECT", getProject);
}

function* putUpdateProjectSaga() {
  yield takeEvery("UPDATE_PROJECT", updateProject);
}

function* deleteProjectSaga() {
  yield takeEvery("DELETE_PROJECT", deleteProject);
}

export default function* rootSaga() {
  yield all([
    createProjectSaga(),
    getAllProjectsSaga(),
    getProjectSaga(),
    putUpdateProjectSaga(),
    deleteProjectSaga()
  ]);
}
