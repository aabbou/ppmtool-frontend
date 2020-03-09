import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css";
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
