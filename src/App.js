import React, { useState } from 'react';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import VerticalColumn from './components/VerticalColumn';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionChange = (section) => setActiveSection(section);
  const handleClose = () => setActiveSection('');

  return (
    <div className="App">
      <NavigationBar
        onMenuClick={() => handleSectionChange('menu')}
        onAboutClick={() => handleSectionChange('about')}
        onContactClick={() => handleSectionChange('contact')}
      />
      <div className="main-layout">
        <VerticalColumn />
        <div className="content-area">
          <Hero onMenuClick={() => handleSectionChange('menu')} />
        </div>
      </div>
      {activeSection === 'menu' && (
        <MenuSection show={true} handleClose={handleClose}/>
      )}
      {activeSection === 'about' && <AboutUs show={true} handleClose={handleClose} />}
      {activeSection === 'contact' && <ContactUs show={true} handleClose={handleClose} />}
    </div>
  );
}

export default App;
