import React, { Component } from 'react';

class Contactform extends Component {
    render() {
        return (
            <section className="section-padding bg-gray contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4 mb-md-80">
                            <div className="contact-form full-height align-self-center bx-wrapper bg-custom-white">
                                <h4 className="text-custom-black fw-600">Get In Touch</h4>
                                <p className="text-light-white no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <form className="form-layout-1">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="text-left">Full Name</label>
                                                <input type="text" name="from_name" className="form-control" placeholder="Full Name" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="text-left">Email Address</label>
                                                <input type="email" name="to_email" className="form-control" placeholder="Email Address" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-xl-20">
                                            <div className="form-group">
                                                <label className="text-left">Phone No</label>
                                                <input type="text" name="to_phone" className="form-control" placeholder="Phone No." required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-xl-20">
                                            <div className="form-group">
                                                <label className="text-left">Subject</label>
                                                <input type="text" name="to_subject" className="form-control" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-12 mb-xl-20">
                                            <div className="form-group">
                                                <label className="text-left">Message</label>
                                                <textarea rows={5} name="message_html" className="form-control" placeholder="Write Something" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn-first btn-submit text-light-blue full-width">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <iframe className="full-width full-height" title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contactform;