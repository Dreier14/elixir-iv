import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaSms } from 'react-icons/fa';

import { IInfusionOption } from '../../interfaces/IInfusionOptions';

import './TherapyOptions.css';

// Ensure the `options` prop is properly typed as an array of `InfusionOption`
interface ITherapyOptionsProps {
  options: IInfusionOption[];  // This ensures options is an array
}

const TherapyOptions: React.FC<ITherapyOptionsProps> = ({ options }) => {
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
    <div className="therapy-options-container">
      <h1 className="therapy-options-title">Our IV Therapy Options</h1>
      <Row className="card-row mb-4">
        {options.map((option) => (
          <Col lg={4} md={6} sm={12} xs={12} key={option.title} className="d-flex mx-auto">
            <Card className="mb-4 card-container w-100 d-flex flex-column">
              <Card.Img variant="top" className="card-img" src={option.imageUrl} alt={option.alt} />
              <Card.Body className="d-flex flex-column card-body">
                <div>
                  <Card.Title className="card-title">{option.title}</Card.Title>
                  <Card.Text className="card-text">{option.description}</Card.Text>
                </div>
                <div className="card-includes">
                  <strong className="includes-title">Includes:</strong>
                  <ul className="includes-list">
                    {option.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
              <Card.Footer className="text-center card-footer">
                <div className="mb-1 mt-1 cost-text"><strong>{option.cost}</strong></div>
                <Button
                  variant="outline-light"
                  className="hero-button w-100"
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
