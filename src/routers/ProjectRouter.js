import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/Dashboard";
import EditProjectPage from "../components/Project/EditProjectPage";
import CreateProjectPage from "../components/Project/CreateProjectPage";
import Header from "../components/Layout/Header";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/create/project" component={CreateProjectPage} />
        <Route path="/edit/project/:id" component={EditProjectPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
