import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Clock from './Components/Clock.js';


// class Clock extends Component{
//   constructor(props){
//     super(props);
//     this.state = {message: "Welcome"};
//     this.onChange= this.onChange.bind(this);
//   }
//   onChange(event){
//     this.setState({
//       message: "ABCD"
//     });
//   }
//   render() {
//     return(
//       <div>
//           <h1>Hello World</h1>
//               <h3>{this.props.title}</h3>
//               <h2>It is {this.state.message}.</h2>
//               <button onClick={this.onChange}>Click me</button>
//         </div>
//     );
//   }
//}



class App extends Component {
  render() {
    return (
      <div>
      <Clock name="Javascipt"></Clock>
      </div>
    );
  }
}

export default App;
