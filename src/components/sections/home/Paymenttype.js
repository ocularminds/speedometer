import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

// home loan
import icon1 from '../../../assets/images/homepage/icon1.png';
import icon2 from '../../../assets/images/homepage/icon2.png';
import icon3 from '../../../assets/images/homepage/icon3.png';

// Homeloan
const homeloan = [
    {
        icon: icon1,
        title: "All Solution Immidiate.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon2,
        title: "Get Funds in Account.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon3,
        title: "Feel secure, start to finish.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
// Carloan
const carloan = [
    {
        icon: icon3,
        title: "Feel secure, start to finish.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon2,
        title: "Get Funds in Account.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon1,
        title: "All Solution Immidiate.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
// Businessloan
const businessloan = [
    {
        icon: icon2,
        title: "Get Funds in Account.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon1,
        title: "All Solution Immidiate.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon3,
        title: "Feel secure, start to finish.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
// Propertyloan
const propertyloan = [
    {
        icon: icon3,
        title: "Feel secure, start to finish.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon1,
        title: "All Solution Immidiate.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon2,
        title: "Get Funds in Account.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
// Educationloan
const educationloan = [
    {
        icon: icon2,
        title: "Get Funds in Account.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon1,
        title: "All Solution Immidiate.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon3,
        title: "Feel secure, start to finish.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
// Personalloan
const personalloan = [
    {
        icon: icon3,
        title: "Feel secure, start to finish.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon2,
        title: "Get Funds in Account.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        icon: icon1,
        title: "All Solution Immidiate.",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]


class Paymenttype extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 no-padding">
                            <div className="ln-type-payment-tabs">
                                <Tab.Container defaultActiveKey="home-loan">
                                    <Nav variant="pills" className="custom nav nav-tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="home-loan">Services</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="section-padding ln-type-payment">
                                        <Tab.Pane className="container" eventKey="home-loan">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Feel Free, Connect us.</h3>
                                                            <p className="text-custom-white no-margin">Loan around the corner or around the country. Loanly lets you loan securely and with less worry thanks to purchase protection.*</p>
                                                        </div>
                                                        <div className="row">
                                                            {homeloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <img src={item.icon} className="img-fluid" alt="icon" />
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white fw-600">{item.title}</h4>
                                                                            <p className="text-custom-white">{item.para}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/contact" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                                <Link to="/" className="d-block text-white fw-600">*See eligibility and limitations.</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="car-loan">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Loan securely countrywide.</h3>
                                                            <p className="text-custom-white no-margin">Loan around the corner or around the country. Loanly lets you loan securely and with less worry thanks to purchase protection.*</p>
                                                        </div>
                                                        <div className="row">
                                                            {carloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <img src={item.icon} className="img-fluid" alt="icon" />
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white fw-600">{item.title}</h4>
                                                                            <p className="text-custom-white">{item.para}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/contact" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                                <Link to="/" className="d-block text-white fw-600">*See eligibility and limitations.</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="business-loan">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Loan securely countrywide.</h3>
                                                            <p className="text-custom-white no-margin">Loan around the corner or around the country. Loanly lets you loan securely and with less worry thanks to purchase protection.*</p>
                                                        </div>
                                                        <div className="row">
                                                        {businessloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <img src={item.icon} className="img-fluid" alt="icon" />
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white fw-600">{item.title}</h4>
                                                                            <p className="text-custom-white">{item.para}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/contact" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                                <Link to="/" className="d-block text-white fw-600">*See eligibility and limitations.</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="property-loan">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Loan securely countrywide.</h3>
                                                            <p className="text-custom-white no-margin">Loan around the corner or around the country. Loanly lets you loan securely and with less worry thanks to purchase protection.*</p>
                                                        </div>
                                                        <div className="row">
                                                        {propertyloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <img src={item.icon} className="img-fluid" alt="icon" />
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white fw-600">{item.title}</h4>
                                                                            <p className="text-custom-white">{item.para}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/contact" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                                <Link to="/" className="d-block text-white fw-600">*See eligibility and limitations.</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="education-loan">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Loan securely countrywide.</h3>
                                                            <p className="text-custom-white no-margin">Loan around the corner or around the country. Loanly lets you loan securely and with less worry thanks to purchase protection.*</p>
                                                        </div>
                                                        <div className="row">
                                                        {educationloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <img src={item.icon} className="img-fluid" alt="icon" />
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white fw-600">{item.title}</h4>
                                                                            <p className="text-custom-white">{item.para}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/contact" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                                <Link to="/" className="d-block text-white fw-600">*See eligibility and limitations.</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane className="container" eventKey="personal-loan">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tab-inner">
                                                        <div className="tab-heading section-padding-bottom">
                                                            <h3 className="text-custom-white">Loan securely countrywide.</h3>
                                                            <p className="text-custom-white no-margin">Loan around the corner or around the country. Loanly lets you loan securely and with less worry thanks to purchase protection.*</p>
                                                        </div>
                                                        <div className="row">
                                                        {personalloan.map((item, i) => (
                                                                <div key={i} className="col-lg-4 col-md-6">
                                                                    <div className="ln-type-payment-box mb-xl-30">
                                                                        <div className="payment-icon mb-xl-20">
                                                                            <img src={item.icon} className="img-fluid" alt="icon" />
                                                                        </div>
                                                                        <div className="content-wrap">
                                                                            <h4 className="text-custom-white fw-600">{item.title}</h4>
                                                                            <p className="text-custom-white">{item.para}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="col-12 text-center">
                                                                <Link to="/contact" className="btn-first btn-submit-white fw-600 mb-xl-20">Contact Now</Link>
                                                                <Link to="/" className="d-block text-white fw-600">*See eligibility and limitations.</Link>
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

export default Paymenttype;