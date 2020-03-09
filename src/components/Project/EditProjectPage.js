import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectForm from "./ProjectForm";
import { getProject, updateProject } from "../../actions/projectsActions";

class EditProjectPage extends Component {
  onSubmit = project => {
    this.props.updateProject(project, this.props.history);
  };

  render() {
    return (
      <div>
        <ProjectForm
          project={this.props.project}
          onSubmit={this.onSubmit}
          errors={this.props.errors}
          disabled={true}
        />
      </div>
    );
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }
}

const mapStateToProps = state => {
  return {
    project: { ...state.project.project },
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  getProject: identifier => dispatch(getProject(identifier)),
  updateProject: (project, history) => dispatch(updateProject(project, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);
