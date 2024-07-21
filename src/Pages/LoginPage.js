import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css"; 
import img from "../Assets/Images/newlogin.png";

function LoginPage() {
    const [username, setUsername] = useState("")
      const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
     e.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
    };
  


  return (
    
    <div className="login-card">
      <div className="login-left">
        <div className='login-img'>
        <img src={img} />
         </div>  
         </div>


      <div className="login-right">
        <div className="login-form">
        <h1 className="title-login">LUMIN</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username or Email"
              className="form-control"
            />
          </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
                  <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="form-control"
                />
            </div>
                {/* <a href="#" className="forgot-password">
                Forgot password?
                </a> */}
              <button type="submit" className="btn">
                LOGIN
              </button>
            </form>
            <div className="register-link">
              <span>Don't have an account? </span>
              <Link to="/register" className="link-underline">
              Register here
            </Link>
            </div>
      </div>
    </div>
    </div>
    
  );
}

export default LoginPage;

