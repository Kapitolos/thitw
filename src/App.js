import React, { useState } from 'react';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import VerticalColumn from './components/VerticalColumn'; 
import './App.css';

function App() {
  const [showMenuSection, setShowMenuSection] = useState(''); // Initialize with an empty string
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleShowMenu = () => setShowMenuSection('appetizers'); // Directly open the Appetizers section

  const handleCloseMenuSection = () => setShowMenuSection(''); // Reset to hide menu

  const handleShowAbout = () => setShowAbout(true);
  const handleCloseAbout = () => setShowAbout(false);

  const handleShowContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <div className="App">
      <NavigationBar 
        onMenuClick={handleShowMenu} 
        onAboutClick={handleShowAbout} 
        onContactClick={handleShowContact} 
      />
      <div className="main-layout">
        <VerticalColumn /> 
        <div className="content-area">
          <Hero onMenuClick={handleShowMenu} onAboutClick={handleShowAbout} />
        </div>
      </div>
      {/* Directly display the MenuSection component when 'appetizers' is selected */}
      {showMenuSection === 'appetizers' && (
        <MenuSection 
          show={true} 
          handleClose={handleCloseMenuSection} 
          section="appetizers" 
        />
      )}
      <AboutUs show={showAbout} handleClose={handleCloseAbout} />
      <ContactUs show={showContact} handleClose={handleCloseContact} />
    </div>
  );
}

export default App;
