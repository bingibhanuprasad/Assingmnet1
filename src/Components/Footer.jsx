import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div>
          <h4>InvestWise</h4>
          <p>Making smart investing accessible to everyone through technology and transparency.</p>
        </div>

        <div>
          <h6>Company</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h6>Legal</h6>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Compliance</a></li>
          </ul>
        </div>

        <div>
          <h6>Resources</h6>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Invest Guide</a></li>
            <li><a href="#">Market Updates</a></li>
          </ul>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="footer-line" />

      {/* Social Media Icons */}
      <div className="footer-bottom">
        <p>© 2025 InvestWise. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
