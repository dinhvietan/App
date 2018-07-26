import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginFrom from './LoginForm';


class Welcome extends Component {
  render() {

    return <h1>Hello {this.props.name}
    {this.props.title}
    </h1>;

  }
}


class App extends Component {
  render() {
    return (
      <div>
      <Welcome name="React" title=" Welcome to "></Welcome>
      <LoginFrom/>
      </div>
    );
  }
}

export default App;
