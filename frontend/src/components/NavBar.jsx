import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CurrentUser } from './contexts/CurrentUser';

const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUser)
    const navigate = useNavigate();
    const linkStyle = {
        textDecoration: 'none'
    }
    const dropdownStyle = {
        color: 'white',
        backgroundColor: 'black',
        padding: '5px'
    }
    
    const handleLogout = async () => {
        await fetch('http://localhost:8080/auth/logout', {
          method: 'POST',
          credentials: 'include',
        })
    
        setCurrentUser(null)
        navigate('/')
    }
    
    let addNewLesson = null

    if (currentUser?.role === 'admin') {
        addNewLesson = (
            <Link className="nav-item" style={linkStyle} to="/newPost/new">
                <button className="nav-link rounded">New course</button>
            </Link>
        )
    }

    let loginActions = (
        <Link className="nav-item" style={linkStyle} to="/login">
            <button className="nav-link rounded">Log in</button>
        </Link>
    )

    if (currentUser) {
        loginActions = (
          <NavDropdown bg="dark" variant="dark" title={`${currentUser.firstName}`} id="basic-nav" className="nav-item active">
            <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
              <Link className="nav-item" style={linkStyle} to={`/editUser/${currentUser._id}`}>
                Edit
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
              <button className="nav-link rounded" onClick={handleLogout}>
                Logout
              </button>
            </NavDropdown.Item>
          </NavDropdown>
        );
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
                            {addNewLesson}
                        </NavDropdown.Item>
                    </NavDropdown>    
                    <Link className="nav-item" style={linkStyle}  to="/about">
                        <button className="nav-link rounded">About Us</button>
                    </Link>
                    <Link className="nav-item" style={linkStyle}  to="/contact">
                    <button className="nav-link rounded">Contact Us</button>
                    </Link>
                    {loginActions}
                    
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  };
  
export default NavBar;
  
