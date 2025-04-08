import React from 'react'
import './Hero.css';
const Hero = () => {
  return (
    <div className='landing-container'>
       <section className="hero-section">
     <h1>Invest Smarter, Grow Faster</h1>
     <p>Experience secure, smart investing. Start your journey to financial growth today.</p>
     <div className="buttons">
       <button className="start-investing">Start Investing</button>
       <button className="learn-more">Learn More →</button>
     </div>
     <button className="investment-toggle">Total Investments 10B+</button>
   </section>
    </div>
  )
}

export default Hero
