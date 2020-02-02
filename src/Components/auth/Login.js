import React, {Component} from 'react';
import FormElement from '../FormElement'

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
        return (

            <div className="container">   

                <div className="col-2of5 bg-white">

                    <div className="row profile-update">
                        <form id="login-form" onSubmit={this.handleSubmit}>

                            <FormElement type={"text"} label={"Email"} value={"Enter your email"} onChangeFunc={this.handleTextChange}></FormElement>
                            <FormElement type={"password"} label={"Password"} value={"Password here"} onChangeFunc={this.handleTextChange}></FormElement>

                            <button className="btn-primary" type="submit" id="login-btn" disabled={this.state.content? '' : 'disabled'}>Login</button>
                            <button className="btn-primary"  id="signup-btn">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Login;