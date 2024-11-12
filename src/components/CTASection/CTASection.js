// CTASection.js
import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Start your free trial</h2>
      <p>Join over 4,000+ startups already growing with Untitled.</p>
      <div className="cta-buttons">
        <button className="learn-more-btn">Learn more</button>
        <button className="get-started-btn">Get started</button>
      </div>
    </section>
  );
};

export default CTASection;
