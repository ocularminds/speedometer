import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contactinfo extends Component {
    render() {
        return (
            <section className="section-padding bg-gray contact-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact-info bx-wrapper bg-custom-white text-center mb-md-40">
                                <div className="contact-info-wrapper">
                                    <div className="icon mb-xl-20"> <i className="fas fa-phone-alt" />
                                    </div>
                                    <h5 className="text-custom-black fw-600">Phone</h5>
                                    <p className="text-light-white">Start working with LOANLY that can provide everything</p> <Link to="#" className="fs-14">+(347)123 456 7890</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact-info bx-wrapper bg-custom-white text-center mb-md-40">
                                <div className="contact-info-wrapper">
                                    <div className="icon mb-xl-20"> <i className="far fa-envelope" />
                                    </div>
                                    <h5 className="text-custom-black fw-600">Email</h5>
                                    <p className="text-light-white">Start working with LOANLY that can provide everything</p> <Link to="#" className="fs-14">contact@example.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="contact-info bx-wrapper bg-custom-white text-center">
                                <div className="contact-info-wrapper">
                                    <div className="icon mb-xl-20"> <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <h5 className="text-custom-black fw-600">Location</h5>
                                    <p className="text-light-white">Start working with LOANLY that can provide everything</p> <Link to="#" className="fs-14">View on Google map</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contactinfo;