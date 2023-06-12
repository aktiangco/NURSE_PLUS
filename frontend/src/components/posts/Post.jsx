import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Post = (props) => {
    return (
        <div>
            <div>
                
            </div>
            <Card style={{ width: '18rem'}} className="container">
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Instructor:{props.data.instructor}
                        <br />
                        Date:{props.data.date}
                    </Card.Subtitle>
                    <Card.Text className="text-truncate">
                    {props.data.description}
                    </Card.Text>
                    <Card.Link>
                        <Link to="/details" className='button' style={{ textDecoration: 'none' }}>More info</Link>
                    </Card.Link>
                </Card.Body>
            </Card>

        </div>
    );
  };
  
  export default Post;