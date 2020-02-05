import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
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

    console.log("new token: " + newToken)
    console.log("state: " + this.state.token)
  }

  handleLogout = () => {
      this.setState({
          token: ""
      })
  }

  testTokenUpdate = () => {
    console.log(this.state.token);
    return <Redirect to="/signup"/>
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={()=> 
              <div>
                <Page avatar={logo} handleLogout={this.handleLogout} token={this.state.token}/>
                <button onClick={this.testTokenUpdate}> Test Token Update</button>
              </div>
            }/>
        
            <Route path="/login" render={() => <Login avatar={logo}/>}/>
        
            <Route path="/signup" render={() => <Signup avatar={logo} handleTokenUpdate={this.handleTokenUpdate}/>}/>

          </Switch>
        </div>
      </Router>
      
    )
  }
  
}

export default App;
