import React, {Component} from 'react';
import FormElement from './FormElement'

import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';


/**
 * 
 * Login Page 
 */

 class Signup extends Component {

    state = {
        content: "",
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
        return (

            <div className="container">   

                <div className="col-3of5 bg-white">
                    <h1 className="row">Join Us Today</h1>

                    <div className="row profile-update">
                        
                        
                        <form id="signup-form" onSubmit={this.handleSubmit}>

                            <FormElement type={"text"} label={"Email"} value={"Enter your email"} onChangeFunc={this.handleTextChange}></FormElement>
                            <FormElement type={"password"} label={"Password"} value={"Password here"} onChangeFunc={this.handleTextChange}></FormElement>
                            <FormElement type={"password"} label={"Confirm Password"} value={"Reenter Password"} onChangeFunc={this.handleTextChange}></FormElement>
                            
                            <button className="btn-primary space-top"  id="login-btn" disabled={this.state.content? '' : 'disabled'}>Back to Login</button>
                            <button className="btn-primary space-top"  type="submit" id="signup-btn">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Signup;