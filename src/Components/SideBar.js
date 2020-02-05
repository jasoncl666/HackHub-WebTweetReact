  
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import Signup from './auth/Signup'
import Login from './auth/Login'
import ProfileForm from './profile/ProfileForm';
import Page from './Page';
import Signup from './auth/Signup';

class SideBar extends Component {

    handleAuth(Component) {
        return this.props.token ? Component : <Redirect to="/signup" />
    }

    handleIsAuth(Component) {
        return this.props.token ? <Redirect to="/" /> : Component
    }

    render() {

        const {
            logo,
            handleLogout,
            handleTokenUpdate,
            token
        } = this.props
        return (
            <Switch>
                <Route exact path="/" render={()=> 
                    <div>
                        <Page avatar={logo} handleLogout={handleLogout} handleTokenUpdate={handleTokenUpdate} token={token}/>
                        <ProfileForm avatar={logo}/>
                    </div>
                }/>
        
                <Route path="/login" render={() => <Login avatar={logo}/>}/>
        
                <Route path="/signup" render={() => <Signup avatar={logo}/>}/>

            </Switch>
        );
    }
}

export default SideBar;