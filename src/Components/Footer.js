import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>We offer the best gadgets in the industry with high quality and reliability. Our mission is to provide innovative solutions for all your tech needs.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AllProducts">Products</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@gadgetstore.com</li>
            <li>Phone: +91 8438970203</li>
            <li>Address: 123 Gadget Street, Tech City, India</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gadget Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
