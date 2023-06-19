import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CurrentUser } from '../contexts/CurrentUser';

const EditUser = () => {
  const { currentUser } = useContext(CurrentUser)
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/auth/login`);
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
      await fetch(`http://localhost:8080/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      });

      navigate(`/userProfile/${userId}`);
      setIsSaved(true);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8080/users/${userId}`, {
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
          {isSaved && (
            <p style={{ color: 'green' }}>Update saved successfully!</p>
          )}
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={currentUser.firstName || ''}
                  onChange={(e) =>
                    setUser({ ...currentUser, firstName: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={currentUser.lastName || ''}
                  onChange={(e) =>
                    setUser({ ...currentUser, lastName: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={currentUser.email || ''}
                  onChange={(e) => setUser({ ...currentUser, email: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="password" className="password-input">
                <Form.Label>Password:</Form.Label>
                <div>
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    // value={currentUser.password || ''}
                    onChange={(e) =>
                      setUser({ ...currentUser, password: e.target.value })
                    }
                    required
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
            >
              Save Update
            </button>

            <Link to={`/viewUser/${userId}`}>
              <button type="button" className="button">
                View User
              </button>
            </Link>

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
    </div>
  );
};

export default EditUser;
