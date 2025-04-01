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
    <div style={{ flex: 1, backgroundColor: "#FFF6F5", width: "100%", minHeight: "100vh" }}>
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
      <h1 style={{ color: "#E4B7C2", margin: 0, fontSize: '52px', textAlign: "center" }}>About Us</h1>
      <Container className="mt-4">
        <Row className="card-row">
          {data.map((item, index) => (
            <Col md={4} sm={12} className="animate-fade-in" key={index}>
              <Card className="mb-4 card-container">
                <Card.Body className="card-body" style={{backgroundColor: '#E4B7C2', borderRadius: '5px' }}>
                  <Card.Title style={{ color: '#FFF6F5', fontSize: '32px' }}>{item.title}</Card.Title>
                  <Card.Img variant="top" className="card-img" style={{ height: "450px" }} src={item.imageUrl} />
                  <Card.Text className="mt-4"  style={{ color: '#FFF6F5' }}>{item.text}</Card.Text>
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
