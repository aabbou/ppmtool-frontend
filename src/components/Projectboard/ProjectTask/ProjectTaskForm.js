import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class ProjectTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.task ? (props.task.id ? props.task.id : null) : null,
      summary: props.task ? props.task.summary : "",
      acceptanceCriteria: props.task ? props.task.acceptanceCriteria : "",
      dueDate: props.task ? (props.task.dueDate ? props.task.dueDate : "") : "",
      status: props.task ? props.task.status : "",
      priority: props.task ? props.task.priority : 0,
      backlog_id: props.backlog_id,
      errors: {}
    };
  }

  onStatusChange = e => {
    const status = e.target.value;
    this.setState(() => ({ status }));
  };

  onPriorityChange = e => {
    const priority = e.target.value;
    this.setState(() => ({ priority }));
  };

  onSummaryChange = e => {
    const summary = e.target.value;
    this.setState(() => ({ summary }));
  };

  onAcceptanceCriteriaChange = e => {
    const acceptanceCriteria = e.target.value;
    this.setState(() => ({ acceptanceCriteria }));
  };

  onDueDateChange = e => {
    const dueDate = e.target.value;
    this.setState(() => ({ dueDate }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      dueDate: this.state.dueDate,
      status: this.state.status,
      priority: this.state.priority
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.task) {
      this.setState({
        id: nextProps.task.id || null,
        summary: nextProps.task.summary || "",
        acceptanceCriteria: nextProps.task.acceptanceCriteria || "",
        dueDate: nextProps.task.dueDate || "",
        priority: nextProps.task.priority || 0,
        status: nextProps.task.status || "",
        backlog_id: nextProps.task.projectIdentifier
      });
    }
  }

  render() {
    const { errors, backlog_id } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${backlog_id}`}
                className="btn btn-light"
              >
                Back to Project Board
              </Link>
              <h4 className="display-4 text-center">
                Add /Update Project Task
              </h4>
              <p className="lead text-center">Project Name + Project Code</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.summary
                    })}
                    name="summary"
                    placeholder="Project Task summary"
                    value={this.state.summary || ""}
                    onChange={this.onSummaryChange}
                  />
                </div>
                {errors.summary && (
                  <p className="text-danger">{errors.summary}</p>
                )}
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria || ""}
                    onChange={this.onAcceptanceCriteriaChange}
                  ></textarea>
                </div>
                <h6>Due Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dueDate"
                    value={this.state.dueDate || ""}
                    onChange={this.onDueDateChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="priority"
                    value={this.state.priority || 0}
                    onChange={this.onPriorityChange}
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={this.state.status || ""}
                    onChange={this.onStatusChange}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTaskForm;
