import React from "react";
import "./Testimonials.css";
import sarahImage from "../assets/Images/testimonial_1.jpg";
import michaelaImage from "../assets/Images/testimonial_2.jpg"; // Add correct image name
import davidImage from "../assets/Images/testimonial_3.jpg"; // Add correct image name

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="title">What Our Users Say</h1>

      {/* Wrapper to align testimonials in a row */}
      <div className="testimonials-wrapper">
        <div className="testimonial-box">
          <img src={sarahImage} alt="Sarah Johnson" className="profile-pic" />
          <div className="testimonial-content">
            <div className="user-info">
              <h2>Sarah Johnson</h2>
              <p className="profession">Tech Professional</p>
            </div>
            <p className="description">
              The platform made investing accessible and straightforward for me.
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <div className="testimonial-box">
          <img src={michaelaImage} alt="Michaela Chen" className="profile-pic" />
          <div className="testimonial-content">
            <div className="user-info">
              <h2>Michaela Chen</h2>
              <p className="profession">Entrepreneur</p>
            </div>
            <p className="description">
              An easy-to-use platform with excellent support!
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <div className="testimonial-box">
          <img src={davidImage} alt="David Smith" className="profile-pic" />
          <div className="testimonial-content">
            <div className="user-info">
              <h2>David Smith</h2>
              <p className="profession">Investor</p>
            </div>
            <p className="description">
              I trust this platform with my investments, and it hasn’t let me down.
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
