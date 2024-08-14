import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

function ContactUs({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Contact Us</Modal.Title>
        <button type="button" className="custom-close-button" onClick={handleClose}>
          &times;
        </button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12}>
              <h4>Get in Touch</h4>
              <p>
                Address: 2867A Dundas St W, Toronto, ON M6P 1Y9<br/>
                Phone: +1 416-760-7041<br/>
                Email: theholeinthewallto@gmail.com
              </p>
              <img src="map.jpg" alt="Map" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ContactUs;
