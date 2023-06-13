import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import schoolImage from '../assets/school.jpeg';


const Home = () => {
    const cardStyle = {
      color: 'white',
      backgroundColor: 'cornflowerblue',
      border: '1px black solid'
    };
  
    return (
      <div>
        <Card className="container" style={cardStyle}>
          <Card.Body>
            <Card.Title className="font-weight-bold"><h1>Welcome to Nurse Plus</h1></Card.Title>
            <br />
            <Card.Text>
              <Image
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', border: '1px black solid' }}
                src={schoolImage}
                fluid
              />
            </Card.Text>
            <Card.Text>
              In order to facilitate the improvement of nurses' skills and provide them with additional educational opportunities, a class is being organized. The purpose of this class is to help nurses enhance their abilities and expand their knowledge.
            </Card.Text>
            <Card.Text>
              <Link to="/gallery"><button className='button'>Lessons</button></Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };
  
  export default Home;
  