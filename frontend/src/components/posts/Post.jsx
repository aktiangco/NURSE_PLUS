import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CurrentUser } from '../contexts/CurrentUser';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(CurrentUser);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching posts');
    }
  };

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const cardStyle = {
    color: 'black',
    backgroundColor: 'white',
    border: '1px black solid',
    width: '18rem',
  };

  let postFormatted = null;

  if (currentUser) {
    postFormatted = posts.map((post) => (
      <Card key={post._id} post={post} style={cardStyle} className="container postList">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Instructor: {post.instructor}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Date: {post.date}
          </Card.Subtitle>
          <Card.Text className="text-truncate">{post.description}</Card.Text>
          <Card.Link>
            <Link to={`/viewPost/${post._id}`}>
              <button className="button">More info</button>
            </Link>
          </Card.Link>
        </Card.Body>
      </Card>
    ));
  } else {
    postFormatted = <p>Please log in to view the posts.</p>;
  }

  return <div className="row">{postFormatted}</div>;
};

export default Post;
