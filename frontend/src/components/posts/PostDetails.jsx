import React, {  useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from "react-router"

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const response = await fetch(`http://localhost:8080/posts/${postId}`);
            const resData = await response.json();
            setPost(resData);
          } catch (error) {
            console.error('Error fetching post:', error);
          }
        };
        fetchPost();
      }, [postId]);
    
    if (!post) {
		return <h1>Loading</h1>
	}
    
  return (
    <div>
        <h2>Lesson Details</h2>
            <Card key={post._id} post={post} style={{ width: '100%', height: 'auto' }}>
                <Card.Body>
                    <Card.Title>
                        <h4>Course: {post.title}</h4>
                       
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
                        ${post.price}.00
                    </Card.Text>
                  <Card.Text>
                      {/* Path to do */}
                        <Link to={`/reserveUser/${post._id}`}> 
                          <button className="btn-success">Reserve a Spot</button>
                          <button className="btn-success">cancel Spot</button>
                        </Link> 
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/editPost/${post._id}`}>
                            <button>edit</button>
                        </Link> 
                    </Card.Text>
                </Card.Body>
          </Card>
          <br />
          {/* TODO for User */}
          <Card key={post._id} post={post} style={{ width: '100%', height: 'auto' }}>
                <Card.Body>
                    <Card.Title>
                    <h2>Students Reservation List</h2>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Welcome, students! Let's learn <b>{post.title}</b> and grow together!
                    </Card.Subtitle>
                  <Card.Text>
                      <h3>Student name: </h3>
                      <h3>Students List:</h3>
                      <div  >
                      <ul style={{listStyle: 'none'}}>
                          <li>names</li>
                          <li>names</li>
                          <li>names</li>
                          <li>names</li>
                      </ul>
                      </div>
                    </Card.Text>
                   
                    
                  <Card.Text>
                      {/* Path to do */}
                        <Link to={`/reserveUser/${post._id}`}> 
                          <button className="btn-success">Reserve a Spot</button>
                          <button className="btn-success">cancel Spot</button>
                        </Link> 
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/gallery`}>
                            <button>Back</button>
                        </Link> 
                    </Card.Text>
                </Card.Body>
            </Card>
    </div>
  );
};

export default PostDetails;
