import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>
              <a href="sms:14804204359" aria-label="Send us a text message" className="footer-link">
                <strong>Text Us</strong>
              </a>
            </p>
            <p>
              <a href="tel:14804204359" aria-label="Call us for mobile IV therapy" className="footer-link">
                <strong>Call Us</strong>
              </a>
            </p>
            <p>
              <a href="mailto:elixirinfusiontherapy@gmail.com" aria-label="Email us for IV therapy services" className="footer-link">
                <strong>Email Us</strong>
              </a>
            </p>
            <div className="social-links mt-3">
              <a href="https://www.instagram.com/elixirivtherapy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon me-3" />
              </a>
              <a href="https://www.facebook.com/share/1ACpaBPJkc/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="social-icon me-3" />
              </a>
              <a href="https://youtube.com/elixirivtherapy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="social-icon me-3" />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <p className="footer-description mt-2">
              <strong>Mobile IV Therapy</strong> in Scottsdale, Tempe, Chandler, Gilbert, Phoenix & Mesa. Get hydration, wellness, and vitamin therapy delivered to your home.
            </p>
            <h5 className="footer-title">ELIXIR IV</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;