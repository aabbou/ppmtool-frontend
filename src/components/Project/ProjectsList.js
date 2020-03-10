import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProjectItem from "./ProjectItem";
import { getProjects } from "../../actions/projectsActions";

class ProjectsList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Fragment>
        {projects &&
          projects.length > 0 &&
          projects.map(proj => (
            <ProjectItem key={proj.id} project={proj}></ProjectItem>
          ))}
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.getProjects();
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
