import React, { Component } from "react";
import classnames from "classnames";

class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.project ? (props.project.id ? props.project.id : null) : null,
      projectName: props.project ? props.project.projectName : "",
      projectIdentifier: props.project ? props.project.projectIdentifier : "",
      description: props.project ? props.project.description : "",
      start_date: props.project
        ? props.project.start_date
          ? props.project.start_date
          : ""
        : "",
      end_date: props.project
        ? props.project.end_date
          ? props.project.end_date
          : ""
        : "",
      disabled: props.disabled ? props.disabled : false,
      errors: {}
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNameProjectChange = e => {
    const projectName = e.target.value;
    this.setState(() => ({ projectName }));
  };

  onProjectIdentifierChange = e => {
    const projectIdentifier = e.target.value;
    this.setState(() => ({ projectIdentifier }));
  };

  onStartDateChange = e => {
    const start_date = e.target.value;
    this.setState(() => ({ start_date }));
  };

  onEndDateChange = e => {
    const end_date = e.target.value;
    this.setState(() => ({ end_date }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.project) {
      this.setState({
        id: nextProps.project.id || null,
        projectName: nextProps.project.projectName || "",
        projectIdentifier: nextProps.project.projectIdentifier || "",
        description: nextProps.project.description || "",
        start_date: nextProps.project.start_date || "",
        end_date: nextProps.project.end_date || ""
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">
                Create / Edit Project form
              </h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.projectName
                    })}
                    placeholder="Project Name"
                    value={this.state.projectName || ""}
                    onChange={this.onNameProjectChange}
                  />
                </div>
                {errors.projectName && (
                  <p className="text-danger">{errors.projectName}</p>
                )}
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.projectIdentifier
                    })}
                    placeholder="Unique Project ID"
                    value={this.state.projectIdentifier || ""}
                    disabled={this.state.disabled}
                    onChange={this.onProjectIdentifierChange}
                  />
                </div>
                {errors.projectIdentifier && (
                  <p className="text-danger">{errors.projectIdentifier}</p>
                )}
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Project Description"
                    value={this.state.description || ""}
                    onChange={this.onDescriptionChange}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className="text-danger">{errors.description}</p>
                )}
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date || ""}
                    onChange={this.onStartDateChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date || ""}
                    onChange={this.onEndDateChange}
                  />
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

export default ProjectForm;
