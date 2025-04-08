import React from "react";
import "./Frequent.css";

const Frequent = () => {
  return (
    <div className="frequent-container">
      {/* Left Section */}
      <div className="faq-left">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our investment platform.</p>
      </div>

      {/* Right Section - FAQ List */}
      <div className="faq-right">
        <div className="faq-box">
          <h3>How do I start investing?</h3>
          <p>You can start by signing up, linking your bank account, and choosing your investment plan.</p>
        </div>

        <div className="faq-box">
          <h3>Is my money safe on this platform?</h3>
          <p>Yes, we use bank-grade encryption and security measures to protect your investments.</p>
        </div>

        <div className="faq-box">
          <h3>What are the withdrawal options?</h3>
          <p>You can withdraw funds directly to your bank account with our quick withdrawal feature.</p>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
