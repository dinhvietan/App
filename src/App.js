import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppRouter from './Components/Script/AppRouter'

class App extends Component {
  
  constructor(props){
    super(props);  
  }

  render() {
    let headerEle = [];
    if(this.props.isLogged === true){
      headerEle.push(
        <Header logged={true} onClick={(e)=>{}} />
      )
    }
    return (
      <div>
        <AppRouter isLogged={this.state.logged}/>
      </div>
    );
  }
}

export default App;
 