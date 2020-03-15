import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/Dashboard";
import EditProjectPage from "../components/Project/EditProjectPage";
import CreateProjectPage from "../components/Project/CreateProjectPage";
import Header from "../components/Layout/Header";
import LoginPage from "../components/User/LoginPage";
import SignUpPage from "../components/User/SignUpPage";
import ProjectDashboard from "../components/Projectboard/ProjectDashboard";
import CreateProjectTaskPage from "../components/Projectboard/ProjectTask/CreateProjectTaskPage";
import EditProjectTaskPage from "../components/Projectboard/ProjectTask/EditProjectTaskPage";
import LandingPage from "../components/Layout/LandingPage";
import SecuredRoute from "../security/SecuredRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />

        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute exact path="/addProject" component={CreateProjectPage} />
        <SecuredRoute
          exact
          path="/editProject/:id"
          component={EditProjectPage}
        />
        <SecuredRoute
          exact
          path="/projectBoard/:id"
          component={ProjectDashboard}
        />

        <SecuredRoute
          exact
          path="/addProjectTask/:id"
          component={CreateProjectTaskPage}
        />
        <SecuredRoute
          exact
          path="/editProjectTask/:backlog_id/:pt_id"
          component={EditProjectTaskPage}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
