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
                        <Link to="/editPost">
                            {/* Edit route */}
                            <button>edit</button>
                        </Link>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
    </div>
  );
};

export default PostDetails;
