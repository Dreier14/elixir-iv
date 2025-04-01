import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaSms } from 'react-icons/fa';
import './TherapyOptions.css';

// Define a type for the infusion options data
interface InfusionOption {
  title: string;
  description: string;
  imageUrl: string;
  includes: string[];
  cost: string;
  path: string;
  alt: string;
}

// Ensure the `options` prop is properly typed as an array of `InfusionOption`
interface TherapyOptionsProps {
  options: InfusionOption[];  // This ensures options is an array
}

const TherapyOptions: React.FC<TherapyOptionsProps> = ({ options }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the code is running in the browser (client-side)
    setIsClient(typeof window !== 'undefined');
  }, []);

  const handleSelectService = (title: string) => {
    if (isClient) {
      const message = `Hello, I'm interested in the ${title} IV therapy!`;
      const phoneNumber = '+14804204359';
      const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

      // Only execute this code in the client (browser)
      window.location.href = smsLink;
    }
  };

  return (
    <div style={{ flex: 1 }}>
      <h1 className="mt-4" style={{ textAlign: 'center', color: '#E4B7C2', marginBottom: '40px', fontSize: '42px' }}>
        Our IV Therapy Options
      </h1>

      <Row className="card-row mb-4">
        {options.map((option) => (
          <Col lg={4} md={6} sm={12} xs={12} key={option.title} className="d-flex mx-auto">
            <Card className="mb-4 card-container w-100 d-flex flex-column">
              <Card.Img variant="top" className="card-img" style={{ height: "450px" }} src={option.imageUrl} alt={option.alt} />
              <Card.Body className="d-flex flex-column" style={{ backgroundColor: '#E4B7C2' }}>
                <div>
                  <Card.Title style={{ color: '#E4B7C2', fontSize: '32px' }}>{option.title}</Card.Title>
                  <Card.Text className="card-text" style={{ color: "#FFF6F5" }}>{option.description}</Card.Text>
                </div>
                <div className="card-includes mt-4">
                  <strong style={{ color: "#FFF6F5" }}>Includes:</strong>
                  <ul style={{ color: "#FFF6F5" }}>
                    {option.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
              <Card.Footer className="text-center" style={{ backgroundColor: '#E4B7C2', borderTop: 'none' }}>
                <div className="mb-1 mt-1" style={{ color: "#FFF6F5" }}><strong>{option.cost}</strong></div>
                <Button
                  variant="outline-light"
                  className="hero-button"
                  style={{ color: "#FFF6F5", marginBottom: '10px' }}
                  onClick={() => handleSelectService(option.title)}
                >
                  <FaSms /> Select This Service
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TherapyOptions;
