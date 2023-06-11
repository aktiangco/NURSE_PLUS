import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Lesson = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
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
                    <Card.Link><Link to="/details">More info</Link></Card.Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
  };
  
  export default Lesson;