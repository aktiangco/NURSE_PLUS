import React from 'react';
import Card from 'react-bootstrap/Card';

const PostDetails = (props) => {
    return (
        <div>
            <h2>Lesson Details</h2>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Instructor:{props.data.instructor}
                        <br />
                        Date:{props.data.date}
                    </Card.Subtitle>
                    <Card.Text >
                    {props.data.description}
                    </Card.Text>
                    <Card.Text >
                    {props.data.certification}
                    </Card.Text>
                    <Card.Text >
                    {props.data.length}
                    </Card.Text> 
                    <Card.Text >
                    {props.data.price}
                    </Card.Text>
                    <Card.Link href="#">More info</Card.Link>
                    
                </Card.Body>
            </Card> */}
        </div>
    );
  };
  
  export default PostDetails;