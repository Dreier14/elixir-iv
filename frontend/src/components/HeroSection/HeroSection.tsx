// src/components/HeroSection.tsx
import React from 'react';
import { Button } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#E4B7C2', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
      {/* <img src="/images/ElixirIVIcon.png"></img> */}
      <h1>ELIXIR IV</h1>
      <p>Your trusted partner for home-based IV therapy. We bring health and wellness to you.</p>
      <Button href="/contact" variant="outline-light" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
        Schedule Your Appointment
      </Button>
    </div>
  );
};

export default HeroSection;
