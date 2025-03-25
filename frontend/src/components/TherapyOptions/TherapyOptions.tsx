import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TherapyOptions.css';

// Define a type for the infusion options data
interface InfusionOption {
  title: string;
  description: string;
  imageUrl: string;
  includes: string[];
  cost: string;
  path: string;
}

// Ensure the `options` prop is properly typed as an array of `InfusionOption`
interface TherapyOptionsProps {
  options: InfusionOption[];  // This ensures options is an array
}

const TherapyOptions: React.FC<TherapyOptionsProps> = ({ options }) => {
  const navigate = useNavigate();

  const handleSelectService = (title: string) => {
    navigate(`/contact?service=${encodeURIComponent(title)}`);
  };

  return (
    <div style={{ flex: 1 }}>
      <h2 className="mt-4" style={{ textAlign: 'center', color: '#E4B7C2', marginBottom: '40px' }}>
        Our IV Therapy Options
      </h2>

      <Row className="card-row mb-4">
        {options.map((option, index) => (
          <Col lg={4} md={6} sm={12} xs={12} key={index} className="d-flex mx-auto">
            <Card className="mb-4 card-container w-100 d-flex flex-column">
              <Card.Img variant="top" className="card-img" src={option.imageUrl} />
              <Card.Body className="d-flex flex-column">
                <div>
                  <Card.Title style={{ color: '#E4B7C2' }}>{option.title}</Card.Title>
                  <Card.Text className="card-text">{option.description}</Card.Text>
                </div>
                <div className="card-includes mt-4">
                  <strong>Includes:</strong>
                  <ul>
                    {option.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">
                <div className="mb-2">{option.cost}</div>
                <Button
                  style={{ backgroundColor: '#E4B7C2', border: 'none' }}
                  onClick={() => handleSelectService(option.title)}
                >
                  Select This Service
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
