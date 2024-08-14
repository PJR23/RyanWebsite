// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <p>
    
<p>
  Hi, I’m Ryan, a web developer who loves crafting dynamic and user-friendly web applications. Explore my portfolio to see my latest projects and skills.
</p>

          </p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: ryanvonmay@gmx.ch</p>
          <p>Phone: (41+) 789399466 </p>
        </div>
        <div className="footer-column">
          <h3>Check me out!</h3>
          <p>
            <a href="https://ch.linkedin.com/">LinkedIn</a>
          </p>
          <p>
            <a href="https://www.twitter.com">Twitter</a>
          </p>
          <p>
            <a href="https://www.instagram.com/__ryan__vm/">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ryan Santos von May. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
