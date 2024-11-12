import React from "react";
import "./Learn.css";
import ms from "../../assets/ms.png";
import mobile from "../../assets/mobile.png";

// Import icons for the feature cards
import msg from "../../assets/msg.png"; // Replace with actual path
import light from "../../assets/light.png"; // Replace with actual path
import chart from "../../assets/chart-breakout-square.png"; // Replace with actual path

function Learn() {
  return (
    <div className="learn-section">
      <button className="features-button">Features</button>
      <h1 className="learn-main-title">
        Cutting-edge features for advanced analytics
      </h1>
      <p className="learn-subtitle">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="learn-image-container">
        <img src={ms} alt="Desktop analytics" className="learn-desktop-image" />
        <img
          src={mobile}
          alt="Mobile analytics"
          className="learn-mobile-image"
        />
      </div>

      <div className="learn-features-grid">
        <FeatureCards
          icon={msg}
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <FeatureCards
          icon={light}
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <FeatureCards
          icon={chart}
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
        />
      </div>
    </div>
  );
}

function FeatureCards({ icon, title, description }) {
  return (
    <div className="feature-card">
      {/* Render the icon as an image */}
      <div className="feature-icon">
        <img src={icon} alt={title} className="feature-image" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <a href="#" className="learn-more-link">
        Learn more →
      </a>
    </div>
  );
}

export default Learn;
