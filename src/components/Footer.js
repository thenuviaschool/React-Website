import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>The Nuvia School and Academy</h3>
            <p>Building Good Humans Not Just Good Students</p>
            <div className="social-links">
              <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
              <<a href="https://wa.me/923248843622" target="_blank" rel="noopener noreferrer" className="whatsapp">><i className="fab fa-whatsapp"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/timings">Timings</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> Near Jumairat Bazar, Najam Park, Shadipura, Lahore</p>
            <p><i className="fas fa-phone"></i> 0324-8843622</p>
            <p><i className="fas fa-envelope"></i> thenuviaschool@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 The Nuvia School and Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
