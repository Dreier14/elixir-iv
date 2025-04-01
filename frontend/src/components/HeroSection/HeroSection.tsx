import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <h1 style={{color: "#FFF6F5"}}>ELIXIR IV</h1>
      <div className="image-band">
        <img src="/images/ElixirIVLogo.png" alt="Elixir IV Logo" className="hero-logo" />
      </div>
      <div className="text-button-group">
        <p>Your trusted partner for home-based IV therapy. We bring health and wellness to you.</p>
        <Button
          href="/contact"
          variant="outline-light"
          className="hero-button"
          style={{color: "#FFF6F5"}}
        >
          Schedule Your Appointment
        </Button>
      </div>
    </div>
  );
};


export default HeroSection;
