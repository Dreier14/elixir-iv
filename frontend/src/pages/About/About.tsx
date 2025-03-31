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
    <div style={{ flex: 1 }}>
      {/* <Seo
        title="About - Elixir IV"
        description="Learn more about Elixir IV for mobile IV therapy services."
        schemaData={{
          "@type": "AboutPage",
          "name": "About - Elixir IV",
          "description": "Learn more about Elixir IV for mobile IV therapy services.",
          "url": "https://elixirivtherapy.com/about"
        }}
      /> */}
      <h1
        className="mt-4"
        style={{ textAlign: 'center', color: '#D8A7B1', marginBottom: '40px' }}
      >
        About Us
      </h1>
      <Container>
      <Row className="card-row">
        {data.map((item, index) => (
          <Col md={4} sm={12} className="animate-fade-in" key={index}>
            <Card className="mb-4 card-container">
              <Card.Body className="card-body">
                <Card.Title style={{ color: '#D8A7B1'}}>{item.title}</Card.Title>
                <Card.Img variant="top" className="card-img" src={item.imageUrl} />
                <Card.Text className='mt-4'>{item.text}</Card.Text>
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
