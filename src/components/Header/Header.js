// src/components/Header/Header.js
import React, { useState } from "react";
import "./Header.css";
import blogimg1 from "../../assets/blogimg1.png";
import logomark from "../../assets/Logomark.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src={logomark} alt="Logo" className="logo-icon" />
        <span className="logo-text">Untitled UI</span>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
      </nav>
      <div className="user-profile">
        <img src={blogimg1} alt="User Profile" className="profile-picture" />
      </div>
    </header>
  );
};

export default Header;
