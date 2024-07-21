import React from 'react';
import { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../index.css"; 
import img from "../Assets/Images/newlogin.png";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/auth/login', loginData);
      // Assuming the backend sends back a JWT token on successful login
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        navigate('/userprofilepage');
      }, 2000);
    } catch (error) {
      error=setError(error.response?.data?.message || 'Error logging in');
    } finally {
      setLoading(false);
    }
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
            <label htmlFor="email"> Email</label>
            <input
              type="text"
              id="email"
              name="email" 
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
                  <input
                  type="password"
                  id="password"
                  name="password"  
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control"
                />
            </div>
                {/* <a href="#" className="forgot-password">
                Forgot password?
                </a> */}
              <button type="submit" className="btn"  disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            {error && <div className="error-message">{error}</div>}
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

