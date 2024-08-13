import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hero({ onMenuClick, onAboutClick }) {  // Ensure onAboutClick is being received here
  return (
    <div>
      <Container>
        <div className="overlay-footer">
          <Row>
            {/* <Col md={4} className="overlay-col" onClick={onAboutClick}>
              <h2>About Us</h2>
              <p>Discover our story</p>
              <img src="/drink.jpg" alt="About Us" className="img-fluid" />
            </Col> */}
            <Col md={4} className="overlay-col" onClick={onMenuClick}>
              <h2>Menu</h2>
              <p>Explore our selection of dishes and drinks</p>
              <img src="/pizza.jpg" alt="Menu" className="img-fluid" />
            </Col>
            {/* <Col md={4} className="overlay-col">
              <h2>Bothams</h2>
              <p>Check out next door</p>
              <img src="/bothams.jpg" alt="Bothams" className="img-fluid" />
            </Col> */}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
