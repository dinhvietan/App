import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppRouter from './Components/Script/AppRouter'

class App extends Component {
  
  constructor(props){
    super(props);  
  }

  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
 