import React from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


function Auth(props){

    const {
        logo,
        handleTokenUpdate,
        handleProfileUpdate
    } = props

    return(

        <div>
            <Route path="/auth/login" render={() => 
              <Login logo={logo} />}/>
        
            <Route path="/auth/signup" render={() => 
              <Signup logo={logo} />}/>
        </div>
    )
}

export default Auth;