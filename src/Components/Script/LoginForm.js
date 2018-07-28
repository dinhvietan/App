import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Row} from 'react-bootstrap';
import '../Style/loginform.css';

class LoginFrom extends Component {
    constructor(props){
        super(props);
        this.state = {data: {loginform: "", password: ""}}
    }

    onHandleLoginName(event){
        let newState = {data: this.state.data};
        newState.data.loginname = event.target.value;
        this.setState(newState);
    }
    onHandlePassword(event){
        let newState = {data: this.state.data};
        newState.data.password = event.target.value;
        this.setState(newState);
    }

    /*onHandle(event){
        let newState = {
            data: this.state.data
        };
        let inputName = event.target.value;
        
        console.log(newState)

        this.setState(newState);
    }*/

  render() {
    return (
        
        <Form horizontal className="app-login-form">
            <FormGroup >
            <Row className="show-grid">
            <Col xs={12} md={4}>
                <Col componentClass={ControlLabel} sm={2}>
                    <h5>Email</h5>
                </Col>
            </Col>
            <Col xs={12} md={8}>
                <Col sm={10}>
                    <FormControl name="loginname" type="email" placeholder="Email" onChange={this.onHandleLoginName.bind(this)} value={this.state.data.loginname}/>
                </Col>
            </Col>
            </Row>
        </FormGroup>
   
       
        <FormGroup>
            <Row className="show-grid">
            <Col xs={12} md={4}>
                <Col componentClass={ControlLabel} sm={2}>
                    <h5>Password</h5>
                </Col>
            </Col>
            <Col xs={12} md={8}>
                <Col sm={10}>
                    <FormControl name="password" type="password" placeholder="Password"  onChange={this.onHandlePassword.bind(this)}  value={this.state.data.password}/>
                </Col>
            </Col>
            </Row>
        </FormGroup>

        <FormGroup>
            <Row className="show-grid">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={8}>
                <Col  sm={10}>
                    <Checkbox><p>Remember me</p></Checkbox>
                </Col>
                </Col>
            </Row>
        </FormGroup>

        <FormGroup>
            <Row className="show-grid">
                <Col xs={12} sm={12} md={8}></Col>
                <Col xs={12} sm={12} md={4}>
                <Col smOffset={0} >
                    <Button type="submit" className="app-login-btn">Sign in</Button>
                </Col>
                </Col>
            </Row>
        </FormGroup>
        </Form>
    );
  }
}

export default LoginFrom;