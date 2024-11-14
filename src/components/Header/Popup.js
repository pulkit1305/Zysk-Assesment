import React from "react";
import "./Popup.css";
import blogimg1 from "../../assets/pop.png";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-left">
        <div className="popup-item">
          <span className="popup-icon">📄</span>
          <div>
            <h4 className="popup-title">Blog</h4>
            <p className="popup-text">
              The latest industry news, updates and info.
            </p>
          </div>
        </div>
        <div className="popup-item">
          <span className="popup-icon">🌟</span>
          <div>
            <h4 className="popup-title">Customer stories</h4>
            <p className="popup-text">
              Learn how our customers are making big changes.
            </p>
          </div>
        </div>
        <div className="popup-item">
          <span className="popup-icon">🎥</span>
          <div>
            <h4 className="popup-title">Video tutorials</h4>
            <p className="popup-text">
              Get up and running on new features and techniques.
            </p>
          </div>
        </div>
      </div>
      <div className="popup-right">
        <img src={blogimg1} alt="Update" className="popup-image" />
        <h4 className="popup-update-title">We've just released an update!</h4>
        <p className="popup-update-text">
          Check out the all new dashboard view. Pages now load faster.
        </p>
        <div className="popup-footer">
          <span className="popup-dismiss-btn" onClick={onClose}>
            Dismiss
          </span>
          <a href="#changelog" className="popup-changelog">
            Changelog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
