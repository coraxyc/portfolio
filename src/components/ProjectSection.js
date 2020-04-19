import React, { Component } from 'react'
import CardConnectDisplay from '../images/project1_cardconnect.png'
import AvantGardeDisplay from '../images/project2_avant-garde.png'

class ProjectSection extends Component {
    render() {
        return (
            <section className="Work" id="work">
                <div className="Work-container">
                    <div className="horizontal">
                    <div className="Work-info">
                        <div className="Work-info-container">
                            <a href="./projects/cardconnect">
                                <img className="Work-info-image" src={CardConnectDisplay}/>
                            </a>
                            <div className="Work-info-text">
                                <p className="project-title">
                                    CardConnect
                                </p>
                                <p className="project-subtitle">
                                    front-end developer, designer
                                </p>
                                <p className="project-body">
                                    Digital contacts list tool that allows you to create templated business cards.
                                </p>
                            </div>
                        </div>
                        <div className="Work-info-container">
                            <a href="./projects/avantgarde">
                                <img className="Work-info-image" src={AvantGardeDisplay}/>
                            </a>
                            <div className="Work-info-text">
                                <p className="project-title">
                                    Avant Garde Poster Design
                                </p>
                                <p className="project-subtitle">
                                    designer
                                </p>
                                <p className="project-body">
                                A study on grids, typography, and information organization through multiple iterations.
                                </p>
                            </div>
                        </div>
                        {/* to make big circle scroll to almost the end*/}
                        <div className="margin-top-bottom-5em"></div>
                    </div>
                    <div className="Work-title-body">
                        <div className="Work-circle">
                            <div className="Work-circle-body">
                                <div className="Work-circle-body-title">
                                    Projects
                                </div>
                                <div className="Work-circle-body-divider"></div>
                                <div className="Work-circle-body-text">
                                    Here’s a few projects that I’d like to showcase.
                                    <br/><br/>
                                    Tap on the images to view case studies.
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectSection