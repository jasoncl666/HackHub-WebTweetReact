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

    constructor(props) {

        super(props);

        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            inputValid: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
        this.formUpdate = this.formUpdate.bind(this);
    }
    
    /**
     * update local state when user enters 
     * meanwhile checking if any input is left empty & confirming password 
     */
    formUpdate = (updateValue) => {

        let prevState = this.state;
        let formContent = {
            ...prevState,
            ...updateValue
        };

        formContent.inputValid = formContent.username && formContent.password && formContent.password === formContent.confirmPassword;

        this.setState(formContent);
    }

    handleUsernameChange = (e) => {
        this.formUpdate({username: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.formUpdate({password: e.target.value})
    }

    handleRepeatPasswordChange = (e) => {
        this.formUpdate({confirmPassword: e.target.value})
    }

    /**
     * Sending post to API for signup request
     * 
     * if token is granted (signup succeed), Redirect to Login
     */
    handleSubmit = (event) => {
        
        const that = this;

        axios.post( baseUrl+"/auth/signup", {
            username: that.state.username,
            password: that.state.password
          }).then(res => {
            if (res.data.error) {
                console.log(res.data.error)
            } else {
                // res.data.token && that.props.handleTokenUpdate(res.data.token)
                console.log(res)
            }
          })
    }

    render() {

        const {
            avatar
        } = this.props

        return (
            <div>
                {/* <Nav logo={avatar} avatar={avatar}/> */}

                <div className="container">   

                    <div className="col-3of5 bg-white">
                        <h1 className="row">Join Us Today</h1>

                        <div className="row profile-update">
                            <form id="signup-form" onSubmit={this.handleSubmit}>

                                <FormElement type={"text"} label={""} value={"Enter your email"} onChangeFunc={this.handleUsernameChange}></FormElement>
                                <FormElement type={"password"} label={""} value={"Password here"} onChangeFunc={this.handlePasswordChange}></FormElement>
                                <FormElement type={"password"} value={"Repeat Password"} onChangeFunc={this.handleRepeatPasswordChange}></FormElement>
                                
                                <button className="btn-primary space-top"  type="button" id="signup-btn" disabled={this.state.inputValid? '' : 'disabled'} onClick={this.handleSubmit}>Create Account</button>
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