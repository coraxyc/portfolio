import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardConnectDisplay from '../images/cc-banner.png'
import AvantGardeDisplay from '../images/project2_avant-garde.png'
import InformedDisplay from '../images/project3_informed-banner.png'

class ProjectSection extends Component {
    render() {
        return (
            <section className="Work" id="work">
                <div className="Work-container">
                    <div className="horizontal">
                    <div className="Work-info">
                        <div className="Work-info-container">
                            <Link to="./projects/informed">
                                <img className="Work-info-image" src={InformedDisplay}/>
                            </Link>
                            <div className="Work-info-text">
                                <p className="project-title">
                                    iNFORMed
                                </p>
                                <p className="project-subtitle">
                                    UI/UX Design, Visual Design, User Research
                                </p>
                                <p className="project-body">
                                    Grassroots community platform streamlining access to verified COVID-19 resources.
                                </p>
                            </div>
                        </div>
                        <div className="Work-info-container">
                            <Link to="./projects/cardconnect">
                                <img className="Work-info-image" src={CardConnectDisplay}/>
                            </Link>
                            <div className="Work-info-text">
                                <p className="project-title">
                                    CardConnect
                                </p>
                                <p className="project-subtitle">
                                    Front-end Web Development, UI Design, UX Research
                                </p>
                                <p className="project-body">
                                    Digital contacts list tool that allows you to create templated business cards.
                                </p>
                            </div>
                        </div>
                        <div className="Work-info-container">
                            <Link to="./projects/avantgarde">
                                <img className="Work-info-image" src={AvantGardeDisplay}/>
                            </Link>
                            <div className="Work-info-text">
                                <p className="project-title">
                                    Avant Garde Poster Design
                                </p>
                                <p className="project-subtitle">
                                    Information Design, Visual Design, UX Research
                                </p>
                                <p className="project-body">
                                Iterative study on grids, typography, and information organization.
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