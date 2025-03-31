import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css'; // Import the CSS file

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <h1>ELIXIR IV</h1>
      <p>Your trusted partner for home-based IV therapy. We bring health and wellness to you.</p>
      <Button
        href="/contact"
        variant="outline-light"
        className="hero-button"
      >
        Schedule Your Appointment
      </Button>
    </div>
  );
};

export default HeroSection;
