import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaSms } from 'react-icons/fa'; 
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="image-band">
        <img src="/images/ElixirIVLogo.png" alt="Elixir IV Logo" className="hero-logo" />
      </div>

      <Container className="text-center text-button-group">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="hero-title">
              Mobile IV Therapy in Scottsdale, Tempe, Phoenix, Chandler, Gilbert & Mesa
            </h1>
            <p className="hero-text">
              Get the best hydration, vitamin, and wellness IV treatments delivered to your door in Scottsdale, Tempe, Phoenix, Chandler, Gilbert, and Mesa.
              Whether you need a NAD+ infusion, a Hangover Relief IV, or a Myers' Cocktail, we've got you covered.
              Your trusted partner for home-based IV therapy. We bring health and wellness to you.
            </p>
          </Col>
        </Row>

        {/* Button Group */}
        <Row className="justify-content-center mt-3">
          <Col md="auto">
            <Button href="sms:+14804204359" variant="outline-light" className="hero-button">
              <FaSms /> Text Us
            </Button>
          </Col>
          <Col md="auto">
            <Button href="tel:+14804204359" variant="outline-light" className="hero-button">
              <FaPhoneAlt /> Call Us 
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
