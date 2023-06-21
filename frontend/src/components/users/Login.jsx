import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CurrentUser } from '../contexts/CurrentUser';

const Login = () => {
  const { setCurrentUser } = useContext(CurrentUser);
  const navigate = useNavigate(); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Logging in with credentials:', credentials);
      const response = await fetch("http://localhost:8080/auth/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data.user);
        setCurrentUser(data.user);
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Login error:', errorData);
        throw new Error(errorData.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const cardStyle = {
    color: 'white',
    backgroundColor: 'cornflowerblue',
    border: '1px black solid',
    width: '100%',
    height: 'auto'
  };

  return (
    <div>
      <Card className="container" style={cardStyle}>
        <Card.Body>
          <Card.Title className="font-weight-bold">
            <h1>Login page</h1>
          </Card.Title>
          <br />
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3" style={{ justifyContent: 'center' }}> 
              <Form.Group as={Col} md="4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <Form.Control
                    required
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleInputChange}
                  />
                  <button
                    className="password-toggle-main rounded"
                    type="button"
                    onClick={handlePasswordToggle}
                  >
                    {passwordVisible ? 'Hide' : 'Show'}
                  </button>
                </div>
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Form.Group>
            </ Row>
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <button className="button" type="submit">
              Log in
            </button>
          </Form>
          <br />
          <Card.Text>
            <Link to="/userRegistration">
              <button className="btn btn-warning">Sign up</button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
