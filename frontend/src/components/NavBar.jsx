import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" style={{  }}>
            <Container style={{ justifyContent: 'evenly', padding: '0px', margin: '5px' }}>
          <Navbar.Brand><h1 className="title">Nurse Plus</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Nav className="me-auto " style={{ justifyContent: 'end' }}>
                <Link className="nav-item active" style={{ textDecoration: 'none' }} to="/">
                    <button className="nav-link rounded">Home</button>
                </Link>
                <Link class="nav-item" style={{ textDecoration: 'none' }} to="/gallery">
                    <button className="nav-link rounded">Lessons</button>
                </Link>
                <Link class="nav-item" style={{ textDecoration: 'none' }} to="/about">
                    <button className="nav-link rounded">About Us</button>
                </Link>
                <Link class="nav-item" style={{ textDecoration: 'none' }} to="/contact">
                 <button className="nav-link rounded">Contact Us</button>
                </Link>
                <Link class="nav-item" style={{ textDecoration: 'none' }} to="/login">
                    <button className="nav-link rounded">Log in</button>
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
    );
  };
  
  export default NavBar;