import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="section-padding about-us-sec p-relative">
                <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="about-left-side mb-md-40 ">
                                <h3 className="text-custom-black fw-700">LOAN FIRM DEVOTED TO OUR CLIENTS</h3>
                                <p className="text-light-white fs-14 mb-xl-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="text-light-white fs-14 mb-xl-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="about-list">
                                    <ul>
                                        <li className="text-light-white fs-14"><i className="fas fa-check" /> Expert Loan</li>
                                        <li className="text-light-white fs-14"><i className="fas fa-check" /> 100 % Success Rate</li>
                                        <li className="text-light-white fs-14"><i className="fas fa-check" /> No Need Extra Cost</li>
                                        <li className="text-light-white fs-14"><i className="fas fa-check" />Highly Recommendation</li>
                                    </ul>
                                </div>
                                <div className="signature-sec">
                                    <div className="signature-right">
                                        <h5 className="text-custom-black fw-600">Michaela Bron</h5>
                                        <p className="text-light-white no-margin">Founder of LOANLY</p>
                                    </div>
                                    <div className="signature-left">
                                        <img src="assets/images/signature.png" alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right-side-img p-relative">
                                <div className="first-img p-relative">
                                    <img src="assets/images/aboutus.jpg" className="img-fluid full-width" alt="about us" />
                                    <div className="transform-center">
                                        <div className="text">
                                            <h2 className="text-custom-black no-margin">35</h2>
                                            <div className="side-text">
                                                <p>Years of
                    <br />LESS FEE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light-white-skew-2 bg-custom-black" />
            </section>

        );
    }
}

export default About;