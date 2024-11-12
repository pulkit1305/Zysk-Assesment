// BlogSection.js
import React from "react";
import "./BlogSection.css";

import blogimg1 from "../../assets/blogimg1.png";
import blogimg2 from "../../assets/blogimg2.png";
import blogimg3 from "../../assets/blogimg3.png";
import icon from "../../assets/Icon.png";
const BlogSection = () => {
  return (
    
    <div className="blog-section">
      <div className="blog-header">
        <h2>Our blog</h2>
        <h1>Latest blog posts</h1>
        <p>
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <button className="view-all-btn">View all posts</button>
      </div>
      <div className="blog-posts">
        <div className="post">
          <div className="post-image ux-image" />
          <div className="post-content">
            <p className="category">Design</p>
            <h3 className="heading-with-icon">
              UX review presentations
              <img src={icon} alt="Icon" className="post-icon" />
            </h3>
            <p className="description">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="author-info">
              <img src={blogimg1} alt="Author" />
              <div>
                <p>Olivia Rhye</p>
                <p>20 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post-image product-image" />
          <div className="post-content">
            <p className="category">Product</p>
            <h3 className="heading-with-icon">
              Migrating to Linear 101
              <img src={icon} alt="Icon" className="post-icon" />
            </h3>
            <p className="description">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here's how to get started.
            </p>
            <div className="author-info">
              <img src={blogimg2} alt="Author" />
              <div>
                <p>Phoenix Baker</p>
                <p>19 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post-image api-image" />
          <div className="post-content">
            <p className="category">Software Engineering</p>
            <h3 className="heading-with-icon">
              Building your API stack
              <img src={icon} alt="Icon" className="post-icon" />
            </h3>
            <p className="description">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>
            <div className="author-info">
              <img src={blogimg3} alt="Author" />
              <div>
                <p>Lana Steiner</p>
                <p>18 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
