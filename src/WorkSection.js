import React, { Component } from 'react'
import aboutWave from './images/about-wave.svg'

class WorkSection extends Component {
    render() {
        return (
            <section className="Work" id="work">
                <div className="Work-container">
                    <div className="Work-grid">
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                        <div className="Work-grid-box"></div>
                    </div>
                    <div className="Work-title-body">
                        <div className="Work-circle">
                            <div className="Work-circle-body">
                                <div className="Work-circle-body-title">
                                    Work
                                </div>
                                <div className="Work-circle-body-divider"></div>
                                <div className="Work-circle-body-text">
                                    Lorem ipsum something that's really cool about the work on here.
                                    <br/><br/>
                                    Also something super inspirational.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={aboutWave} className="Work-footer" alt="wave footer"/>
                        <div className="Work-bottom-circle">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkSection