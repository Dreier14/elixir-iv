import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo/Seo';
import './Error.css';

const Error: React.FC = () => {
  return (
    <div className="error-container">
      <Seo
        title="404 - Page Not Found | Elixir IV"
        description="Oops! The page you're looking for doesn't exist. Return to Elixir IV's homepage or explore our mobile IV therapy services in Scottsdale, Tempe, Chandler, Gilbert, Phoenix & Mesa."
        schemaData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "404 - Page Not Found",
          "description": "Oops! The page you're looking for doesn't exist. Return to Elixir IV's homepage or explore our mobile IV therapy services.",
          "mainEntity": {
            "@type": "MedicalBusiness",
            "name": "Elixir IV",
            "url": "https://elixirivtherapy.com/"
          }
        }}
      />

      <Container className="text-center">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="error-title">404 - Page Not Found</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} className="text-left">
            <p className="error-message">
              The page you're looking for doesn't exist. But don't worry, you can still find the best IV therapy in Scottsdale, Tempe, Chandler, Gilbert, Phoenix & Mesa.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col lg={6} className="text-center">
            <img src="/images/ElixirIVLogo.png" height={'30%'} alt="Elixir IV Logo" className="error-logo" />
          </Col>
        </Row>

        {/* Suggested Internal Links */}
        <Row className="justify-content-center mt-4">
          <Col md="auto">
            <Link to="/" className="error-link">Return to Home</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
