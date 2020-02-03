import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import FormElement from '../FormElement'
import Nav from '../Nav';
import { baseUrl } from '../../config'

/**
 * 
 * Login Page 
 */

 class Signup extends Component {

    state = {
        content: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    handleSubmit = (event) => {
        
        
    }

    handleTextChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    render() {

        const {
            avatar
        } = this.props

        return (
            <div>
                <Nav logo={avatar} avatar={avatar}/>

                <div className="container">   

                    <div className="col-3of5 bg-white">
                        <h1 className="row">Join Us Today</h1>

                        <div className="row profile-update">
                            <form id="signup-form" onSubmit={this.handleSubmit}>

                                <FormElement type={"text"} label={"Email"} value={"Enter your email"}></FormElement>
                                <FormElement type={"password"} label={"Password"} value={"Password here"}></FormElement>
                                <FormElement type={"password"} label={"Confirm Password"} value={"Reenter Password"}></FormElement>
                                
                                <button className="btn-primary space-top"  id="login-btn">Back to Login</button>
                                <button className="btn-primary space-top"  type="submit" id="signup-btn" disabled={this.state.content? '' : 'disabled'}>Create Account</button>
                            </form>
                        </div>

                        <h5 className="row">Have an account?<Link to="/login">Log in</Link></h5>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Signup;