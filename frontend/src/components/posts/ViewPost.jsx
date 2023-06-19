import React, {  useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from "react-router"
import { CurrentUser } from '../contexts/CurrentUser';

const PostDetails = () => {
    const { currentUser } = useContext(CurrentUser)
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
  
    let editLesson = null
  
    if (currentUser?.role === 'admin') {
      editLesson = (
        <Card.Text>
            <Link to={`/editPost/${post?._id}`}>
                <button className='button rounded'>Edit Post</button>
            </Link> 
        </Card.Text>
      )
  }
    
    if (!post) {
		return <h1>Loading</h1>
    }
    
    const cardStyle = {
      color: 'white',
      backgroundColor: 'cornflowerblue',
      border: '1px black solid',
      width: '100%',
      height: 'auto'
    };
    
  return (
    <div>
            <Card key={post._id} post={post} className="container" style={cardStyle}>
                <Card.Body>
                    <Card.Title>
                        <h2>Lesson Details</h2>
                        <h5>Course: {post.title}</h5>
                       
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
                          <button className="button rounded">Reserve a Spot</button>
                          <button className="button rounded">cancel Spot</button>
                        </Link> 
                  </Card.Text>
                  <Card.Text>
                    {editLesson}
                  </Card.Text>
                    
                </Card.Body>
          </Card>
          <br />
          {/* TODO for User */}
          <Card key={post._id} post={post} className="container" style={cardStyle}>
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
                          <button className="button rounded">Reserve a Spot</button>
                          <button className="button rounded">cancel Spot</button>
                        </Link> 
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/gallery`}>
                            <button className='button rounded'>Back</button>
                        </Link> 
                    </Card.Text>
                </Card.Body>
            </Card>
    </div>
  );
};

export default PostDetails;
