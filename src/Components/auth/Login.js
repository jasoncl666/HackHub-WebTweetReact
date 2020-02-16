import React, {Component} from 'react'

import LoginForm from './LoginForm'
import Nav from '../Nav'

/**
 * 
 * Login Page 
 */

 class Login extends Component {

    render() {

        const {
            token,
            logo
        } = this.props
        
        return (
            <div>
                <Nav logo={logo} handleLogout={""} token={token} userAvatar={logo} isInMainPAge={false}/>

                <div className="container">   

                    <div className="col-2of5 bg-white">

                        <LoginForm line={"Welcome Back!"} handleTokenUpdate={this.props.handleTokenUpdate} handleProfileUpdate={this.props.handleProfileUpdate} token={token} />
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Login;