import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            id="email"
                            name="email"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <br />
                <div>
                <input className="btn btn-success" type="submit" value="Login"/>
                    <br />
                    <br />
                <Link to="/signup"><button className="btn btn-warning">Sign up</button></Link>
                </div>
            </form>
        </div>
    );
  };
  
  export default Login;