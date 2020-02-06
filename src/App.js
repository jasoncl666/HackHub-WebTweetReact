import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './img/logo.svg';
import './App.css';

import Page from './Components/Page';
import ProfileForm from './Components/profile/ProfileForm';
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'
import Axios from 'axios';

import { baseUrl } from './config';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      token: "",
      profile: {}
    }

    this.handleTokenUpdate = this.handleTokenUpdate.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleTokenUpdate = (newToken) => {
    this.setState({
        token: newToken
    })
  }

  handleLogout = () => {
      this.setState({
          token: ""
      })
  }

  handleProfileUpdate = (newProfile) => {
    this.setState({
      profile: newProfile
    })

    console.log("App Profile");
    console.log(newProfile);

  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={()=> 
              <Page avatar={logo} handleLogout={this.handleLogout} handleProfileUpdate={this.handleProfileUpdate} token={this.state.token} profile={this.state.profile}/>}/>
        
            <Route path="/login" render={() => 
              <Login handleTokenUpdate={this.handleTokenUpdate} handleProfileUpdate={this.handleProfileUpdate} token={this.state.token}/>}/>
        
            <Route path="/signup" render={() => 
              <Signup handleTokenUpdate={this.handleTokenUpdate} handleProfileUpdate={this.handleProfileUpdate} token={this.state.token}/>}/>
            
            {/* <Route exact path="/profile" render={() => 
              <Profile avatar={logo} profile={this.state.profile}/>}/> */}

            <Route path="/profile/edit" render={() => 
              <ProfileForm avatar={logo} handleProfileUpdate={this.handleProfileUpdate} token={this.state.token} profile={this.state.profile}/>}/>

          </Switch>
        </div>
      </Router>
      
    )
  }
  
}

export default App;
