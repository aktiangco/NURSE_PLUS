import React , { useState, useEffect }from 'react';
import Post from './posts/Post';
// import Calendar from './MyCalendar'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Gallery = () => {
    const [date, setDate] = useState(new Date());
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
          .then((data) => setPosts(data))
          .catch((error) => console.error(error));
      }, []);
    
      const fetchPosts = async () => {
        try {
          const response = await fetch('/posts');
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error('Error fetching posts');
        }
      };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid'
    };

    return (
        <div>
             <Card className="container" style={cardStyle}>
                <Card.Body style={{ display: 'center' }}>
                    <Card.Title className="font-weight-bold"><h1>Lesson page</h1></Card.Title> 
                    <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Calendar value={date} onChange={handleDateChange} />
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            {posts.map((post) => (
                                <Post key={post.id} posts={posts} />
                            ))}
                        </div>
                    </Card.Text>
                </ Card.Body>
            </ Card>
            
            <Link to="/new-posts">New Lessons</Link>
        </div>
    );
  };
  
  export default Gallery;