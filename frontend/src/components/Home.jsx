import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Welcome to Nurse plus</h1>
            <p>In order to facilitate the improvement of nurses' skills and provide them with additional educational opportunities, a class is being organized. The purpose of this class is to help nurses enhance their abilities and expand their knowledge.</p>

            <Link to="/gallery"><button>Lessons</button></Link>


        </div>
    );
  };
  
  export default Home;