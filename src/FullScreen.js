import React from 'react';
import HeaderSection from './HeaderSection.js';
import WorkSection from './WorkSection.js';
import AboutSection from './AboutSection.js';
import CoffeeSection from './CoffeeSection.js';
import FooterSection from './FooterSection.js';
import SideNavBar from './SideNavbar.js';

function FullScreen() {
    return (
        <div className="mobile-hidden big-layout">
          <SideNavBar />
          <div className="layout">
            
            <HeaderSection />
            <WorkSection />
            <AboutSection />
            <CoffeeSection />
            <FooterSection />
          </div>
            
        {/*
          <SideNavbar />
        */}
    </div>
  );
}

export default FullScreen;
