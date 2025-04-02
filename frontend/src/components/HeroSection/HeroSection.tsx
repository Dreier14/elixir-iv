import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaSms, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'; 
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="image-band">
        <img src="/images/ElixirIVLogo.png" alt="Elixir IV Logo" className="hero-logo" />
      </div>
      <Container className="text-center text-button-group">
        <Row className="justify-content-center">
          <Col lg={8} sm={10}>
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
        <Row className="justify-content-center mt-3">
          <Col xs={12} md="auto">
            <Button href="sms:+14804204359" variant="outline-light" className="hero-button w-100 w-md-auto">
              <FaSms /> Text Us
            </Button>
          </Col>
          <Col xs={12} md="auto" className="mt-2 mt-md-0">
            <Button href="tel:+14804204359" variant="outline-light" className="hero-button w-100 w-md-auto">
              <FaPhoneAlt /> Call Us 
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <p className="mb-2" style={{ color: 'white' }}>Follow us for wellness tips</p>
            <div className="hero-social-links">
              <a href="https://www.instagram.com/elixirivtherapy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon me-3" />
              </a>
              <a href="https://www.facebook.com/share/1ACpaBPJkc/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="social-icon me-3" />
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="social-icon me-3" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
