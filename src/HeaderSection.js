import React, { Component } from 'react'

class HeaderSection extends Component {
    render() {
        return (
            <section className="Header">
                <div className="Header-container">
                    <div className="Header-intro">
                        <h1 className="Header-intro-title">Hi, I'm Cora.</h1>
                        <p className="Header-intro-body">
                            I’m a visual problem solver studying Computer Science <br/>
                            and Design at the University of California San Diego. </p>
                        <p className="Header-intro-body">
                            I have a passion for hackathons, typography, and <br/>
                            sustainable urban planning.</p>
                        <button className="Header-intro-button">
                            Explore my work
                        </button>
                        <object type="image/svg+xml" className="Header-intro-arrow" data="./images/arrow.svg"/>
                    </div>
                    
                    
                </div>
            </section>
        )
    }
}

export default HeaderSection