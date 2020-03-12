import React, { Component } from "react";
import ProjectTaskForm from "./ProjectTaskForm";
import { addProjectTask } from "../../../actions/backlogActions";
import { connect } from "react-redux";

class CreateProjectTaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectIdentifier: this.props.match.params.id || undefined
    };
  }

  onSubmit = task => {
    this.props.createProjectTask(
      this.state.projectIdentifier,
      task,
      this.props.history
    );
  };

  render() {
    return (
      <div>
        <ProjectTaskForm
          onSubmit={this.onSubmit}
          errors={this.props.errors}
          backlog_id={this.state.projectIdentifier}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProjectTask: (projectIdentifier, task, history) =>
    dispatch(addProjectTask(projectIdentifier, task, history))
});

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectTaskPage);
