import React from "react";
import { FaChartBar, FaPoll, FaCircle } from "react-icons/fa"; // Importing icons
import "./Current.css";

const Current = () => {
  return (
    <div className="current-container">
 
      <div className="stats-container">
        <div>
          <h1>10B+</h1>
          <p>Assets Managed</p>
        </div>
        <div>
          <h1>1M+</h1>
          <p>Active Users</p>
        </div>
        <div>
          <h1>99.9%</h1>
          <p>Uptime</p>
        </div>
      </div>

 
      <div className="icons-container">
        <div>
          <FaChartBar className="icon" />
          <span> Invest Wise</span>
        </div>
        <div>
          <FaPoll className="icon" />
         <span> Invest Wise</span>
        </div>
        <div>
          <FaCircle className="icon" />
          <span className="para"> Invest Wise</span>
        </div>
      </div>
    </div>
  );
};

export default Current;
