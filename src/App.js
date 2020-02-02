import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './img/logo.svg';
import './App.css';


import Page from './Components/Page';
import Nav from './Components/Nav';
import ProfileForm from './Components/profile/ProfileForm';
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav logo={logo} avatar={logo}/>
        <Page avatar={logo}/>
        <ProfileForm avatar={logo}></ProfileForm>
        <Login></Login>
        {/* <Signup></Signup> */}
      </div>
    </Router>
  )
}

export default App;
