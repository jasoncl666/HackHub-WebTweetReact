import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './img/logo.svg';
import './App.css';

import Page from './Components/Page';
import ProfileForm from './Components/profile/ProfileForm';
import Auth from './Components/auth/Auth'
import * as models from './model'

import {init} from '@rematch/core'
import {Provider} from 'react-redux'

const store = init({
  models
});


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

    console.log("App Token: " + this.state.token)
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

    let hL = this.handleLogout;
    let hTU = this.handleTokenUpdate;
    let hPU = this.handleProfileUpdate;
    let token = this.state.token;

    return (

      <Provider store={store}>
        <Router>

          <div className="App">

            {/* Nav can be added here */}

            <Switch>
              <Route exact path="/" render={()=> 
                <Page logo={logo} handleLogout={hL} handleTokenUpdate={hTU} handleProfileUpdate={hPU} profile={this.state.profile}/>}/>

              {/* Nested Router */}
              <Route path="/auth" render={() => 
                <Auth logo={logo} handleTokenUpdate={hTU} handleProfileUpdate={hPU} token={token}/>}/>

              {/* <Route exact path="/profile" render={() => 
                <Profile avatar={logo} profile={this.state.profile}/>}/> */}

              <Route path="/profile/edit" render={() => 
                <ProfileForm avatar={logo} handleProfileUpdate={this.handleProfileUpdate} token={this.state.token} profile={this.state.profile}/>}/>

            </Switch>
          </div>
        </Router>
      </Provider>
      
    )
  }
  
}

export default App;
