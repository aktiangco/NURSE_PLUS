import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
  const navigate = useNavigate();
//   TODO: const [adminVisible, setAdminVisible] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zipCode: '',
    role: '',
    passwordDigest: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:8080/users/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    navigate(`/`);
  }
// TODO
//   const adminToggle = () => {
//     setAdminVisible(!adminVisible);
//   };

  const cardStyle = {
    backgroundColor: 'cornflowerblue',
    border: '1px black solid',
    width: '100%',
    height: 'auto'
  };

  return (
    <Card className="container" style={cardStyle}>
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
                onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3" style={{ justifyContent: 'center' }}>
            <Form.Group as={Col} md="4">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                id="role"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Password Digest</Form.Label>
              <Form.Control
                type="text"
                name="passwordDigest"
                id="passwordDigest"
                placeholder="Password Digest"
                onChange={(e) => setUser({ ...user, passwordDigest: e.target.value })}
              />
            </Form.Group>
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
