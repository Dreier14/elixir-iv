import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './About.css'; // Make sure to add a custom stylesheet if needed
import Seo from '../../components/Seo/Seo';

interface AboutCardData {
  title: string;
  text: string;
  imageUrl: string;
}

interface AboutProps {
  data: AboutCardData[];
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div className="about-container">
      <Seo
        title="About - Elixir IV"
        description="Learn more about Elixir IV for mobile IV therapy services."
        schemaData={{
          "@type": "AboutPage",
          "name": "About - Elixir IV",
          "description": "Learn more about Elixir IV for mobile IV therapy services.",
          "url": "https://elixirivtherapy.com/about"
        }}
      />
      <h1 className="about-title">About Us</h1>
      <Container className="mt-4">
        <Row className="card-row">
          {data.map((item, index) => (
            <Col md={4} sm={12} className="animate-fade-in" key={index}>
              <Card className="mb-4 card-container">
                <Card.Img variant="top" className="card-img" style={{ borderRadius: '5px 5px 0px 0px' }} src={item.imageUrl} />
                <Card.Body className="card-body" style={{ borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="mt-4 card-text">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
