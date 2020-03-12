import { all } from "redux-saga/effects";
import ProjectSagas from "./projectSagas";
import BacklogSagas from "./backlogSagas";

export default function* rootSaga() {
  yield all([ProjectSagas(), BacklogSagas()]);
}
