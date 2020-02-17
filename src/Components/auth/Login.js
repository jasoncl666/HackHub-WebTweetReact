import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import Signup from './Signup'
import Nav from '../Nav'

/**
 * 
 * Login Page 
 */

 class Login extends Component {

    render() {

        const {
            logo,
        } = this.props

        return (
            <div>
                <Nav logo={logo} handleLogout={""} userAvatar={logo} isInMainPAge={false}/>

                <div className="container">   

                    <div className="col-2of5 bg-white">

                        <LoginForm line={"Welcome Back!"} />
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Login;