import React, { Component } from 'react'

class WorkSection extends Component {
    render() {
        return (
            <section className="About" id="about">
                <div className="About-container">
                <div className="About-circle">
                        <div className="About-circle-body">
                            <div className="About-circle-body-title">
                                About
                            </div>
                            <div className="About-circle-body-divider"></div>
                                <div className="About-circle-body-text">
                                    Lorem ipsum something that's really cool about the work on here.
                                    <br/><br/>
                                    Also something super inspirational.
                                </div>
                            </div>
                        </div>

                </div>
            </section>
        )
    }
}
export default WorkSection