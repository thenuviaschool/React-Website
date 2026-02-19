import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 'active' : '';
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <div className="logo-placeholder"><img src="/images/logo.png" alt="The Nuvia School" className="logo-img" /></div>
          <div className="brand-text">
            <h1>The Nuvia School</h1>
            <span>and Academy</span>
          </div>
        </div>
        <ul className="nav-menu">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/admission" className={isActive('/admission')}>Admission</Link></li>
          <li><Link to="/notifications" className={isActive('/notifications')}>Notifications</Link></li>
          <li><Link to="/timings" className={isActive('/timings')}>School Timings</Link></li>
          <li><Link to="/gallery" className={isActive('/gallery')}>Gallery</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
          <li><Link to="/locate" className={isActive('/locate')}>Locate Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;