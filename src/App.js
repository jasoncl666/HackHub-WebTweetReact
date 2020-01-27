import React from 'react';
import logo from './img/logo.svg';
import './App.css';

import Page from './Components/Page';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {

  return (
    <div className="App">
      <Nav logo={logo}/>
      {/* <Page/> */}
      <Profile avatar={logo}></Profile>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;
