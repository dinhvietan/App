import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Script/Header.js';
import LoginFrom from './Components/Script/LoginForm.js'



class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <LoginFrom></LoginFrom>
      </div>
    );
  }
}

export default App;
