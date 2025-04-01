// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#E4B7C2', color: 'white' }}>
      <Container>
        <Row>
        <Col md={6}>
            <p >
              <a href="sms:14804204359" style={{ color: '#FFF6F5', textDecoration: 'none' }}>
                <strong>Text Us</strong>
              </a>
            </p>
            <p >
              <a href="tel:14804204359" style={{ color: '#FFF6F5', textDecoration: 'none' }}>
                <strong>Call Us</strong>
              </a>
            </p>
            <p style={{  color: '#FFF6F5' }} >
              <a style={{
                  textDecoration: 'none', 
                  color: '#FFF6F5'
                }} href="mailto:elixirinfusiontherapy@gmail.com"
              >
                <strong>
                  Email Us
                </strong>
              </a>
            </p>
          </Col>
          <Col md={6}>
            <p style={{ color: '#FFF6F5', fontFamily: "system-ui" }}>Your trusted mobile IV therapy provider in Scottsdale, Tempe, Chandler, Gilbert, Phoenix & Mesa. Hydration, wellness, and vitamin therapy at your doorstep.</p>
            <h5 style={{ color: '#FFF6F5', fontFamily: "system-ui", letterSpacing: "5px"}}>ELIXIR IV</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
