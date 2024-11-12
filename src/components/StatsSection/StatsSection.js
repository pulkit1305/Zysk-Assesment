import React from "react";
import "./StatsSection.css";
import boltshiftLogo from "../../assets/boltshift.png";
import lightboxLogo from "../../assets/lightbox.png";
import featherdevLogo from "../../assets/FeatherDev.png";
import spheruleLogo from "../../assets/Spherule.png";
import globalbankLogo from "../../assets/globalbank.png";
import nietzscheLogo from "../../assets/Nietzsche.png";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="text-container">
        <p className="hero-subtitle">Join 4,000+ companies already growing</p>
      </div>
      <div className="logo-container">
        <img src={boltshiftLogo} alt="Boltshift" className="logo" />
        <img src={lightboxLogo} alt="Lightbox" className="logo" />
        <img src={featherdevLogo} alt="FeatherDev" className="logo" />
        <img src={spheruleLogo} alt="Spherule" className="logo" />
        <img src={globalbankLogo} alt="GlobalBank" className="logo" />
        <img src={nietzscheLogo} alt="Nietzsche" className="logo" />
      </div>
     
    </section>
  );
};

export default StatsSection;
