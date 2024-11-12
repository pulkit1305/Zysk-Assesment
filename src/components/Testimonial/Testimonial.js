import React from "react";
import "./Testimonial.css"; 
import Sisyphus from "../../assets/Sisyphus.png";
import Avatar from "../../assets/Avatar.png";
const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <img src={Sisyphus} alt="Sisyphus Logo" className="logo" />
          <h2>
            We've been using Untitled to kick-start every new project and can't
            imagine working without it.
          </h2>
        </div>
        <div className="testimonial-author">
          <div className="author-image">
            <img src={Avatar} alt="Candice Wu" />
          </div>
          <div className="author-details">
            <h4>Candice Wu</h4>
            <p>Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
