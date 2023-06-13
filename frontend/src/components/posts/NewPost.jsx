import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const NewPost = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }

      setValidated(true);
  };


    // Todo useState, handleChange, handleSubmit
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title><h1>New Posts</h1></Card.Title>
          <Card.Text>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom01">  
                  <Form.Label htmlFor="title">Title:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="title" 
                    name="title"
                    required />
                </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="instructor">Instructor:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="instructor" 
                    name="instructor"
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
                    required />
                      </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="price">Price:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="price" 
                    name="price"
                    defaultValue={"$"}
                    required />
                </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">      
                  <Form.Label htmlFor="date">Date:</Form.Label>
                  <Form.Control 
                    type="date" 
                    id="date" 
                    name="date" 
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
                    required />
                  </ Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label htmlFor="certification">Certification:</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="certification" 
                    name="certification" 
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

export default NewPost;