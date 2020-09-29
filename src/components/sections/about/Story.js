import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

class Story extends Component {
    render() {
        return (
            <section className="section-padding bg-gray about-story ">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">A Story To Our Journey</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs square-tabs">
                                <Tab.Container defaultActiveKey="start">
                                    <Nav variant="pills" className="nav nav-tabs custom p-relative mb-xl-30">
                                        <Nav.Item>
                                            <Nav.Link eventKey="start">1990</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setup">2006</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="medium">2010</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="advance">2020</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="padding-20 bg-custom-white bx-wrapper">
                                        <Tab.Pane eventKey="start">
                                        <div className="tab-inner">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="img-sec mb-md-40">
                                                            <img src="assets/images/about-4.jpg" className="full-width" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 align-self-center">
                                                        <div className="content-box">
                                                            <h4 className="text-custom-black fw-600">LOANLY Firm Devoted to Our Teams</h4>
                                                            <p className="text-light-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <div className="list">
                                                                <ul className="custom">
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                </ul>
                                                            </div> <Link to="/about" className="btn-first btn-submit text-light-blue">Learn More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setup">
                                        <div className="tab-inner">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="img-sec mb-md-40">
                                                            <img src="assets/images/about2.jpg" className="full-width" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 align-self-center">
                                                        <div className="content-box">
                                                            <h4 className="text-custom-black fw-600">LOANLY Firm Devoted to Our Teams</h4>
                                                            <p className="text-light-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <div className="list">
                                                                <ul className="custom">
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                </ul>
                                                            </div> <Link to="/about" className="btn-first btn-submit text-light-blue">Learn More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="medium">
                                        <div className="tab-inner">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="img-sec mb-md-40">
                                                            <img src="assets/images/about-4.jpg" className="full-width" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 align-self-center">
                                                        <div className="content-box">
                                                            <h4 className="text-custom-black fw-600">Collaborate With Team Members To Rise</h4>
                                                            <p className="text-light-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <div className="list">
                                                                <ul className="custom">
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                </ul>
                                                            </div> <Link to="/about" className="btn-first btn-submit text-light-blue">Learn More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="advance">
                                        <div className="tab-inner">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="img-sec mb-md-40">
                                                            <img src="assets/images/about2.jpg" className="full-width" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 align-self-center">
                                                        <div className="content-box">
                                                            <h4 className="text-custom-black fw-600">LOANLY Firm Devoted to Our Teams</h4>
                                                            <p className="text-light-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                                            <div className="list">
                                                                <ul className="custom">
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                    <li className="fs-14 text-light-blue"> <i className="fas fa-check" />
                                                                        <span className="text-light-white">Lorem Ipsum</span>
                                                                    </li>
                                                                </ul>
                                                            </div> <Link to="/about" className="btn-first btn-submit text-light-blue">Learn More</Link>
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

export default Story;
