/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Nav,NavItem,NavLink,TabContent,TabPane} from 'reactstrap';
import { userActions } from '../../../store/actions/authAction/user.actions';
import FirebaseLogin from './FirebaseLogin';
import { Redirect } from 'react-router'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: true,
            activeTab: "jwt"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle = tab => {
        this.setState({
            activeTab: tab
        })
    };
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password)
        }
    }

    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted,activeTab } = this.state;
        if (this.props.loggingIn) {
            return (<Redirect to='/'/>)
        } else {
            return (
                <>
                    <h1 className="mb-0">Sign in</h1>
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
                                   <form name="form" onSubmit={this.handleSubmit} className="mt-4">
                                       <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                           <label htmlFor="username">Email Address</label>
                                           <input type="text" className="form-control mb-0" name="username" value={username} onChange={this.handleChange} />
                                           {submitted && !username &&
                                               <div className="help-block">Username is required</div>
                                           }
                                       </div>
                                       <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                           <label htmlFor="password">Password</label>
                                            <a href="#" className="float-right">Forgot password?</a>
                                           <input type="password" className="form-control mb-0" name="password" value={password} onChange={this.handleChange} />
                                           {submitted && !password &&
                                               <div className="help-block">Password is required</div>
                                           }
                                       </div>
                                       <div className="d-inline-block w-100">
                                            <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary float-right">Sign in</button>
                                            {loggingIn &&
                                               <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
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
                           </TabPane>
                           <TabPane tabId="firebase">
                                       <FirebaseLogin />
                           </TabPane>
                           {/* <TabPane tabId="oauth">
                               <p>
                                   when an unknown printer took a galley of type and scrambled it to
                                   make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum has been the industry's standard dummy text ever since the
                                   1500s,
                               </p>
                           </TabPane> */}
                       </TabContent>
                   </div>
                        
                        
                </>
              
            );
        }
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

export default  connect(mapState, actionCreators)(LoginPage);
