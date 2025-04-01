import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaPaperPlane } from 'react-icons/fa';
import axios from "axios";

import { options } from "../../assets/static/TherapyOptions/TherapyOptions";

import "./Contact.css";
import Seo from "../../components/Seo/Seo";

const Contact: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedService = queryParams.get("service") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: selectedService,
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/sendMail`, formData);
      setResponseMessage("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "", service: "", phoneNumber: "" }); // Clear form after success
    } catch (error) {
      setResponseMessage("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <Container className="mt-4">
        <Seo
          title="Contact Us - Elixir IV"
          description="Get in touch with Elixir IV for mobile IV therapy services."
          schemaData={{
            "@type": "ContactPage",
            "name": "Contact Us - Elixir IV",
            "description": "Get in touch with Elixir IV for mobile IV therapy services.",
            "url": "https://elixirivtherapy.com/contact"
          }}
        />
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicService">
                <Form.Label>Select a Service</Form.Label>
                <Form.Control as="select" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  {options.map((option) => (
                    <option key={option.title} value={option.title}>
                      {option.title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : <>Submit <FaPaperPlane /></>}
                </Button>
              </div>
            </Form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
