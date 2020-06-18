import React, { Component } from 'react'
import instagramIcon from '../images/instagram-icon.svg';
import githubIcon from '../images/github-icon.svg';
import linkedinIcon from '../images/linkedin-icon.svg';
import logo from '../images/logo.svg';
import twitterIcon from '../images/twitter-icon.svg';
import resume from '../images/resume_coraxyc_2020.pdf';
import { Link } from 'react-router-dom'
import './styles/sidenavbar.css';
class SideNavbar extends Component {
    render() {
        return (
            <div className="side-navbar">
                <div className="icon logo-icon">
                    <Link to="/">
                        <img src={logo} alt="logo" id="logo"/>
                    </Link>
                    coraxyc
                </div>
                <div className="bottom-icons">
                    <div className="icon">
                        <a href={resume} className="no-decoration" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
  
                        <a href="#coffee" className="no-decoration">
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