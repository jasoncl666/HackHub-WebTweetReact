import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


function Auth(props){

    const {
        token,
        logo,
        handleTokenUpdate,
        handleProfileUpdate
    } = props

    return(

        <div>
            <Route path="/auth/login" render={() => 
              <Login logo={logo} handleTokenUpdate={handleTokenUpdate} handleProfileUpdate={handleProfileUpdate} token={token}/>}/>
        
            <Route path="/auth/signup" render={() => 
              <Signup logo={logo} handleTokenUpdate={handleTokenUpdate} handleProfileUpdate={handleProfileUpdate} token={token}/>}/>
        </div>
    )
}

export default Auth;