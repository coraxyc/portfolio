import React, { Component } from 'react'
import footerImages from './images/footer-images.svg';
import rightArrow from './images/right-arrow.svg'

class CoffeeSection extends Component {
    render() {
        return (
            <section className="Coffee" id="coffee">
                <div className="Coffee-container container">
                    <div className="Coffee-circle">
                        <div className="Coffee-circle-body">
                            <div className="Coffee-circle-text">
                                Want to talk <br/>over coffee ☕️?
                            </div>
                            <a href="mailto:ycxing99@gmail.com?subject=Hi%20Cora!&body=My%20name%20is%20_____,%20and%20I'd%20like%20to%20get%20in%20touch." target="_blank" >
                                <button className="Coffee-button">
                                    <img src={rightArrow} className="Coffee-arrow" alt="arrow"/>
                                    Sure, why not?
                                </button>
                            </a>
                        </div>
                    </div>
                    {/*<img src={footerImages} className="footer-images" alt="footer images"></img>*/}
                </div>
            </section>
        )
    }
}
export default CoffeeSection