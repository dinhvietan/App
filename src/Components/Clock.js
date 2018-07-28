import React, {Component} from 'react';


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        alert("Component already rendered.");
    }
    componentDidUpdate(props, state){
        console.log(props, state)
        if(state.date != this.state.date) {
            alert('Current date: '+ this.state.date.toLocaleTimeString());
        }
    }
    componentWillUnmount(){
        alert(134);
    }
    onClick(){
        this.setState({date: new Date()});
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.onClick.bind(this)}>Update Time</button>
            </div>
        );
    }
}

export default Clock;