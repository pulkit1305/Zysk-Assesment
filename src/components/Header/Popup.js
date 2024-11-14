import React from 'react';
import blogimg1 from '../../assets/blogimg1.png'; // Make sure this path is correct

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-links">
          <div className="popup-link">
            <span className="icon">📄</span>
            <div>
              <h4>Blog</h4>
              <p>The latest industry news, updates and info.</p>
            </div>
          </div>
          <div className="popup-link">
            <span className="icon">🌟</span>
            <div>
              <h4>Customer stories</h4>
              <p>Learn how our customers are making big changes.</p>
            </div>
          </div>
          <div className="popup-link">
            <span className="icon">🎥</span>
            <div>
              <h4>Video tutorials</h4>
              <p>Get up and running on new features and techniques.</p>
            </div>
          </div>
        </div>
        <div className="popup-update">
          <img src={blogimg1} alt="Update" className="update-image" />
          <div>
            <h4>We've just released an update!</h4>
            <p>Check out the all-new dashboard view. Pages now load faster.</p>
            <button onClick={onClose}>Dismiss</button>
            <a href="#changelog">Changelog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
