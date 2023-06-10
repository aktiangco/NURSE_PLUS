import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>           
            <Link to="/"><button>Home</button></Link>
            <Link to="/gallery"><button>Lessons</button></Link>
            <Link to="/about"><button>About Us</button></Link>
            <Link to="/contact"><button>Contact Us</button></Link>
            <Link to="/login"><button>Log in</button></Link>     
        </div>
    );
  };
  
  export default NavBar;