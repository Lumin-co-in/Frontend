import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios'; // Import Axios
import '../form.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    passwd: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('/auth/login', {
        email: formData.email,
        password: formData.passwd,
      });
      console.log('Login successful', response.data);
      setSuccess('Login successful');

      // Redirect or navigate to another page after successful login
      setTimeout(() => {
        navigate('/userprofilepage');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        setError(
          `Login failed: ${error.response.status} - ${error.response.data.message || error.response.statusText}`
        );
      } else if (error.request) {
        setError('Server did not respond. Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="center-section form-container">
      <div className="form-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Email"
            className="text-inputs"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="Password"
            className="text-inputs"
            required
            value={formData.passwd}
            onChange={handleChange}
          />
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <input type="submit" value="Login" className="cta-btn" />
        </form>

        <p>
          Don't have an account?{' '}
          <Link to="/register" className="link-underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
