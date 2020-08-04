/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


// Import Custom components...
import { Loader } from '../../components/vito';
import { index } from "../../config/pluginsInit";

import '../../assets/scss/style.scss';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';

import LoginPage from '../../views/Authentication/SignIn1';
import RegisterPage from '../../views/Authentication/SignUp1';
import ResetPassword from '../../views/Authentication/ResetPassword';
import ConfirmMailPage from '../../views/Authentication/ConfirmMailPage';
import LockScreen from '../../views/Authentication/LockScreen';

import {Route, Switch} from "react-router-dom";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        index();
    }

    render() {
        return (
            <>
                {/* Loader component */}
                <Loader />

                <section className="sign-in-page">
                    <div className="container bg-white mt-5 p-0">
                         <div className="row no-gutters">
                            <div className="col-sm-6 align-self-center">
                                <div className="sign-in-from">
                                    <Switch>
                                        <Route path="/" component={LoginPage} />
                                        <Route path="/auth/sign-up1" component={RegisterPage} />
                                        <Route path="/auth/recover-password" component={ResetPassword} />
                                        <Route path="/auth/confirm-email" component={ConfirmMailPage} />
                                        <Route path="/auth/lock-screen" component={LockScreen} />
                                    </Switch>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center">
                                <div className="sign-in-detail text-white">
                                    <a className="sign-in-logo mb-5" href="#"><img src={ require("../../assets/images/logo-white.png") }  className="img-fluid" alt="logo" /></a>
                                    <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                        <div className="item">
                                            <img src={ require("../../assets/images/login/1.png") } className="img-fluid mb-4" alt="logo" />
                                            <h4 className="mb-1 text-white">Manage your orders</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                        </div>
                                        <div className="item">
                                            <img src={ require("../../assets/images/login/1.png") } className="img-fluid mb-4" alt="logo" />
                                            <h4 className="mb-1 text-white">Manage your orders</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                        </div>
                                        <div className="item">
                                            <img src={ require("../../assets/images/login/1.png") } className="img-fluid mb-4" alt="logo" />
                                            <h4 className="mb-1 text-white">Manage your orders</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                    </div>
                </section>
                
                           
            </>
        );
    }

}

export default Index;
