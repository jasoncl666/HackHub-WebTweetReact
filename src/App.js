import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './img/logo.svg';
import './App.css';

import Page from './Components/Page';
import ProfileForm from './Components/profile/ProfileForm';
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      token: ""
    }

    this.handleTokenUpdate = this.handleTokenUpdate.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  testTokenUpdate = () => {
    console.log(this.state.token);
  }

  render(){
    return (
      <Router>
        <div className="App">
  
          <Switch>
            <Route exact path="/">
              <div>
                <Page avatar={logo} handleLogout={this.handleLogout} handleTokenUpdate={this.handleTokenUpdate} token={this.state.token}/>
                {/* <ProfileForm avatar={logo}/> */}
              </div>
            </Route>
  
            {/* <Route path="/login" render={() => <Login avatar={logo}/>}/> */}
  
            <Route path="/signup" render={() => <Signup avatar={logo}/>}/>
  
  
          </Switch>

          <button onClick={this.testTokenUpdate}> Test Token Update</button>
        </div>
      </Router>
    )
  }
  
}

export default App;
