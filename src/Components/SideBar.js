  
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// import Signup from './auth/Signup'
import Login from './auth/Login'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    handleAuth(Component) {
        return this.props.token ? Component : <Redirect to="/signup" />
    }

    handleIsAuth(Component) {
        return this.props.token ? <Redirect to="/" /> : Component
    }

    render() {
        return (
            <div>
                {/* <Route path='/' exact render={() => <Profile avatar={this.props.avatar}/>} />                 */}
                {/* <Route path='/profile' exact render={() => <Profile avatar={this.props.avatar}/>} /> */}
                <Route path='/profile/edit' render={() => <ProfileForm avatar={this.props.avatar}/>} />
                <Route path='/login' component={Login} />
            </div>
        );
    }
}

export default SideBar;