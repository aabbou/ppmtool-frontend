import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackLog from "./ProjectTask/BackLog";
import { connect } from "react-redux";
import { getBacklog } from "../../actions/backlogActions";

class ProjectDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectIdentifier: this.props.match.params.id || undefined,
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getBacklog(this.state.projectIdentifier);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    const { project_tasks } = this.props.backlog;
    let BoardContent;

    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        if (errors.projectNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectNotFound}
            </div>
          );
        } else if (errors.projectIdentifier) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectIdentifier}
            </div>
          );
        } else {
          return (
            <div className="alert alert-info text-center" role="alert">
              No Project Tasks on this board
            </div>
          );
        }
      } else {
        return <BackLog project_tasks={this.props.backlog.project_tasks} />;
      }
    };

    BoardContent = boardAlgorithm(errors, project_tasks);
    return (
      <div className="container">
        <Link
          to={`/addProjectTask/${this.state.projectIdentifier}`}
          className="btn btn-primary mb-3"
        >
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  backlog: state.backlog,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  getBacklog: projectIdentifier => dispatch(getBacklog(projectIdentifier))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDashboard);
