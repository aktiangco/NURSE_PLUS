import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="NavBar">       
            <Link className="button" to="/"><button>Home</button></Link>
            <Link className="button" to="/gallery"><button>Lessons</button></Link>
            <Link className="button" to="/about"><button>About Us</button></Link>
            <Link className="button" to="/contact"><button>Contact Us</button></Link>
            <Link className="button" to="/login"><button>Log in</button></Link>              
        </nav>
    );
  };
  
  export default NavBar;