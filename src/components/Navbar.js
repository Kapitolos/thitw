import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar({ onMenuClick, onAboutClick, onContactClick }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#about" onClick={onAboutClick}>About Us</Nav.Link>
          <Nav.Link href="#menu" onClick={onMenuClick}>Menu</Nav.Link>
          <Nav.Link href="#contact" onClick={onContactClick}>Contact Us</Nav.Link>
          <Nav.Link href="https://bothams.ca/" target="_blank">Bothams</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com/HoleInTheWallTO/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/theholeinthewallto" target="_blank">
            <i className="fab fa-instagram"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
