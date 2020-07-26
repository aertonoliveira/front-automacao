/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import { Input } from 'reactstrap';
// import { myFirebase } from '../../../constants/firebase';

class Register extends Component {
 state = {
   email: '',
   password: '',
   error: null,
 };
handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
handleSubmit = (event) => {
   event.preventDefault();
   const { email, password } = this.state;
    // myFirebase
    //  .auth()
    //  .createUserWithEmailAndPassword(email, password)
    //  .then((user) => {
    //    this.props.history.push('/auth/sign-in1');
    //  })
    //  .catch((error) => {
    //    this.setState({ error: error });
    //  });
 };
 render() {
   const { email, password } = this.state;
   return (
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group'}>
                <label htmlFor="firstName">First Name</label>
                <Input type="text" name="fname" placeholder="Enter First Name"  onChange={this.handleInputChange} />
               
            </div>
            <div className={'form-group'}>
                <label htmlFor="lastName">Last Name</label>
                <Input type="text" name="lname" placeholder="Enter Last Name"  onChange={this.handleInputChange} />
            </div>
            <div className={'form-group' }>
                <label htmlFor="username">Username</label>
                <Input type="text" name="email" placeholder="Enter Email" value={email} onChange={this.handleInputChange} />
            </div>
            <div className={'form-group' }>
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.handleInputChange}
                />
            </div>
            <div className="d-inline-block w-100">
                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1" >I accept <a href="#">Terms and Conditions</a></label>
                </div>
                <button type="submit" className="btn btn-primary float-right">Sign Up</button>
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
   );
 }
}
export default withRouter(Register);