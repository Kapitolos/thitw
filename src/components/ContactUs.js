import React, { useState } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

function ContactUs({ show, handleClose }) {
  const [showMap, setShowMap] = useState(false);

  const handleMapClose = () => setShowMap(false);
  const handleMapShow = () => setShowMap(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <button type="button" className="custom-close-button" onClick={handleClose}>
            &times;
          </button>
        </Modal.Header>
        <Modal.Body>
          <Container id="contactContainer">
            <Row>
              <Col md={12}>
                <h4>Get in Touch</h4>
                <p>
                  Address: 2867A Dundas St W, Toronto<br/>
                  Phone: 416-760-7041<br/>
                  Email: theholeinthewallto@gmail.com
                </p>
                <a href= {"https://maps.app.goo.gl/5JiDPQqDvjNDMuzw7"} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/map2.jpg`}
                  alt="Map"
                  className="img-fluid sm"
                  style={{ cursor: 'pointer' }}
                />
              </a>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <Modal show={showMap} onHide={handleMapClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={`${process.env.PUBLIC_URL}/map.jpg`} alt="Map" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactUs;


