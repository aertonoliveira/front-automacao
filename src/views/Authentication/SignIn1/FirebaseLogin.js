/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect,Link } from "react-router-dom";
import { loginUser } from '../../../store/actions/firebaseAuth/auth';
import{Button,Input} from 'reactstrap';

class Login extends Component {
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  };

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
              <form name="form" onSubmit={this.handleSubmit} className="mt-4">
                      <div className={'form-group' }>
                      <label htmlFor="password">Email Address</label>
                      <Input type="text"
                          variant="outlined"
                          margin="normal"
                          id="email"
                          label="Email Address"
                          name="email"
                          className="form-control mb-0"
                          onChange={this.handleEmailChange}
                        />
                      </div>
                      <div className={'form-group'}>
                          <label htmlFor="password">Password</label>
                          <a href="#" className="float-right">Forgot password?</a>
                          <Input type="password"
                            variant="outlined"
                            margin="normal"
                            name="password"
                            label="Password"
                            id="password"
                            className="form-control mb-0"
                            onChange={this.handlePasswordChange}
                          />
                      </div>
                      <div className="d-inline-block w-100">
                          <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                          </div>
                          <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                            className="btn btn-primary float-right"
                          >
                            Sign In
                          </Button>
                      </div>
                      <div className="sign-info">
                          <span className="dark-color d-inline-block line-height-2">Don't have an account?  <Link to="/auth/sign-up1" className="btn btn-link">Sign Up</Link></span>
                          <ul className="iq-social-media">
                              <li><a href="#"><i className="ri-facebook-box-line"></i></a></li>
                              <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                              <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                          </ul>
                      </div>
                  </form>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default (connect(mapStateToProps)(Login));