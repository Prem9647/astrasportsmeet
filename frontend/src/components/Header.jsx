import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Any future auth logic can go here
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <button className="logo-btn" onClick={() => handleNavigation('/login')}><img src="./images/logos/Sample Logo 3D 1.png" alt="Rotary with Unit Logo" width="100" height="50" /></button>
          <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><button className={`nav-button ${isActive('/') ? 'active' : ''}`} onClick={() => handleNavigation('/')}>Home</button></li>
            <li><button className={`nav-button ${isActive('/about') ? 'active' : ''}`} onClick={() => handleNavigation('/about')}>About</button></li>
            <li><button className={`nav-button ${isActive('/events') ? 'active' : ''}`} onClick={() => handleNavigation('/events')}>Events</button></li>
            <li><button className={`nav-button ${isActive('/points') ? 'active' : ''}`} onClick={() => handleNavigation('/points')}>Points Table</button></li>
            <li><button className={`nav-button ${isActive('/schedule') ? 'active' : ''}`} onClick={() => handleNavigation('/schedule')}>Schedule</button></li>
            <li><button className={`nav-button ${isActive('/images') ? 'active' : ''}`} onClick={() => handleNavigation('/images')}>Photos</button></li>
            <li><button className={`nav-button ${isActive('/registration') ? 'active' : ''}`} onClick={() => handleNavigation('/registration')}>Registration</button></li>
            <li><button className={`nav-button ${isActive('/contact') ? 'active' : ''}`} onClick={() => handleNavigation('/contact')}>Contact</button></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;