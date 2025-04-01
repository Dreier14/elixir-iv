import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPhoneAlt, FaSms } from 'react-icons/fa'; 
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="image-band">
        <img src="/images/ElixirIVLogo.png" alt="Elixir IV Logo" className="hero-logo" />
      </div>
      <div className="text-button-group">
        <h1 style={{color: "#FFF6F5", fontSize: '42px'}}>Mobile IV Therapy in Scottsdale, Tempe & Phoenix</h1>
        <div style={{ width: '75%', margin: 'auto' , textAlign:'left'}}>
          <p>Get the best hydration, vitamin, and wellness IV treatments delivered to your door. Whether you need a NAD+ infusion, a Hangover Relief IV, or a Myers' Cocktail and more, we've got you covered. Your trusted partner for home-based IV therapy. We bring health and wellness to you.</p>
        </div>

        {/* Button Group */}
        <div className="button-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          <Button href="sms:+14804204359" variant="outline-light" className="hero-button" style={{ color: "#FFF6F5" }}>
            <FaSms />Text Us
          </Button>
          <Button href="tel:+14804204359" variant="outline-light" className="hero-button" style={{ color: "#FFF6F5" }}>
            <FaPhoneAlt /> Call Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
