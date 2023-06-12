import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const Home = () => {
    return (
        <div>
            <Card className="container">
                <Card.Body>
                    <Card.Title className="font-weight-bold"><h1>Welcome to Nurse Plus</h1></Card.Title>
                    <br />    
                    <Card.Text>
                        In order to facilitate the improvement of nurses' skills and provide them with additional educational opportunities, a class is being organized. The purpose of this class is to help nurses enhance their abilities and expand their knowledge.
                    </Card.Text>
                    <Card.Text>
                        <Link to="/gallery"><button>Lessons</button></Link>
                    </Card.Text>
                </ Card.Body>
            </ Card>
        </div>
    );
  };
  
  export default Home;