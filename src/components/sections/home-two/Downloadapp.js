import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Downloadapp extends Component {
    render() {
        return (
            <section className="download-app parallax">
                <div className="side-lines right-side style-2"> <span className="box" />
                    <span className="text">SPEEDOO</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-header section-padding-top">
                                <div className="section-heading">
                                    <h3 className="text-custom-white fw-700">Download App</h3>
                                    <div className="section-description">
                                        <p className="text-custom-white"><b>Simple. Sucure. Duty Calculator.</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="app-img">
                                <Link to="#">
                                    <img src="assets/images/app.png" className="img-fluid" alt="app" />
                                </Link>
                                <Link to="#">
                                    <img src="assets/images/app2.png" className="img-fluid" alt="app" />
                                </Link>
                            </div>
                            <div className="app-img-btm">
                                <img src="assets/images/mobile.png" className="img-fluid" alt="mobile app"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="app-img-side">
                                <div className="section-header section-padding-top">
                                    <div className="section-heading">
                                        <h3 className="text-custom-white fw-700">App Features</h3>
                                        <div className="section-description">
                                            <p className="text-custom-white">Invoicing, Duty Calculation, Product Classification, ETA Reminders, Notifications and more.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-features section-padding-bottom">
                                    <ul className="custom">
                                        <li> <i className="flaticon-live-show" />
                                            <h5 className="text-light-blue">Live Advisor </h5>
                                            <p className="text-custom-white">Get advice from industry leaders who are always on ground and on-the-job with years of experience.</p>
                                        </li>
                                        <li> <i className="flaticon-website" />
                                            <h5 className="text-light-blue">Duty Calculator</h5>
                                            <p className="text-custom-white">Calculate import duty, taxes and customs charges when you are importing from the EU, USA, Russia, China, Australia and the rest of the world.</p>
                                        </li>
                                        <li> <i className="flaticon-customer-service" />
                                            <h5 className="text-light-blue">Instant Support</h5>
                                            <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Downloadapp;