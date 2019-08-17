import React, { Component } from 'react'
import instagramIcon from './images/instagram-icon.svg';
import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';
import logo from './images/coraxyc-logo.svg';

class SideNavbar extends Component {
    render() {
        return (
            <div className="side-navbar">
                <div className="icon logo-icon">
                    <img src={logo} alt="logo" id="logo"/>
                </div>
                <div className="bottom-icons">
                    <div className="icon">
                        <img src={githubIcon} alt="github-icon" id="github-icon"/>
                    </div>
                    <div className="icon">
                        <img src={linkedinIcon} alt="linkedin-icon" id="linkedin-icon"/>
                    </div>
                    <div className="icon">
                        <img src={instagramIcon} alt="instagram-icon" id="instagram-icon"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideNavbar