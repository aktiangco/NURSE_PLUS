import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams, useNavigate } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser';

const EditUser = () => {
  const { currentUser } = useContext(CurrentUser);
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://nurseplus.onrender.com/users/${userId}`);
        const resData = await response.json();
        setUser(resData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`https://nurseplus.onrender.com/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      });

      navigate(`/editUser/${userId}`);
      setIsSaved(true);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`https://nurseplus.onrender.com/users/${userId}`, {
        method: 'DELETE',
      });
      navigate('/gallery');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const cardStyle = {
    color: 'white',
    backgroundColor: 'cornflowerblue',
    border: '1px solid black',
    width: '100%',
    height: 'auto',
  };

  return (
    <div>
      <Card key={user._id} post={user} className="container" style={cardStyle}>
        <Card.Body>
          <Card.Title>
            <h1>Update User</h1>
          </Card.Title>
          {isSaved && <p style={{ color: 'green' }}>Update saved successfully!</p>}
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label controlId="firstName">First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={user.firstName || ''}
                  onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label controlId="lastName">Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={user.lastName || ''}
                  onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                  required
                />
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group as={Col}>
                <Form.Label controlId="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email || ''}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} className="password-input">
                <Form.Label controlId="password">Password:</Form.Label>
                <div>
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="password-toggle rounded"
                    onClick={handlePasswordToggle}
                  >
                    {passwordVisible ? 'Hide' : 'Show'}
                  </button>
                </div>
              </Form.Group>
            </Row>
            <br />
            <button
              type="submit"
              className="button"
              style={{ padding: '10px', margin: '10px', backgroundColor: 'yellowgreen' }}
              onClick={() => window.alert('Update saved!')}
            >
              Save Update
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="button btn-caution"
              style={{ padding: '10px', margin: '10px', backgroundColor: 'red' }}
            >
              Delete
            </button>
          </Form>
        </Card.Body>
      </Card>
      <br />
      <Card className="container" style={cardStyle}>
        <Card.Body>
          <Card.Title>
            <h2>{currentUser.firstName} Details</h2>
          </Card.Title>
          <Card.Text>
            
            <h4>Name: <b>{currentUser.firstName} {currentUser.lastName}</b></h4>
          </Card.Text>
          <Card.Text>
            <h4>Email: <b>{currentUser.email}</b></h4>
            <h4>Role: <b>{currentUser.role}</b></h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditUser;
