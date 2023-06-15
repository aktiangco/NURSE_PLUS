import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/posts/${postId}`);
        const resData = await response.json();
        setPost(resData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      navigate(`/details/${post._id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8080/posts/${post._id}`, {
        method: 'DELETE',
      });
      navigate('/gallery');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <Card key={post._id} post={post}>
        <Card.Body>
          <Card.Title>
            <h1>Edit Posts</h1>
          </Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="title">Title:</Form.Label>
                  <Form.Control
                    type="text"
                    id="title"
                    name="title"
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="instructor">Instructor:</Form.Label>
                  <Form.Control
                    type="text"
                    id="instructor"
                    name="instructor"
                    value={post.instructor}
                    onChange={e => setPost({ ...post, instructor: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="length">Length:</Form.Label>
                  <Form.Control
                    type="text"
                    id="length"
                    name="length"
                    value={post.length}
                    onChange={e => setPost({ ...post, length: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="price">Price:</Form.Label>
                  <Form.Control
                    type="text"
                    id="price"
                    name="price"
                    defaultValue={'$'}
                    value={post.price}
                    onChange={e => setPost({ ...post, price: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="date">Date:</Form.Label>
                  <Form.Control
                    type="date"
                    id="date"
                    name="date"
                    value={post.date}
                    onChange={e => setPost({ ...post, date: e.target.value })}
                    required
                  />
                </Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="skills_testing">
                    Skills Testing:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="skills_testing"
                    name="skills_testing"
                    value={post.skills_testing}
                    onChange={e => setPost({ ...post, skills_testing: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="validation">
                  <Form.Label htmlFor="certification">
                    Certification:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="certification"
                    name="certification"
                    value={post.certification}
                    onChange={e => setPost({ ...post, certification: e.target.value })}
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
                  value={post.description}
                  onChange={e => setPost({ ...post, description: e.target.value })}
                  style={{ height: '200px' }}
                  required
                ></Form.Control>
              </Row>
              <br />
              
                <button type="submit" className="button" style={{ padding: '10px', margin: '10px' }}> Save update</button>
             
              <Link to={`/details/${post._id}`}>
                <button type="submit" className="button">View Details</button>
              </Link>

              <button type="button" onClick={handleDelete} className="button btn-caution" style={{
                  padding: '10px',
                  margin: '10px',
                  backgroundColor: 'red',
                }}>
                Delete
              </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditPost;
