import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

function AboutUs({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered className="overlay-modal">
      <Modal.Header>
        <Modal.Title>About Us</Modal.Title>
        <button type="button" className="custom-close-button" onClick={handleClose}>
          &times;
        </button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <p>
              Nestled into the heart of the Junction, we're a cozy hideaway where you can unwind. The vibe is laid-back, with a carefully curated selection of craft beers, an extensive Scotch collection, a diverse wine list, and cocktails that range from classic to modern. Whether you’re catching up with friends or seeking a quiet corner to relax, our welcoming atmosphere and warm service make every visit memorable.              </p>
              <img src="hole.jpg" alt="About Us" className="img-fluid about-us-image" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AboutUs;
