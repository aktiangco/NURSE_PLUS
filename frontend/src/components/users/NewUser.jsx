import React from 'react';


const NewUser = () => {
    return (
        <div>
            <h1>New User Sign-up page</h1>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                    />
                </label>
                <button type="submit">Submit</button>
                
            </form>


        </div>
    );
  };
  
  export default NewUser;