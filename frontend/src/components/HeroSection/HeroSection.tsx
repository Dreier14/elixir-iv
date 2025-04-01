import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <h1 style={{color: "#FFF6F5", fontSize: '52px'}}>ELIXIR IV</h1>
      <div className="image-band">
        <img src="/images/ElixirIVLogo.png" alt="Elixir IV Logo" className="hero-logo" />
      </div>
      <div className="text-button-group">
      <h1 style={{color: "#FFF6F5", fontSize: '42px'}}>Mobile IV Therapy in Scottsdale, Tempe & Phoenix</h1>
      <div style={{ width: '75%', margin: 'auto' , textAlign:'left'}}>
          <p>Get the best hydration, vitamin, and wellness IV treatments delivered to your door. Whether you need a NAD+ infusion, a Hangover Relief IV, or a Myers' Cocktail and more, we've got you covered. Your trusted partner for home-based IV therapy. We bring health and wellness to you.</p>
        </div>
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
