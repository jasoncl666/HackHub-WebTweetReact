import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './img/logo.svg';
import './App.css';

import Page from './Components/Page';
import ProfileForm from './Components/profile/ProfileForm';
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'

function App() {

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/">
            <div>
              <Page avatar={logo}/>
              <ProfileForm avatar={logo}/>
            </div>
          </Route>

          <Route path="/login"><Login avatar={logo}/></Route>

          <Route path="/signup"><Signup avatar={logo}/></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
