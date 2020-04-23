import React from 'react'
import HeaderSection from './HeaderSection.js';
import ProjectSection from './ProjectSection.js';
import AboutSection from './AboutSection.js';
import CoffeeSection from './CoffeeSection.js';
import FooterSection from './FooterSection.js';
import SideNavBar from './SideNavbar.js';
import HiddenMobile from './HiddenMobile';

const Home = () => (
    <>
        <div className="mobile-hidden big-layout">
          <SideNavBar />
          <div className="layout">
            
            <HeaderSection />
            <ProjectSection />
            <AboutSection />
            <CoffeeSection />
            <FooterSection />
          </div>
        </div>
        <HiddenMobile />
    </>
);

export default Home;
