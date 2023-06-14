import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
    const cardStyle = {
        color: 'black',
        backgroundColor: 'white',
        border: '1px black solid',
        width: '18rem'
    }; 
    
    return (
        <div>
            <Card style={cardStyle} className="container postList">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Instructor:{post.instructor}
                        <br />
                        Date:{post.date}
                    </Card.Subtitle>
                    <Card.Text className="text-truncate">
                        {post.description}
                    </Card.Text>
                    <Card.Link>
                        <Link to='/details'>
                            {/* Todo: path */}
                            <button className="button" >More info</button>
                        </Link>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
  };
  
  export default Post;