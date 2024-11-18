import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS
import './ContactCss.css';  // Import the CSS file
import zenMountain from "../../images/coolWAll.jpeg";

const ContactPage = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ceutald', 'template_heywaom', e.target, 'USBsDUXAiEaDR-nEk')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="contact-page">
       <header className="contact-full-width-header">
       <div className="centered-text">
          <h2>Contact Me</h2>
          <h4>Get In Touch</h4>
        </div>
          <div className="contact-header-image">
            <img src={zenMountain} alt="Portfolio Background" />
          </div>
        </header>

      <Container fluid="md" className="contact-content">
        <div className="side-by-side">
          <Row className="my-contact-details">
            <Col md={12} className="info-item rounded-box">
              <FaPhone />
              <span>07787411549</span>
            </Col>
            <Col md={12} className="info-item rounded-box">
              <FaEnvelope />
              <span>pollyannaelston@gmail.com</span>
            </Col>
            <Col md={12} className="info-item rounded-box">
              <FaMapMarkerAlt />
              <span>London</span>
            </Col>
          </Row>

          <div className="contact-form">
            <Form onSubmit={sendEmail}> {/* Add onSubmit handler */}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email_id" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3 message-group" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} required />
              </Form.Group>
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
