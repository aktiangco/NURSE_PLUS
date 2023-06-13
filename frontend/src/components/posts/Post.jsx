import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Post = ({posts}) => {
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
                            <Card.Title>{posts.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Instructor:{posts.instructor}
                                <br />
                                Date:{posts.date}
                            </Card.Subtitle>
                            <Card.Text className="text-truncate">
                                {posts.description}
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