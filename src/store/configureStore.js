import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import projectsReducer from "../reducers/projectsReducer";
import errorReducer from "../reducers/errorReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import backlogReducer from "../reducers/backlogReducer";
import securityReducer from "../reducers/securityReducer";

const rootReducer = combineReducers({
  project: projectsReducer,
  errors: errorReducer,
  backlog: backlogReducer,
  security: securityReducer
});

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

let store;

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), ReactReduxDevTools)
  );
} else {
  store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
}

sagaMiddleware.run(rootSaga);

export default store;
