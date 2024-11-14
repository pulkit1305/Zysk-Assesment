import React, { useState, useRef } from "react";
import Popup from "./Popup";
import "./Header.css";
import blogimg1 from "../../assets/blogimg1.png";
import logomark from "../../assets/Logomark.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const productsRef = useRef(null);
  const resourcesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePopupToggle = (ref) => {
    const rect = ref.current.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="header">
      <div className="logo-nav">
        <div className="logo-section">
          <img src={logomark} alt="Logo" className="logo-icon" />
          <span className="logo-text">Untitled UI</span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a
            href="#"
            ref={productsRef}
            onClick={() => handlePopupToggle(productsRef)}
          >
            Products <span className="down-arrow">&#x25BC;</span>
          </a>
          <a
            href="#"
            ref={resourcesRef}
            onClick={() => handlePopupToggle(resourcesRef)}
          >
            Resources <span className="down-arrow">&#x25BC;</span>
          </a>
          <a href="#">Pricing</a>
        </nav>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className="user-profile">
        <img src={blogimg1} alt="User Profile" className="profile-picture" />
      </div>
      {isPopupOpen && (
        <div
          style={{
            position: "absolute",
            top: popupPosition.top,
            left: popupPosition.left,
          }}
        >
          <Popup onClose={() => setIsPopupOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
