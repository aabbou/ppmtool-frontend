import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProject } from "../../actions/projectsActions";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class ProjectItem extends Component {
  onDeleteItem = () => {
    confirmAlert({
      title: "Confirm to delete a project",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            this.props.deleteProject(this.props.project.projectIdentifier)
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    const { projectName, projectIdentifier, description } = this.props.project;

    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{projectIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{projectName}</h3>
              <p>{description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/projectBoard/${projectIdentifier}`}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Project Board</i>
                  </li>
                </Link>
                <Link to={`/editProject/${projectIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                  </li>
                </Link>
                <li
                  onClick={this.onDeleteItem}
                  className="list-group-item delete"
                >
                  <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject: identifier => dispatch(deleteProject(identifier))
});

export default connect(undefined, mapDispatchToProps)(ProjectItem);
