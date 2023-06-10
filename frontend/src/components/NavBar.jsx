import React from 'react';


const NavBar = () => {
    return (
        <div>
            <h1>NavBar page</h1>
            <nav>
                <ul>
                    <li to="/"><button>Home</button></li>
                    <li to="/about"><button>About Us</button></li>
                    <li to="/contact"><button>Lessons</button></li>
                    <li to="/login"><button>Log in</button></li>
                </ul>
            </nav>
        </div>
    );
  };
  
  export default NavBar;