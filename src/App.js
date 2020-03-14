import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setJWTToken from "./security/securityUtils";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
