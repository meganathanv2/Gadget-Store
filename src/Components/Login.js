// src/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-main'>
      <div className='first-login'>
        <div className="login-container">
          <div className="login-form">
            <h2>Admin Login</h2>
            <form>
              <div className="input-group">
                <label htmlFor="admin-username">Username</label>
                <input type="text" id="admin-username" name="username" required />
              </div>
              <div className="input-group">
                <label htmlFor="admin-password">Password</label>
                <input type="password" id="admin-password" name="password" required />
              </div>
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
            <form>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
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
}

export default Login;
