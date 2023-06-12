import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Post = (props) => {
    const cardStyle = {
        color: 'white',
        backgroundColor: 'rgb(18, 133, 133, 0.5)',
        border: '1px black solid',
        width: '18rem'
    }; 
    
    return (
        <div>
            <Card style={cardStyle } className="container postList">
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
                        <Link to="/details"><button className="button">More info</button></Link>
                    </Card.Link>
                </Card.Body>
            </Card>

        </div>
    );
  };
  
  export default Post;