import React, { useState } from "react";
import { FaHandshake, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Reusing CSS file for consistent styling

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in...");

      
      const response = await axios.get(
        "https://assignment1-fe4ec-default-rtdb.firebaseio.com/assignmentTable.json"
      );

      const users = response.data;
      let isValidUser = false;

      for (let key in users) {
        if (
          users[key].Email === loginData.Email &&
          users[key].Password === loginData.Password
        ) {
          isValidUser = true;
          break;
        }
      }

      if (isValidUser) {
        alert("Login successful!");
        navigate("/"); 
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
    
      <header className="header">
        <div className="left">
          <FaHandshake className="icon" />
          <span>FinanceKYC</span>
        </div>
        <div className="center">Login to Your Account</div>
        <div className="right">
          <FaPhone className="icon" />
          <span>Support</span>
        </div>
      </header>

      {/* Centered Login Form */}
      <div className="login-container">
        <div className="login-box">
          <h2 className="log">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="Email"
                value={loginData.Email}
                onChange={changeHandler}
                className="inp"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="Password"
                value={loginData.Password}
                onChange={changeHandler}
                className="inp"
                required
              />
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
