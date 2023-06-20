import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zipCode: '',
    role: 'user',
    passwordDigest: ''
  });

  const [showPasswordDigest, setShowPasswordDigest] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const validateInputs = () => {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      console.log('Please fill in all required fields.');
      return false;
    }

    return true;
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setUser((prevUser) => ({
      ...prevUser,
      role: checked ? 'admin' : 'user'
    }));
    setShowPasswordDigest(checked);
  };

  return (
    <Card className="container" style={{ backgroundColor: 'cornflowerblue', border: '1px black solid', width: '100%', height: 'auto' }}>
      <Card.Body>
        <Card.Title className="font-weight-bold">
          <h1>New User Registration</h1>
        </Card.Title>
        <br />
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3" style={{ justifyContent: 'center' }}>
            <Form.Group as={Col} md="4">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Form.Group as={Col} md="4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3" style={{ justifyContent: 'center' }}>
            <Form.Group as={Col} md="4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                id="city"
                placeholder="City"
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                id="state"
                placeholder="State"
                value={user.state}
                onChange={(e) => setUser({ ...user, state: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                id="zipCode"
                placeholder="Zip Code"
                value={user.zipCode}
                onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3" style={{ justifyContent: 'center' }}>
            <Form.Group as={Col} md="2">
              <Form.Check
                type="checkbox"
                name="role"
                id="role"
                label="Admin"
                checked={user.role === 'admin'}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
            {showPasswordDigest && (
              <Form.Group as={Col} md="2">
                <Form.Control
                  type="text"
                  name="passwordDigest"
                  id="passwordDigest"
                  placeholder="Admin code"
                  value={user.passwordDigest}
                  onChange={(e) => setUser({ ...user, passwordDigest: e.target.value })}
                />
              </Form.Group>
            )}
          </Row>
          <div style={{ textAlign: 'center' }}>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewUser;
