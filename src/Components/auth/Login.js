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

    state = {
        content: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
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

                    <div className="col-2of5 bg-white">

                        <div className="row profile-update">

                            <form id="login-form" onSubmit={this.handleSubmit}>

                                <FormElement type={"text"} label={"Email"} value={"Enter your email"} onChangeFunc={this.handleTextChange}></FormElement>
                                <FormElement type={"password"} label={"Password"} value={"Password here"} onChangeFunc={this.handleTextChange}></FormElement>

                                <button className="btn-primary" type="submit" id="login-btn" disabled={this.state.content? '' : 'disabled'}>Login</button>
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