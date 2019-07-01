import React from 'react';
import './App.css';
import HeaderSection from './HeaderSection.js';
import WorkSection from './WorkSection.js';
import AboutSection from './AboutSection.js';
import CoffeeSection from './CoffeeSection.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <HeaderSection />
      <WorkSection />
      <AboutSection />
      <CoffeeSection />

      {/*
          <SideNavbar />
        */}
    </div>
  );
}

export default App;
