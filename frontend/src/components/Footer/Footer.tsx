// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#E4B7C2', color: 'white' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={{ color: '#ffffff' }}>ELIXIR IV</h5>
            <p style={{  color: '#ffffff'  }}>
              Your health and wellness, delivered to your door. Professional IV therapy, at your convenience.
            </p>
          </Col>
          <Col md={6}>
            <h5 style={{ color: '#ffffff' }}>Contact Us</h5>
            <p style={{  color: '#ffffff' }} >
              Email: 
              <a style={{
                  textDecoration: 'none', 
                  color: 'white'
                }} href="mailto:elixirinfusiontherapy@gmail.com"
              >elixirinfusiontherapy@gmail.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
