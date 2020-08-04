/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Nav,NavItem,NavLink,TabContent,TabPane} from 'reactstrap';
import { userActions } from '../../../store/auth/user.actions';
import { Redirect } from 'react-router'
import PropTypes from 'prop-types';


import { bindActionCreators } from 'redux';
// import AuthActions from '~/store/ducks/auth'; 

class LoginPage extends React.Component {
    //  static propTypes = {
    //    signIn1Request: PropTypes.func.isRequired, 
    //  };


    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
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
        // const { signIn1Request } = this.props;

        // signIn1Request(username, password);

        if (username && password) {
            this.props.login(username, password)
        }
        console.log(password);
    }
      
    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted,activeTab } = this.state;
        if (this.props.loggingIn) {
            return (<Redirect to='/'/>)
        } else {
            return (
                <>
                    <h1 className="mb-0">Login </h1>
                    <p>Digite seu endereço de e-mail e senha para acessar o painel de administração.</p>
                    <Nav className="nav-fill mb-3 nav nav-pills  " id="myTab-1" role="tablist">
                     </Nav>
                     <div id="pills-tabContent-1" className="tab-content mt-0">
                       <TabContent activeTab={activeTab} className="tab-content">
                           <TabPane tabId="jwt">
                                   <form name="form" onSubmit={this.handleSubmit} className="mt-4">
                                       <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                           <label htmlFor="username">Email</label>
                                           <input type="text" className="form-control mb-0" name="username" value={username} onChange={this.handleChange} />
                                           {submitted && !username &&
                                               <div className="help-block">Username is required</div>
                                           }
                                       </div>
                                       <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                           <label htmlFor="password">Senha</label>
                                            <a href="#" className="float-right">Esqueceu a senha?</a>
                                           <input type="password" className="form-control mb-0" name="password" value={password} onChange={this.handleChange} />
                                           {submitted && !password &&
                                               <div className="help-block">Password is required</div>
                                           }
                                       </div>
                                       <div className="d-inline-block w-100">
                                            <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Lembre de mim</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary float-right">Login</button>
                                            {loggingIn &&
                                               <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                        </div>
                                        
                                   </form>
                           </TabPane>
                           
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
