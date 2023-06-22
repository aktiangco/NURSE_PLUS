import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { CurrentUser } from '../contexts/CurrentUser';


const PostDetails = () => {
  const { currentUser } = useContext(CurrentUser);
  const [post, setPost] = useState(null);
  const { postId, reservationId } = useParams();
  const [reservation, setReservation] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://nurseplus.onrender.com/posts/${postId}`);
        const resData = await response.json();
        setPost(resData);
        if (resData.reservations.includes(currentUser._id)) {
          setReservation(true);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [postId, currentUser._id]);

  const handleReservation = () => {
    const reservationStatus = !reservation;
  
    fetch(`https://nurseplus.onrender.com/posts/${postId}/reservation`, { // Add the server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reservation: reservationStatus }),
    })
      .then((response) => {
        if (response.ok) {
          setReservation(reservationStatus);
        } else {
          console.error('Failed to create reservation');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleCancelReservation = (reservationId) => {
    fetch(`/posts/${postId}/reservation/${reservationId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setReservation(false);
        } else {
          console.error('Failed to cancel reservation');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  if (!post) {
    return <h1>Loading</h1>;
  }

  const editLesson = currentUser?.role === 'admin' ? (
    <Card.Text>
      <Link to={`/editPost/${post._id}`}>
        <button className="button rounded">Edit Post</button>
      </Link>
    </Card.Text>
  ) : null;

  const reservations = post.reservations.length > 0 ? (
    <div>
      {post.reservations.map((reservation) => (
        <h3 key={reservation}>{reservation}</h3>
        
      ))}
    </div>
  ) : (
    <h3 className="inactive">No reservations yet!</h3>
  );

  const cardStyle = {
    color: 'white',
    backgroundColor: 'cornflowerblue',
    border: '1px black solid',
    width: '100%',
    height: 'auto',
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
            ${post.price}
          </Card.Text>
          <Card.Text>
            {/* Path to do */}
            {reservation ? (
              <button className="button rounded" onClick={() => handleCancelReservation(reservationId)}>
              Cancel Reservation
            </button>        
            ) : (
              <button className="button rounded" onClick={handleReservation}>
                Reserve a Spot
              </button>
            )}
          </Card.Text>
          <Card.Text>{editLesson}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      {/* TODO for User */}
      <Card post={post} className="container" style={cardStyle}>
        <Card.Body>
          <Card.Title>
            <h2>Students Reservation List</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Welcome, students! Let's learn <b>{post.title}</b> and grow together!
          </Card.Subtitle>
          <Card.Text>
            <h3>Student name: {currentUser.firstName}</h3>
          </Card.Text>
          <Card.Text>
            <div>
              <h4>Reservations:</h4>
              {reservations}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostDetails;
