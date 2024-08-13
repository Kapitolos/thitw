import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

function MenuSelector({ show, handleClose, onSelectSection }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered className="menu-selector-modal">
      <Modal.Header closeButton>
        <Modal.Title>Select Menu Section</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={4} className="menu-select-overlay-col" onClick={() => onSelectSection('appetizers')}>
              <h2>Appetizers</h2>
              <p>Start your meal with our delicious starters.</p>
              <img src="/apps.jpg" alt="Appetizers" className="img-fluid" />
            </Col>
            <Col md={4} className="menu-select-overlay-col" onClick={() => onSelectSection('pizzas')}>
              <h2>Pizzas</h2>
              <p>Our wood-fired pizzas with fresh ingredients.</p>
              <img src="/oven.jpg"  alt="Pizzas" className="img-fluid" />
            </Col>
            <Col md={4} className="menu-select-overlay-col" onClick={() => onSelectSection('dinner')}>
              <h2>Dinner</h2>
              <p>Hearty and flavorful dinner plates for every palate.</p>
              <img src="/dinner.jpg"  alt="Dinner" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <Col md={4} className="menu-select-overlay-col" onClick={() => onSelectSection('lunch')}>
              <h2>Lunch</h2>
              <p>Quick and satisfying meals for the midday break.</p>
              <img src="/wraps.jpg"  alt="Lunch" className="img-fluid" />
            </Col>
            <Col md={4} className="menu-select-overlay-col" onClick={() => onSelectSection('dessert')}>
              <h2>Dessert</h2>
              <p>Sweet treats to end your meal on a high note.</p>
              <img src="/dessert.jpg"  alt="Dessert" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default MenuSelector;

