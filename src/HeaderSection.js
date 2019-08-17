import React, { Component } from 'react'
import arrow from './images/arrow.svg'

class HeaderSection extends Component {
    render() {
        return (
            <section className="Home" id="home">
                <div className="Header-container">
                    <div className="Header-intro">
                        <h1 className="Header-intro-title">Hi, I'm Cora.</h1>
                        <p className="Header-intro-body">
                            I’m a visual problem solver studying Computer Science <br/>
                            and Design at the University of California San Diego. </p>
                        <p className="Header-intro-body">
                            I enjoy going to hackathons 👩‍💻, gazing at skyscrapers 🏙,<br/>
                            and experimenting with typography ✍.</p>
                        <a href="#work">
                            <button className="Header-intro-button">
                                Explore my work
                            </button>
                        </a>
                        <br/>
                        <a href="#work">
                            <img src={arrow} className="Header-intro-arrow" alt="arrow"/>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeaderSection