import React from 'react';
import HeaderSection from './HeaderSection.js';
import WorkSection from './WorkSection.js';
import AboutSection from './AboutSection.js';
import CoffeeSection from './CoffeeSection.js';
import FooterSection from './FooterSection.js';

function FullScreen() {
    return (
        <div class="mobile-hidden">
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

export default FullScreen;
