import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../../actions/securityActions";
import classnames from "classnames";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    if (props.security.validToken) {
      this.props.history.push("/dashboard");
    }

    this.state = {
      username: "",
      password: "",
      fullName: "",
      confirmPassword: "",
      errors: {}
    };
  }

  onChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    this.setState({
      [fieldName]: fieldValue
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      fullName: this.state.fullName,
      confirmPassword: this.state.confirmPassword
    };

    this.props.createNewUser(user, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fullName
                    })}
                    placeholder="Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                  />
                </div>
                {errors.fullName && (
                  <div className="text-danger">{errors.fullName}</div>
                )}
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Email Address"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                {errors.username && (
                  <div className="text-danger">{errors.username}</div>
                )}
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirmPassword
                    })}
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                    name="confirmPassword"
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="text-danger">{errors.confirmPassword}</div>
                )}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewUser: (user, history) => dispatch(createNewUser(user, history))
});

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
