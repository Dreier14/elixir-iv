// src/pages/Contact/Contact.tsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="mt-6" style={{ textAlign: 'center', color: '#E4B7C2', marginBottom: '40px' }}>
        Contact Us
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{ color: '#E4B7C2' }}>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: '#E4B7C2' }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label style={{ color: '#E4B7C2' }}>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>

        <Button type="submit" style={{ backgroundColor: '#E4B7C2', border: 'none' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
