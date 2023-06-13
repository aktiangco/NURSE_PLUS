import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid'
      };
    
    return (
        <div>
            <Card className="container" style={cardStyle}>
                <Card.Body>
                    <Card.Title className="font-weight-bold"><h1>Login page</h1></Card.Title>
                    <br />    
                    <Card.Text>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Email"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="password"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>     
                        </Row>
                        
                        <button className="button" type="submit">Log in</button>
                        </Form>
                    </Card.Text>
                    <Card.Text>
                        <Link to="/signup"><button className="btn btn-warning">Sign up</button></Link>
                    </Card.Text>
                </ Card.Body>
            </ Card>
        </div>
    );
  };
  
  export default Login;