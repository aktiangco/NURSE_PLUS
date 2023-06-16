import React, {  useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from "react-router"

const ViewUser = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(`http://localhost:8080/users/${userId}`);
            const resData = await response.json();
            setUser(resData);
          } catch (error) {
            console.error('Error fetching post:', error);
          }
        };
        fetchUser();
      }, [userId]);
    
    if (!user) {
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
        <Card key={user._id} post={user} className="container" style={cardStyle}>
            <Card.Body>
                <Card.Title>
                    <h2>User Details</h2>
                </Card.Title>
                <Card.Text>
                    <h4>Username:
                        <h5>"{user.username}"</h5>
                    </h4>
                </Card.Text>
                <Card.Text>
                    <h4>First name:
                        <h5>"{user.firstName}"</h5>
                    </h4>
                </Card.Text>
                <Card.Text>
                    <h4>Last Name:
                        <h5>"{user.lastName}"</h5>
                    </h4>
                </Card.Text>
                <Card.Text>
                    <h4>Email:
                        <h5>"{user.email}"</h5>
                    </h4>
                </Card.Text>
                <Card.Text>
                    <Link to={`/editUser/${user._id}`}>
                            <button className="button rounded">Update User</button>
                    </Link> 
                </Card.Text>
            </Card.Body>
        </Card>         
    </div>
  );
};

export default ViewUser;
