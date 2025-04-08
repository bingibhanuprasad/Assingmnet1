import React from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div>
      <nav className="navbar">
     
      <div className="logo">InvestWise</div>

    
      <div className="nav-links">
        <a onClick={() => scrollToSection("hero")}>About</a>
        <a onClick={() => scrollToSection("choose-us")}>Features</a>
        <a onClick={() => scrollToSection("testimonials")}>Testimonials</a>
        <a  onClick={() => scrollToSection("frequent")}>FAQs</a>

       <Link to="/login">Login</Link>
    

        <Link to="/signUp" className='signup-button'>Signup</Link>
      </div>
      
    </nav>
    </div>
  )
}

export default NavBar

// import React from "react";
// import "./NavBar.css";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="navbar">
//       <ul>
//         <li onClick={() => scrollToSection("hero")}>Home</li>
//         <li onClick={() => scrollToSection("choose-us")}>Why Choose Us</li>
//         <li onClick={() => scrollToSection("current")}>Current</li>
//         <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
//         <li onClick={() => scrollToSection("frequent")}>FAQ</li>
//         <li onClick={() => scrollToSection("footer")}>Contact</li>
//         <Link to="/login">Login</Link>
    

//            <Link to="/signUp" className='signup-button'>Signup</Link>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

