import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactCss.css';  // Import the CSS file

const ContactPage = () => {
  return (
    // Main container for the contact page
    <div className="contact-page">
      {/* Container for the contact content, ensuring it's centered and takes up remaining space */}
       {/* Centered text for the headings */}
       <div className="centered-text">
          <h2>Contact Me</h2>
          <h4>Get In Touch</h4>
        </div>
      <Container fluid="md" className="contact-content">
        {/* Flex container to position contact details and form side by side */}
        <div className="side-by-side">
          {/* Row for the contact details */}
          <Row className="my-contact-details">
            {/* Column for the phone number */}
            <Col md={12} className="info-item rounded-box">
              <FaPhone />
              <span>07845001675</span>
            </Col>
            {/* Column for the email address */}
            <Col md={12} className="info-item rounded-box">
              <FaEnvelope />
              <span>pa@gmail.com</span>
            </Col>
            {/* Column for the location */}
            <Col md={12} className="info-item rounded-box">
              <FaMapMarkerAlt />
              <span>London</span>
            </Col>
          </Row>
          {/* Form for the contact messages */}
          <div className="contact-form">
            <Form>
              {/* Form group for the name input */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              {/* Form group for the email input */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              {/* Form group for the message textarea */}
              <Form.Group className="mb-3 message-group" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              {/* Submit button for the form */}
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
