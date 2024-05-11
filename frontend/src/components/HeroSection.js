import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image src="/src/assets/agri-home.jpg" />
      <h1>GREEN-GROW</h1>
      <h4>For Your Tomorrow's Agriculture</h4>
      <h4>Agri Connect & Fertilizer Distribution Tracking Platform</h4>

      <br></br>
      <br></br>
      <br></br>

      <p>Scroll down for more ...!</p>
      <div className="arrow">↓</div> {/* Unicode arrow */}
      
    </div>
  );
}

export default HeroSection;