import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <section className="section-padding about-us-sec p-relative">
                <div className="side-lines right-side"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6 about-sec-bg-1">
                            <div className="about-left-side-1">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h3 className=" fw-700 text-dark">OUR GRAGOUS HISTORY</h3>
                                    </div>
                                </div>
                                <p className="text-light-white fs-14 mb-xl-20">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it..</p>
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
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="full-height">
                                <img src="assets/images/about-4.jpg" className="img-fluid image-fit" alt="about us" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container about-sec-second">
                    <div className="row no-gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="full-height ">
                                <img src="assets/images/about-5.jpg" className="img-fluid image-fit" alt="about" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 about-sec-bg">
                            <div className="about-left-side-1 p-relative">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h3 className=" fw-700 text-dark">SKILLS</h3>
                                    </div>
                                </div>
                                <div className="about-desc">
                                    <p className="text-light-white mb-xl-20">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into<Link to="/about" className="text-custom-blue">Read more</Link>
                                    </p>
                                </div>
                                <div className="company-progress">
                                    <div className="progress-item">
                                        <label className="text-custom-black fs-16 fw-600">Practice Area <span>70%</span>
                                        </label>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped active" />
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <label className="text-custom-black fs-16 fw-600">Success <span>80%</span>
                                        </label>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped active" />
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <label className="text-custom-black fs-16 fw-600">Happy Customers<span>100%</span>
                                        </label>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped active" />
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <label className="text-custom-black fs-16 fw-600">Firms Size<span>75%</span>
                                        </label>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped active" />
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

export default History;
