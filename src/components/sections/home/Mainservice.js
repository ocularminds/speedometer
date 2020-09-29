import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const mainservice = [
    {
        icon: "flaticon-family",
        title: "Home Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-xl-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-kidnapping",
        title: "Security Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-xl-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-hook",
        title: "Real Estate Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-xl-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-book",
        title: "Education Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-xl-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-wounded",
        title: "Personal Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-md-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-auction",
        title: "Business Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-md-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-LOANLY",
        title: "Corporate Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative mb-xs-30",
        url:"/service-detail",
    },
    {
        icon: "flaticon-balance-scale",
        title: "Property Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        parentcls:"main-services-box p-relative",
        url:"/service-detail",
    },
]

class Mainservice extends Component {
    render() {
        return (
            <section className="main-services section-padding p-relative">
                <div className="side-lines"> <span className="box" />
                    <span className="text">SPEEDOO</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Services</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                        <div className="section-btn"> <Link to="/service" className="btn-first btn-submit text-light-blue">View More</Link>
                        </div>
                    </div>
                    <div className="row">
                        {mainservice.map((item, i) => (
                        <div key={i} className="col-lg-3 col-sm-6">
                            <div className={item.parentcls}>
                                <div className="main-service-wrapper padding-20">
                                    <div className="icon-box"> <i className={item.icon} />
                                    </div>
                                    <h5 className="fw-700"><Link to={item.url} className="text-custom-black">{item.title}</Link></h5>
                                    <p className="text-light-white no-margin">{item.para}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

        );
    }
}

export default Mainservice;