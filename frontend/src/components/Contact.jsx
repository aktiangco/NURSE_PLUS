import React from 'react';
import Card from 'react-bootstrap/Card';

const Contact = () => {
    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid'
      };

    return (
        <div>
            <Card className="container" style={cardStyle}>
                <Card.Body>
                    <Card.Title className="font-weight-bold"><h1>Contact page</h1></Card.Title>
                    <br />    
                    <Card.Text>
                        Thank you for visiting our website!
                    </Card.Text>
                    <Card.Text>
                        We would love to hear from you. If you have any questions, comments, or feedback, please feel free to reach out to us using the form below. Our team will get back to you as soon as possible.                       
                    </Card.Text>
                    <Card.Text>
                        Contact Information:
                        <br />
                        Email: <a href="*" className=" button btn">Nurse-Plus@wecare.com</a>
                        <br />
                        Phone: <a href="*" className=" button btn">202.555.0131</a>                      
                    </Card.Text>
                    <Card.Text>
                        We value your input and look forward to assisting you. Have a great day!                       
                    </Card.Text>
                    <Card.Text>
                        Best regards,
                        Nurse Plus
                    </Card.Text>
                </ Card.Body>
            </ Card>
        </div>
    );
  };
  
  export default Contact;