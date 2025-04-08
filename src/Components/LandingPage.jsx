import React from "react";
import "./LandingPage.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import ChooseUs from "./ChooseUs";
import Current from "./Current";
import Testmonials from "./Testmonials";
import Frequent from "./Frequent";
import Footer from "./Footer";
 

const LandingPage = () => {
  return (
    <>
      <NavBar />
      
      <section id="hero">
        <Hero />
      </section>
      <section id="choose-us">
        <ChooseUs />
      </section>
      <Current />
      <section id="testimonials">
        <Testmonials />
      </section>
      <section id="frequent">
        <Frequent />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
