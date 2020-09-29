import React, { Component } from 'react';

class Bookappointment extends Component {
    render() {
        return (
            <section className="book-appointment parallax section-padding" id="book-appointment">
                <div className="overlay overlay-bg-black" />
                <div className="pattern" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="appointment-sec">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 ">
                                        <div className="padding-40 full-height bg-white">
                                            <div className="align-self-center">
                                                <div className="section-heading">
                                                    <h3 className="text-custom-blue fw-600 ">Get Loan Adviser</h3>
                                                </div>
                                                <p className="text-dark">Call us today, leave a message, email or find your nearest office below and We are here for you 24 hours , 7 days a week.</p>
                                                <h6 className="fs-20 mt-4 text-dark">We are here for you
                                24 hours a day, 7 days a week</h6>
                                                <div className="LOANLY-address">
                                                    <p className="text-dark "><span className="fw-600">Address</span> : Newyork Mcf-d233</p>
                                                    <p className="text-dark "><span className="fw-600">Email</span> : info@gmail.com</p>
                                                </div>
                                                <button type="submit" className="btn-first btn-submit-fill"><i className="fas fa-phone mr-2 fs-16" /><span className="fs-16">1800-000-2390</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-side full-height bg-border">
                                            <div className="section-heading">
                                                <h3 className="text-white fw-600">Make An Apply Today</h3>
                                            </div>
                                            <form className="form-style-2 form-style-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fas fa-user" /></span>
                                                                <input type="text" name="#" className="form-control" placeholder="Full Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fas fa-envelope" /></span>
                                                                <input type="email" name="#" className="form-control" placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> <span className="input-group-preappend"><i className="fas fa-phone-alt" /></span>
                                                                <input type="text" name="#" className="form-control" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn-first btn-submit full-width">Book Apply Today</button>
                                                    </div>
                                                </div>
                                            </form>
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

export default Bookappointment;