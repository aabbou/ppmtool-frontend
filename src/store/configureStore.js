import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import projectsReducer from "../reducers/projectsReducer";
import errorReducer from "../reducers/errorReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../reducers/sagas";

const rootReducer = combineReducers({
  project: projectsReducer,
  errors: errorReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
