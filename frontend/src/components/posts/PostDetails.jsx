import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PostDetails = ({post}) => {
  return (
    <div>
      <h2>Lesson Details</h2>
      <Card style={{ width: '100%', height: 'auto' }}>
        <Card.Body>
          <Card.Title>
            <h4>Course:</h4>
            {post.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Instructor: {post.instructor}
            <br />
            Date: {post.date}
          </Card.Subtitle>
          <Card.Text>
            <h4>Description:</h4>
            {post.description}
          </Card.Text>
          <Card.Text>
            <h4>Certification:</h4>
            {post.certification}
          </Card.Text>
          <Card.Text>
            <h4>Course Length:</h4>
            {post.length}
          </Card.Text>
          <Card.Text>
            <h4>Cost:</h4>
            {post.price}
          </Card.Text>
          <Card.Text>
            <Link to="/editPost">
              <button>edit</button>
            </Link>
            <button>delete</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostDetails;
