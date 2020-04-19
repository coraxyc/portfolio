import React, { Component } from 'react'
import instagramIcon from '../images/instagram-icon.svg';
import githubIcon from '../images/github-icon.svg';
import linkedinIcon from '../images/linkedin-icon.svg';
import logo from '../images/logo.svg';
import twitterIcon from '../images/twitter-icon.svg';
import resume from '../images/resume_coraxyc_2020.pdf';


class SideNavbar extends Component {
    render() {
        return (
            <div className="side-navbar">
                <div className="icon logo-icon">
                    <a href="#home">
                        <img src={logo} alt="logo" id="logo"/>
                    </a>
                    coraxyc
                </div>
                <div className="bottom-icons">
                    <div className="icon">
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
  
                        <a href="#coffee">
                            Contact
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/coraxyc" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="github-icon" id="github-icon"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://linkedin.com/in/coraxyc/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="linkedin-icon" id="linkedin-icon"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com/coraxyc/" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="twitter-icon" id="twitter-icon"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://instagram.com/coraxyc/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="instagram-icon" id="instagram-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideNavbar