import React from 'react';


const NewUser = () => {
    return (
        <div>
            <h1>New User Sign-up page</h1>
            <form >
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="name"
                            name="name"
                        />
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                        type="password"
                        required
                        className="form-control"
                        id="password"
                        name="password"
                        />
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="email"
                            name="email"
                        />
                <br />
                <button type="submit" className="btn-success">Submit</button>
                </div>
            </div>
                
            </form>


        </div>
    );
  };
  
  export default NewUser;