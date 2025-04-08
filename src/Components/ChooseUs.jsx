import React from "react";
import { FaFileAlt, FaShieldAlt, FaBolt } from "react-icons/fa"; // Importing icons
import "./ChooseUs.css"; 

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <h1 className="choose-us-title">Why Choose Us</h1>
      
      <div className="choose-us-boxes">
        
        <div className="choose-box">
          <FaFileAlt className="choose-icon" /> {/* File Icon */}
          <h2>Easy Investment</h2>
          <p>Start investing with as little as 100₹.
          Simple, transparent process.</p>
        </div>

        
        <div className="choose-box">
          <FaShieldAlt className="choose-icon" /> {/* Security Icon */}
          <h2>Bank-Grade Security</h2>
          <p>Your investments are protected by state-of-the-art security systems.</p>
        </div>

      
        <div className="choose-box">
          <FaBolt className="choose-icon" /> {/* Flash Icon */}
          <h2>Quick Withdrawals</h2>
          <p>Access your funds quickly with same-day withdrawal processing.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
