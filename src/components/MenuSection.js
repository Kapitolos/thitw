import React, { useState, useEffect } from 'react';
import { Modal, Container, Tabs, Tab, Button, Collapse } from 'react-bootstrap';

function MenuSection({ show, handleClose, section }) {
  const [key, setKey] = useState("appetizers");
  const [openItems, setOpenItems] = useState({}); // Object to track open states
  const [menu, setMenu] = useState([]);

  
  // useEffect(() => {
  //   fetch(`${process.env.PUBLIC_URL}/menu.json`)
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data[section] || []))
  //     .catch((err) => console.error("Error loading menu:", err));
  // }, [section]);



  // Function to fetch menu data
  const fetchMenuData = async (selectedSection) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/menu.json`); // Adjust as needed
      const data = await response.json();
      setMenu(data[selectedSection] || []); // Update menu state
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  // Fetch initial menu data when modal opens
  useEffect(() => {
    if (show) {
      fetchMenuData(key);
    }
  }, [show, key]);

  // Toggle description visibility
  const toggleDescription = (itemName) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName], // Toggle state for the specific item
    }));
  };

  const renderMenuItems = () => (
    <ul className="list-unstyled">
      {menu.map((item, index) => (
        <li key={index} className="mb-1">
          <Button
            variant="link"
            onClick={() => toggleDescription(item.name)}
            className="text-decoration-none"
          >
            {item.name} - {item.price}
          </Button>
          <Collapse in={openItems[item.name]}>
            <div className="mt-1 text-center w-90 p-1">{item.description}</div>
          </Collapse>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered className="menu-modal">
      <Modal.Header>
        <button type="button" className="custom-close-button" onClick={handleClose}>
          &times;
        </button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <p className="select-dish-text">Select a dish for details</p>
          <Tabs
            id="menu-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="appetizers" title="Appetizers">
              {key === 'appetizers' && renderMenuItems()}
            </Tab>
            <Tab eventKey="pizzas" title="Pizzas">
              {key === 'pizzas' && renderMenuItems()}
            </Tab>
            <Tab eventKey="dinner" title="Dinner">
              {key === 'dinner' && renderMenuItems()}
            </Tab>
            <Tab eventKey="dessert" title="Dessert">
              {key === 'dessert' && renderMenuItems()}
            </Tab>
            <Tab eventKey="specials" title="Specials">
              {key === 'specials' && renderMenuItems()}
            </Tab>
          </Tabs>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default MenuSection;
