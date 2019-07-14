import React from 'react';
import './App.css';
import HeaderSection from './HeaderSection.js';
import WorkSection from './WorkSection.js';
import AboutSection from './AboutSection.js';
import CoffeeSection from './CoffeeSection.js';
import FooterSection from './FooterSection.js';

function App() {
  return (
    <div>
      <HeaderSection />
      <WorkSection />
      <AboutSection />
      <CoffeeSection />
      <FooterSection />

      {/*
          <SideNavbar />
        */}
    </div>
  );
}

export default App;
