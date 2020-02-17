import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios';

import {connect} from 'react-redux';

import FormElement from '../FormElement';
import { baseUrl } from '../../config';

/**
 * 
 * Login Form Component
 */

 class LoginForm extends Component {

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
     */
    handleSubmit = () => {
        let that = this;

        Axios.post( baseUrl+"/auth/login", {
            username: that.state.username,
            password: that.state.password
        }).then(res => {

            if (res.data.error) {
                console.log(res.data.error)
            } else {

                that.props.updateUser({profile: res.data.profile, token: res.data.token})

                console.log(res.data.profile)
            }
        })
    }

    render() {

        const {
            token,
            line
        } = this.props
        
        return (
            <div>

                <div className="LoginFrom-content">   

                    <h2 className="row">{line}</h2>

                    <div className="row profile-update">

                        <form id="login-form">

                            <FormElement type={"text"} label={""} value={"Enter your email"} onChangeFunc={this.handleUsernameChange}></FormElement>
                            <FormElement type={"password"} label={""} value={"Password here"} onChangeFunc={this.handlePasswordChange}></FormElement>

                            <button className="btn-primary" type="button" id="login-btn" disabled={this.state.inputvalid? '' : 'disabled'} onClick={this.handleSubmit}>Login</button>
                        </form>
                    </div>

                    {token? <h5 className="row"><Link to="/">Your Page</Link></h5> : <h5 className="row">Don't have an account? <Link to="auth/signup">Sign up</Link></h5>}              
                </div>
            </div>
        );
    }
 }

const mapState = state => ({
    token: state.user.token
})

const mapDispatch = disPatch => ({
    updateUser: (user)=> disPatch.user.update(user)
 })
 export default withRouter(connect(mapState, mapDispatch)(LoginForm));