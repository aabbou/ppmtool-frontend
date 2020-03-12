import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/Dashboard";
import EditProjectPage from "../components/Project/EditProjectPage";
import CreateProjectPage from "../components/Project/CreateProjectPage";
import Header from "../components/Layout/Header";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import ProjectDashboard from "../components/Projectboard/ProjectDashboard";
import CreateProjectTaskPage from "../components/Projectboard/ProjectTask/CreateProjectTaskPage";
import EditProjectTaskPage from "../components/Projectboard/ProjectTask/EditProjectTaskPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={CreateProjectPage} />
        <Route exact path="/editProject/:id" component={EditProjectPage} />
        <Route exact path="/projectBoard/:id" component={ProjectDashboard} />

        <Route
          exact
          path="/addProjectTask/:id"
          component={CreateProjectTaskPage}
        />
        <Route
          exact
          path="/editProjectTask/:backlog_id/:pt_id"
          component={EditProjectTaskPage}
        />

        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
