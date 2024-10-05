import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to manage the open/close status of the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" style={{display:"flex"}}> 
      <div className="logo">MyPortfolio</div>

      {/* Burger Menu Icon */}
      <div className="burger" onClick={toggleMenu}>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
      </div>

      {/* Navigation Links Dropdown */}
      <ul className={`nav-links ${isOpen ? "dropdown open" : "dropdown"}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;