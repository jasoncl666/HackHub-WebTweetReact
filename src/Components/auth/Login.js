import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import FormElement from '../FormElement';
import Nav from '../Nav';
import { baseUrl } from '../../config';

/**
 * 
 * Login Page 
 */

 class Login extends Component {

    constructor(props){

        super(props);

        this.state = {
            username: "",
            password: "",
            inputvalid: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.formUpdate = this.formUpdate.bind(this);
    }


    /**
     * update local state when user enters 
     * meanwhile checking if any input is left empty
     */
    formUpdate = (updateValue) => {

        let prevState = this.state;
        let formContent = {
            ...prevState,
            ...updateValue
        }

        formContent.inputvalid = formContent.username && formContent.password;

        this.setState(formContent);
    }

    handleUsernameChange = (e) => {
        this.formUpdate({username: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.formUpdate({password: e.target.value});
    }

    /**
     * Sending post to API for login request
     * 
     * if token is granted (login succeed), up-lifting the token to Page Component and Redirect
     * 
     * 
     */
    handleSubmit = () => {
        let that = this;

        console.log(that.state);

        axios.post(baseUrl+"/auth/login", {
            username: that.state.username,
            password: that.state.password
        }).then(res => {

            console.log(res)
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

                    <div className="col-2of5 bg-white">

                        <h2 className="row"> Welcome Back!</h2>

                        <div className="row profile-update">

                            <form id="login-form" onSubmit={this.handleSubmit}>

                                <FormElement type={"text"} label={"Email"} value={"Enter your email"} onChangeFunc={this.handleUsernameChange}></FormElement>
                                <FormElement type={"password"} label={"Password"} value={"Password here"} onChangeFunc={this.handlePasswordChange}></FormElement>

                                <button className="btn-primary" type="submit" id="login-btn" disabled={this.state.inputvalid? '' : 'disabled'} onClick={this.handleSubmit}>Login</button>
                            </form>
                        </div>

                        <h5 className="row">Don't have an account? <Link to="/signup">Sign up</Link></h5>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Login;