import React from 'react';
import './Footer.css'; // Create a CSS file for styling

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} SK Tech Pvt Ltd. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
