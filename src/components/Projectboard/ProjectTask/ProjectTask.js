import React, { Component } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { connect } from "react-redux";
import { deleteProjectTask } from "../../../actions/backlogActions";

class ProjectTask extends Component {
  onDeleteTask = () => {
    confirmAlert({
      title: "Confirm to delete a task",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            this.props.deleteProjectTask(
              this.props.project_task.projectIdentifier,
              this.props.project_task.projectSequence
            )
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };
  render() {
    const { project_task } = this.props;
    let priorityString;
    let priorityClass;

    if (project_task.priority === 1) {
      priorityClass = "bg-danger text-light";
      priorityString = "HIGH";
    }

    if (project_task.priority === 2) {
      priorityClass = "bg-warning text-light";
      priorityString = "MEDIUM";
    }

    if (project_task.priority === 3) {
      priorityClass = "bg-info text-light";
      priorityString = "LOW";
    }
    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityClass}`}>
          ID: {project_task.projectSequence} -- Priority: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <Link
            to={`/editProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`}
            className="btn btn-primary"
          >
            View / Update
          </Link>
          <button onClick={this.onDeleteTask} className="btn btn-danger ml-4">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProjectTask: (backlog_id, pt_id) =>
    dispatch(deleteProjectTask(backlog_id, pt_id))
});

export default connect(undefined, mapDispatchToProps)(ProjectTask);
