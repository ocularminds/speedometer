import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="section-padding lw-about-section p-relative">
                <div className="side-lines right-side"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ln-about-left-side p-relative full-height">
                                <div className="first-img full-height">
                                    <img src="assets/images/homepage/about2.jpg" className="image-fit" alt="img" />
                                </div>
                                <div className="second-img">
                                    <img src="assets/images/homepage/about1.jpg" className="image-fit" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lw-about-section-right">
                                <h3 className="p-relative lw-about-right-heading">Not Fast Decision But Good Decision Fast.</h3>
                                <div className="lw-about-right-content">
                                    <p>Our menu is a nod to
              <span className="text-gold">
                                            <strong> Banks &amp; Financial district </strong>
                                        </span>
              who help their customers stay on-the-go by delivering quick tasty bites. We incorporated flavors from around the world to offer a unique menu featuring items like Banh Mi, a flavorful sandwich staple from Vietnam, and the classic American Burger.
            </p>
                                    <div className="lw-about-right-list">
                                        <ul>
                                            <li> <i className="fas fa-check" />
                  Fast Loan</li>
                                            <li> <i className="fas fa-check" />
                  Less Fee </li>
                                            <li> <i className="fas fa-check" />
                  Less Paperwork </li>
                                            <li> <i className="fas fa-check" />
                  Less Interest </li>
                                        </ul>
                                    </div>
                                    <div className="lw-about-right-author">
                                        <div className="lw-about-signature">
                                            <h5>Michaela Bron</h5>
                                            <p>Founder of LOANLY</p>
                                        </div>
                                        <div className="lw-about-sign-image">
                                            <img src="assets/images/signature-home.png" alt="sign" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default About;