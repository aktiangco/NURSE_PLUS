import React, {  useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from "react-router"

const ViewUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        if (!response.ok) {
          throw new Error('Error fetching user');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError('An error occurred while fetching the user.');
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (error) {
    return <h1>Error: {error}</h1>;
  }
    
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
                    <h4>First name:</h4>
                    <h5>{user.firstName}</h5>
                </Card.Text>
                <Card.Text>
                    <h4>Last Name:</h4>
                    <h5>{user.lastName}</h5>
                </Card.Text>
                <Card.Text>
                    <h4>Email:</h4>
                    <h5>{user.email}</h5>
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
