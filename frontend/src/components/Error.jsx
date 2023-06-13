import React from 'react';
import Image from 'react-bootstrap/Image';
import error from '../assets/404.jpg';


function Error() {
    return (
        <main>
            <h1 className="text-danger">404: PAGE NOT FOUND</h1>
            <Image src={error} alt="404" /> {/* images */}
                <p >Oops, sorry, we can't find this page!</p>
        </main>
            );
        }

export default Error;
