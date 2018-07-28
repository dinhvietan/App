import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Clock from './Components/Clock.js';



class App extends Component {
  render() {
    return (
      <div>
      <Clock name="Javascipt"></Clock>
      <Clock name="React"></Clock>
      </div>
    );
  }
}

export default App;
