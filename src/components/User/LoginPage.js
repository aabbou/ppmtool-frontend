import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/securityActions";
import classnames from "classnames";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    if (props.security.validToken) {
      this.props.history.push("/dashboard");
    }

    this.state = {
      username: "",
      password: "",
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

  submitForm = e => {
    e.preventDefault();
    const loginInfo = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(loginInfo, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={this.submitForm}>
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
  loginUser: (loginInfo, history) => dispatch(loginUser(loginInfo, history))
});

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
