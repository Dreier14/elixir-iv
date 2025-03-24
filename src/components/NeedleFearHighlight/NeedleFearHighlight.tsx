import React from 'react';
import { Container } from 'react-bootstrap';
import './NeedleFearHighlight.css'; // Assuming you are using a CSS file for custom styling

const NeedleFearHighlight: React.FC = () => {
  return (
    <div className="fear-container py-5 text-center">
      <Container>
        <h2 className="fear-title">Needle Anxiety? We’re Here for You.</h2>
        <p className="fear-text">
          At our clinic, we understand that the idea of needles can be intimidating. Our team of highly trained professionals specializes in performing needle insertions with precision and care. We are committed to making your experience as comfortable and seamless as possible.
        </p>
        <p className="fear-text">
          Whether you visit us in our clinic or prefer the convenience of having a skilled nurse come directly to you, we ensure that your treatment is delivered with the utmost professionalism and attention to detail. Your comfort and safety are our top priorities.
        </p>
      </Container>
    </div>
  );
};

export default NeedleFearHighlight;
