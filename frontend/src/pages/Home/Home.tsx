import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from '../../components/HeroSection/HeroSection';
import IVRecommendationPrompt from '../../components/IVRecommendationPrompt/IVRecommendationPrompt';
import NeedleFearHighlight from '../../components/NeedleFearHighlight/NeedleFearHighlight';
import TherapyOptions from '../../components/TherapyOptions/TherapyOptions';
import { options } from '../../assets/static/TherapyOptions/TherapyOptions';
import Seo from '../../components/Seo/Seo';

const Home: React.FC = () => {
  return (
    <div>
      <Seo
        title="Home - Elixir IV"
        description="Welcome to Elixir IV, your go-to for mobile IV therapy services."
        schemaData={{
          "@type": "HomePage",
          "name": "Home - Elixir IV",
          "description": "Welcome to Elixir IV, your go-to for mobile IV therapy services.",
          "url": "https://elixirivtherapy.com/"
        }}
      />
      <section className="hero-section">
        <HeroSection />
      </section>

      <section className="therapy-options">
        <Container>
          <Row>
            <Col md={12}>
            <TherapyOptions options={options} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fear-container">
        <NeedleFearHighlight />
      </section>

      <section className="iv-prompt-section">
        <IVRecommendationPrompt />
      </section>
    </div>
  );
};

export default Home;
