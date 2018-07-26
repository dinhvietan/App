import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Grid, Row} from 'react-bootstrap';
import './Components/Style/LoginFrom.css';

class LoginFrom extends Component {
  render() {
    return (

        <Form horizontal className="app-login-form">
        <Grid>
        <Row className="show-grid">
        <Col sm={12} md={12}>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={4}>
                    Email
                </Col>

                <Col sm={8}>
                    <FormControl type="email" placeholder="Email" />
                </Col>
            </FormGroup>
        </Col>
        </Row>

        <Row className="show-grid">
        <Col sm={12} md={12}>
            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={4}>
                    Password
                </Col>
                <Col sm={8}>
                    <FormControl type="password" placeholder="Password" />
                </Col>
            </FormGroup>
        </Col>
        </Row>

        <Row className="show-grid">
        <Col sm={12} md={12}>
            <FormGroup>
            <Col componentClass={ControlLabel} sm={4}> </Col>
                <Col sm={8}>
                    <Checkbox>Remember me</Checkbox>
                </Col>
            </FormGroup>
        </Col>
        </Row>
        
        <Row className="show-grid">
        <Col sm={12} md={12}>
            <FormGroup>
            <Col componentClass={ControlLabel} sm={4}> </Col>
                <Col smOffset={10}  sm={8}>
                    <Button type="submit">Sign in</Button>
                </Col>
            </FormGroup>
        </Col>
        </Row>
    
        </Grid>
        </Form>
    );
  }
}

export default LoginFrom;