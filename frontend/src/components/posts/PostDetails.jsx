import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PostDetails = ({posts}) => {
    return (
        <div>
            <h2>Lesson Details</h2>
            <Card style={{width: '100%', height: 'auto'}}>
                <Card.Body>
                    <Card.Title>
                        <h4>Course:</h4>
                        {/* {posts.title} */}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-mut
                        Courseed">
                        {/* Instructor:{posts.instructor}
                        Date:{posts.date} */}
                    </Card.Subtitle>
                    <Card.Text >
                        <h4>Description:</h4>
                    {/* {posts.description} */}
                    </Card.Text>
                    <Card.Text >
                        <h4>Certification:</h4>
                    {/* {posts.certification} */}
                    </Card.Text>
                    <Card.Text >
                        <h4>Course Legnth:</h4>
                    {/* {posts.length} */}
                    </Card.Text> 
                    <Card.Text >
                        <h4>Cost:</h4>
                    {/* {posts.price} */}
                    </Card.Text>
                    <Card.Text>
                        <Link to='/editPost'>

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