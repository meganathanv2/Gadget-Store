import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [adminCredentials, setAdminCredentials] = useState({ email: '', password: '' });
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const [adminError, setAdminError] = useState('');
  const [userError, setUserError] = useState('');
  const navigate = useNavigate();

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminCredentials({
      ...adminCredentials,
      [name]: value,
    });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', adminCredentials);
      localStorage.setItem('token', response.data.token);
      navigate('/upload'); 
    } catch (error) {
      setAdminError('Admin login failed: ' + error.response.data.error);
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', userCredentials);
      localStorage.setItem('token', response.data.token);
      navigate('/user/dashboard'); 
    } catch (error) {
      setUserError('User login failed: ' + error.response.data.error);
    }
  };

  return (
    <div className='login-main'>
      <div className='first-login'>
        <div className="login-container">
          <div className="login-form">
            <h2>Admin Login</h2>
            <form onSubmit={handleAdminSubmit}>
              <div className="input-group">
                <label htmlFor="admin-email">Email</label>
                <input
                  type="email"
                  id="admin-email"
                  name="email"
                  value={adminCredentials.email}
                  onChange={handleAdminChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="admin-password">Password</label>
                <input
                  type="password"
                  id="admin-password"
                  name="password"
                  value={adminCredentials.password}
                  onChange={handleAdminChange}
                  required
                />
              </div>
              {adminError && <p className="error-message">{adminError}</p>}
              <button type="submit">Login</button>
              <div className="extra-links">
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='second-login'>
        <div className="login-container">
          <div className="login-form">
            <h2>User Login</h2>
            <form onSubmit={handleUserSubmit}>
              <div className="input-group">
                <label htmlFor="user-email">Email</label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  value={userCredentials.email}
                  onChange={handleUserChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="user-password">Password</label>
                <input
                  type="password"
                  id="user-password"
                  name="password"
                  value={userCredentials.password}
                  onChange={handleUserChange}
                  required
                />
              </div>
              {userError && <p className="error-message">{userError}</p>}
              <button type="submit">Login</button>
              <div className="extra-links">
                <a href="#">Forgot Password?</a>
                <Link to='/signUp'>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
