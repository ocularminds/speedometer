import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

class Whyus extends Component {
    render() {
        return (
            <section className="why-choose-us-style-2 section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Practice Area</h3>
                            <div className="section-description">
                                <p className="text-custom-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="square-tabs">
                            <Tab.Container defaultActiveKey="home-loan">
                                <Nav variant="pills" className="nav nav-tabs custom mb-xl-20">
                                    <Nav.Item>
                                        <Nav.Link eventKey="home-loan">Home Loan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="car-loan">Car Loan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="property-loan">Real Estate Loan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="education-loan">Education Loan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="business-loan">Business Loan</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="padding-20 bx-wrapper bg-custom-white">
                                    <Tab.Pane className="container" eventKey="home-loan">
                                    <div className="tab-inner">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="img-sec mb-md-40">
                                                        <img src="assets/images/whyus1.jpg" className="full-width" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="content-box">
                                                        <h4 className="text-custom-black">What does Home Loan Advisor do?</h4>
                                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                        <div className="list">
                                                            <div className="row no-gutters">
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Well Documented</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic1.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Top Agent </h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic2.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Best Effort</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic3.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Quick Charges</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic4.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="container" eventKey="car-loan">
                                    <div className="tab-inner">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="img-sec mb-md-40">
                                                        <img src="assets/images/whyus2.jpg" className="full-width" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="content-box">
                                                        <h4 className="text-custom-black">What does Car Loan Advisordo?</h4>
                                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                        <div className="list">
                                                            <div className="row no-gutters">
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Well Documented</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic1.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Top Agent </h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic2.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Best Effort</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic3.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Quick Charges</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic4.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="container" eventKey="property-loan">
                                    <div className="tab-inner">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="img-sec mb-md-40">
                                                        <img src="assets/images/whyus3.jpg" className="full-width" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="content-box">
                                                        <h4 className="text-custom-black">What does Real State Advisor do?</h4>
                                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                        <div className="list">
                                                            <div className="row no-gutters">
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Well Documented</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic1.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Top Agent </h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic2.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Best Effort</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic3.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Quick Charges</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic4.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="container" eventKey="education-loan">
                                    <div className="tab-inner">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="img-sec mb-md-40">
                                                        <img src="assets/images/whyus4.jpg" className="full-width" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="content-box">
                                                        <h4 className="text-custom-black">What does Business Loan Advisor do?</h4>
                                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                        <div className="list">
                                                            <div className="row no-gutters">
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Well Documented</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic1.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Top Agent </h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic2.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Best Effort</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic3.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Quick Charges</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic4.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="container" eventKey="business-loan">
                                    <div className="tab-inner">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="img-sec mb-md-40">
                                                        <img src="assets/images/whyus2.jpg" className="full-width" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="content-box">
                                                        <h4 className="text-custom-black">What Business Loan Advisor do?</h4>
                                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                        <div className="list">
                                                            <div className="row no-gutters">
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Well Documented</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic1.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Top Agent </h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic2.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Best Effort</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic3.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="grid-box">
                                                                        <div className="grid-box-inner">
                                                                            <Link to="/" className="d-block clearfix">
                                                                                <h5 className="text-custom-black">Quick Charges</h5>
                                                                                <div className="icon-box mb-xl-20"> <img src="assets/images/homepage/ic4.png" alt="img" /></div>
                                                                                <p className="text-light-white no-margin">Lorem Ipsum is simply</p>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Whyus;