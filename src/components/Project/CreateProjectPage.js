import React, { Component } from "react";
import ProjectForm from "./ProjectForm";
import { addProject } from "../../actions/projectsActions";
import { connect } from "react-redux";

class CreateProjectPage extends Component {
  onSubmit = project => {
    this.props.createProject(project, this.props.history);
  };
  render() {
    return (
      <div>
        <ProjectForm onSubmit={this.onSubmit} errors={this.props.errors} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProject: (project, history) => dispatch(addProject(project, history))
});

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectPage);
