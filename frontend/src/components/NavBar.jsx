import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const linkStyle = {
        textDecoration: 'none'
    }
    const dropdownStyle = {
        color: 'white',
        backgroundColor: 'black',
        padding: '5px'
        }

    return (
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container style={{ justifyContent: 'evenly', padding: '0px', margin: '5px' }}>
            <Navbar.Brand><h1 className="title">Nurse Plus</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="me-auto ">
                    <Link className="nav-item active" style={linkStyle} to="/">
                        <button className="nav-link rounded">Home</button>
                    </Link>
                    <NavDropdown bg="dark"variant="dark "title="Course" id="basic-nav" className="nav-item active">
                            <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
                            <Link className="nav-item" style={linkStyle} to="/gallery">
                            <button className="nav-link rounded">Lessons</button>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
                            <Link className="nav-item" style={linkStyle} to="/newPost">
                            <button className="nav-link rounded">New course</button>
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>    
                    <Link className="nav-item" style={linkStyle}  to="/about">
                        <button className="nav-link rounded">About Us</button>
                    </Link>
                    <Link className="nav-item" style={linkStyle}  to="/contact">
                    <button className="nav-link rounded">Contact Us</button>
                    </Link>
                    <Link className="nav-item" style={linkStyle} to="/login">
                        <button className="nav-link rounded">Log in</button>
                    </Link>
                    <NavDropdown bg="dark"variant="dark "title="User" id="basic-nav" className="nav-item active">
                        <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
                            <Link className="nav-item" style={linkStyle} to="/viewUser">
                            <button className="nav-link rounded">Edit</button>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
                            <Link className="nav-item" style={linkStyle} to="">
                            <button className="nav-link rounded">Logout</button>
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  };
  
export default NavBar;
  
