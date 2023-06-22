import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    instructor: '',
    description: '',
    length: '',
    skills_testing: '',
    price: '',
    certification: '',
    date: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`https://nurseplus.onrender.com/posts/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });

    navigate(`/gallery`);
  }

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
          <Card.Title>
            <h1>New Post</h1>
          </Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label htmlFor="title">Title:</Form.Label>
                  <Form.Control
                    type="text"
                    id="title"
                    name="title"
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label htmlFor="instructor">Instructor:</Form.Label>
                  <Form.Control
                    type="text"
                    id="instructor"
                    name="instructor"
                    onChange={(e) => setPost({ ...post, instructor: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group as={Col} >
                  <Form.Label htmlFor="length">Length:</Form.Label>
                  <Form.Control
                    type="text"
                    id="length"
                    name="length"
                    onChange={(e) => setPost({ ...post, length: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label htmlFor="price">Price:</Form.Label>
                  <Form.Control
                    type=""
                    id="price"
                    name="price"
                    onChange={(e) => setPost({ ...post, price: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label htmlFor="date">Date:</Form.Label>
                  <Form.Control
                    type="date"
                    id="date"
                    name="date"
                    onChange={(e) => setPost({ ...post, date: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group as={Col} >
                  <Form.Label htmlFor="skills_testing">Skills Testing:</Form.Label>
                  <Form.Control
                    type="text"
                    id="skills_testing"
                    name="skills_testing"
                    onChange={(e) => setPost({ ...post, skillsTesting: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label htmlFor="certification">Certification:</Form.Label>
                  <Form.Control
                    type="text"
                    id="certification"
                    name="certification"
                    onChange={(e) => setPost({ ...post, certification: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Label htmlFor="description">Description:</Form.Label>
                <br />
                <Form.Control
                  as="textarea"
                  id="description"
                  name="description"
                  onChange={(e) => setPost({ ...post, description: e.target.value })}
                  style={{ height: '200px' }}
                  required
                ></Form.Control>
              </Row>
              <br />
              <button type="submit" className="button" style={{ padding: '10px', backgroundColor: 'yellowgreen' }}>
                Create New Lesson
              </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewPost;
