/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Nav,NavItem,NavLink,TabContent,TabPane} from 'reactstrap';

import { login } from '../../../store/auth/authActions';
import { Redirect } from 'react-router'
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
             

            },
            submitted: false,
            activeTab: "jwt",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggle = tab => {
        this.setState({
            activeTab: tab
        })
    };
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted,activeTab } = this.state;
        if (this.props.registering) {
            return (<Redirect to='/auth/sign-in1'/>)
        } else {
            return (
                <>
                
                    <h1 className="mb-0">Sign Up</h1>
                    <p>Enter your email address and password to access admin panel.</p>
                    <Nav className="nav-fill mb-3 nav nav-pills  " id="myTab-1" role="tablist">
                        <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "jwt" ? " active" : "")}
                                onClick={() => { this.toggle('jwt'); }}
                            >
                                jwt
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "firebase" ? " active" : "")}
                                onClick={() => { this.toggle('firebase'); }}
                            >
                                firebase
                            </NavLink>
                        </NavItem>
                        {/* <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "oauth" ? " active" : "")}
                                onClick={() => { this.toggle('oauth'); }}
                            >
                                oauth
                            </NavLink>
                        </NavItem> */}
                    </Nav>
                    <div id="pills-tabContent-1" className="tab-content mt-0">
                        <TabContent activeTab={activeTab} className="tab-content">
                            <TabPane tabId="jwt">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} placeholder="Enter First name" />
                                    {submitted && !user.firstName &&
                                        <div className="help-block">First Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} placeholder="Enter Last Name" />
                                    {submitted && !user.lastName &&
                                        <div className="help-block">Last Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} placeholder="Enter Email" />
                                    {submitted && !user.email &&
                                        <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} placeholder="Enter Password" />
                                    {submitted && !user.password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="d-inline-block w-100">
                                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1" >I accept <a href="#">Terms and Conditions</a></label>
                                        </div>
                                        <button type="submit" className="btn btn-primary float-right">Sign Up</button>
                                        {registering && 
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                <div className="sign-info">
                                        <span className="dark-color d-inline-block line-height-2">Already Have Account ?  <Link to="/auth/sign-in1" className="btn btn-link">Log In</Link></span>
                                        <ul className="iq-social-media">
                                            <li><a href="#"><i className="ri-facebook-box-line"></i></a></li>
                                            <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                                            <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                                        </ul>
                                </div>
                            </form>
                            </TabPane>
                            <TabPane tabId="firebase">
                                
                            </TabPane>
                            {/* <TabPane tabId="oauth">
                                
                            </TabPane> */}
                        </TabContent>
                    </div>
               
                  
                </>  
            );
        }
    }
}

const  mapState = state => {
    console.log(state)
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: login
}

export default connect(mapState, actionCreators)(RegisterPage);