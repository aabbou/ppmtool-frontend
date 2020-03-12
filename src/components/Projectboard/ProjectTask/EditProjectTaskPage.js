import React, { Component } from "react";
import ProjectTaskForm from "./ProjectTaskForm";
import {
  updateProjectTask,
  getProjectTask
} from "../../../actions/backlogActions";
import { connect } from "react-redux";

class EditProjectTaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backlog_id: this.props.match.params.backlog_id || undefined,
      task_id: this.props.match.params.pt_id || undefined
    };
  }

  onSubmit = task => {
    this.props.editProjectTask(
      this.state.backlog_id,
      this.state.task_id,
      task,
      this.props.history
    );
  };
  render() {
    return (
      <div>
        <ProjectTaskForm
          onSubmit={this.onSubmit}
          task={this.props.project_task}
          errors={this.props.errors}
          backlog_id={this.state.backlog_id}
        />
      </div>
    );
  }

  componentDidMount() {
    this.props.getProjectTask(this.state.backlog_id, this.state.task_id);
  }
}

const mapDispatchToProps = dispatch => ({
  getProjectTask: (backlog_id, pt_id) =>
    dispatch(getProjectTask(backlog_id, pt_id)),
  editProjectTask: (projectIdentifier, task_id, task, history) =>
    dispatch(updateProjectTask(projectIdentifier, task_id, task, history))
});

const mapStateToProps = state => ({
  errors: state.errors,
  project_task: state.backlog.project_task
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProjectTaskPage);
