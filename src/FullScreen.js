import React, { Component } from 'react'
import HeaderSection from './components/HeaderSection.js';
import WorkSection from './components/WorkSection.js';
import AboutSection from './components/AboutSection.js';
import CoffeeSection from './components/CoffeeSection.js';
import FooterSection from './components/FooterSection.js';
import SideNavBar from './components/SideNavbar.js';

function Home() {
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

export default Home;
