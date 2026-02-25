import React, { useState, useEffect } from 'react';
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

  // Compensate for scrollbar width when modals open to prevent layout shift
  useEffect(() => {
    const handleModalOpen = () => {
      if (document.body.classList.contains('modal-open')) {
        // Calculate scrollbar width before it disappears
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
          // Add padding equal to scrollbar width to maintain layout
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
      } else {
        // Remove padding when modal closes
        document.body.style.paddingRight = '';
      }
    };

    // Watch for modal-open class on body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          handleModalOpen();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Check initial state
    handleModalOpen();

    return () => {
      observer.disconnect();
      // Clean up on unmount
      document.body.style.paddingRight = '';
    };
  }, []);

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
