import React from 'react';


function Error() {
    return (
        <main>
            <h1 className="text-danger">404: PAGE NOT FOUND</h1>
            <img src="http://localhost:5000/images/kittykat.jpeg" alt="404"></img> {/* images */}
                <p >Oops, sorry, we can't find this page!</p>
        </main>
            );
        }

export default Error;
