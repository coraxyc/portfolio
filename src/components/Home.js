import React, { Component } from 'react'
import HeaderSection from './HeaderSection.js';
import ProjectSection from './ProjectSection.js';
import AboutSection from './AboutSection.js';
import CoffeeSection from './CoffeeSection.js';
import FooterSection from './FooterSection.js';
import SideNavBar from './SideNavbar.js';

function Home() {
    return (
        <div className="mobile-hidden big-layout">
          <SideNavBar />
          <div className="layout">
            
            <HeaderSection />
            <ProjectSection />
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

export default Home;
