import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      {/* Render the icon as an image */}
      <div className="feature-icon">
        <img src={icon} alt={title} className="feature-image" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default FeatureCard;
