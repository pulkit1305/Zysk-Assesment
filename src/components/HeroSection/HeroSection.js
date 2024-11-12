// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";
import img5 from "../../assets/img5.png";
import Icon1 from "../../assets/Icon1.png";
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-notification">
        <span className="new-feature">New feature</span>
        <span className="notification-text">
          Check out the team dashboard →
        </span>
      </div>

      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
      <p className="hero-subtitle">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="hero-buttons">
        <button className="btn btn-outline">
          <img src={Icon1} alt="Icon" className="post-icon" />
          Demo
        </button>
        <button className="btn btn-primary">Sign up</button>
      </div>

      <img src={img5} alt="User Profile" className="profile-image" />
    </section>
  );
}

export default HeroSection;
