import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const EditPost = () => {
  const [validated, setValidated] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetchPosts()
        .then((data) => setPosts(data))
        .catch((error) => console.error(error));
  }, []);

  const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error fetching posts');
      }
  };

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }

      setValidated(true);
  };
    
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title><h1>Edit Posts</h1></Card.Title>
          <Card.Text>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom01">  
                  <Form.Label htmlFor="title">Title:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="title" 
                    name="title"
                    value={posts.title}
                    required />
                </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="instructor">Instructor:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="instructor" 
                    name="instructor"
                    value={posts.instructor}
                    required />
                </ Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="length">Length:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="length" 
                    name="length"
                    value={posts.length}                  
                    required />
                      </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="price">Price:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="price" 
                    name="price"
                    defaultValue={"$"}
                    value={posts.price}
                    required />
                </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">      
                  <Form.Label htmlFor="date">Date:</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={posts.date}
                    required />
                </ Form.Group>
              </ Row>
              <br />
              <Row>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="skills_testing">Skills Testing:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="skills_testing" 
                    name="skills_testing" 
                    value={posts.skills_testing}
                    required />
                  </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="certification">Certification:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="certification" 
                    name="certification" 
                    value={posts.certification}
                    required />
              </ Form.Group>
              </Row>
              <br />
              <Row>
                <Form.Label htmlFor="description">Description:</Form.Label><br />
                <Form.Control 
                    as="textarea"
                    id="description" 
                    name="description" 
                    value={posts.description}
                    style={{height: '200px'}}
                    required>
                </Form.Control>
              </Row>
              <br />
              <button type="submit" className="button" style={{padding: '10px'}}>Create</button>
            </ Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditPost;