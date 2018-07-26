import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Grid, Row} from 'react-bootstrap';
import './Components/Style/LoginFrom.css';

class LoginFrom extends Component {
  render() {
    return (
        

    
        <Form horizontal className="app-login-form">
            <FormGroup controlId="formHorizontalEmail">
            <Row className="show-grid">
            <Col xs={12} md={4}>
                <Col componentClass={ControlLabel} sm={2}>
                    <h5>Email</h5>
                </Col>
            </Col>
            <Col xs={12} md={8}>
                <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                </Col>
            </Col>
            </Row>
        </FormGroup>
   
       
        <FormGroup controlId="formHorizontalPassword">
            <Row className="show-grid">
            <Col xs={12} md={4}>
                <Col componentClass={ControlLabel} sm={2}>
                    <h5>Password</h5>
                </Col>
            </Col>
            <Col xs={12} md={8}>
                <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
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
                <Col xs={5} sm={5} md={5}></Col>
                <Col xs={7} sm={7} md={7}>
                <Col smOffset={7} >
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