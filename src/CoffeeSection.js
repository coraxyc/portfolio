import React, { Component } from 'react'
import footerImages from './images/footer-images.svg';
class CoffeeSection extends Component {
    render() {
        return (
            <section className="Coffee">
                <div className="Coffee-container container">
                    <img src={footerImages} className="footer-images" alt="footer images"></img>
                </div>
            </section>
        )
    }
}
export default CoffeeSection