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
    <div style={{backgroundColor: "#FFF6F5" }}>
      <Seo
        title="Mobile IV Therapy in Phoenix, Scottsdale & Tempe - Elixir IV"
        description="Experience top-rated mobile IV therapy in Phoenix, Scottsdale, and Tempe. Our hydration and wellness treatments include NAD+, Myers' Cocktail, and Hangover Relief IVs."
        keywords="mobile IV therapy Phoenix, Scottsdale IV hydration, Tempe IV therapy, NAD+ IV drip, Myers' Cocktail IV, hangover IV Scottsdale, hydration therapy Phoenix"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Elixir IV",
          "description": "Premium mobile IV therapy services in Phoenix, Scottsdale, and Tempe. Specializing in hydration therapy, vitamin infusion, and wellness IV drips.",
          "url": "https://elixirivtherapy.com/",
          "serviceArea": [
            { "@type": "City", "name": "Phoenix" },
            { "@type": "City", "name": "Scottsdale" },
            { "@type": "City", "name": "Tempe" }
          ],
          "offers": {
            "@type": "Offer",
            "name": "Mobile IV Therapy",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-480-420-4359",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          }
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
