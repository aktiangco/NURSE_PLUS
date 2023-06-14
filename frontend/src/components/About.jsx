import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const About = () => {
    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid'
      };

    return (
        <div>
            <div>
            <Card className="container" style={cardStyle}>
                <Card.Body>
                    <Card.Title className="font-weight-bold"><h1>About Us</h1></Card.Title>
                    <br />    
                    <Card.Text>
                        At Nurse_Plus, we are dedicated to empowering registered nurses and providing them with the tools they need to excel in their careers. Our platform is committed to delivering high-quality education and training, enabling nurses to make a positive impact in the healthcare industry.
                    </Card.Text>
                    <Card.Text>
                        Our team of experienced nurse instructors at Nurse_Plus brings a wealth of knowledge and expertise to the table. With years of practical experience in various healthcare settings, our instructors have a deep understanding of the challenges faced by nurses. They are passionate about sharing their knowledge and helping nurses enhance their skills to deliver exceptional patient care.
                    </Card.Text>
                    <Card.Text>
                        Quality Education is our top priority at Nurse_Plus. We offer a comprehensive curriculum designed to cover a wide range of relevant topics, including clinical skills, patient care, specialized procedures, and professional development. Our courses are regularly updated to incorporate the latest industry trends and evidence-based practices, ensuring that nurses receive the most up-to-date education.
                    </Card.Text>
                    <Card.Text>
                        Flexibility is key, as we understand the demanding schedules of working nurses. Nurse_Plus provides flexible learning options, allowing nurses to access educational materials at their convenience. Our online courses offer the flexibility to learn at your own pace, without compromising your work or personal commitments.
                    </Card.Text>
                    <Card.Text>
                        At Nurse_Plus, we foster a supportive and collaborative learning environment. We believe in the power of community and provide opportunities for nurses to connect, engage, and share insights. Our platform facilitates discussions and networking, enabling nurses to learn from each other and build professional connections.
                    </Card.Text>
                    <Card.Text>
                        We are committed to your success and growth as a nurse. Nurse_Plus is here to support you on your educational journey, providing the knowledge and skills you need to thrive in the ever-evolving field of healthcare. We value your feedback and are always available to address any questions or inquiries you may have.
                    </Card.Text> 
                    <Card.Text>
                    <Link to="/contact"><button className="button">Contact us</button></Link> today to join Nurse_Plus and take your nursing career to the next level!
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
  };
  
  export default About;