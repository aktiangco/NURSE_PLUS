import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <h1>NavBar page</h1>
            <nav>               
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/about"><button>About Us</button></Link>
                    <Link to="/contact"><button>Contact Us</button></Link>
                    <Link to="/login"><button>Log in</button></Link>
            </nav>
        </div>
    );
  };
  
  export default NavBar;