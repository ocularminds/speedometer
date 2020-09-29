import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Servicesidebar';

import mainimg from '../../../assets/images/services1.jpg';

const mainservice = [
    {
        icon: "flaticon-kidnapping",
        title: "Car Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        url: "/service-detail",
    },
    {
        icon: "flaticon-book",
        title: "Education  Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        url: "/service-detail",
    },
    {
        icon: "flaticon-wounded",
        title: "Personal Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        url: "/service-detail",
    },
    {
        icon: "flaticon-family",
        title: "Home Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        url: "/service-detail",
    },
    {
        icon: "flaticon-hook",
        title: "Real Estate Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        url: "/service-detail",
    },
    {
        icon: "flaticon-LOANLY",
        title: "Corporate Loan",
        para: "Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.",
        url: "/service-detail",
    },
]

class Servicecontent extends Component {
    render() {
        return (
            <section className="section-padding bg-gray service-page">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4">
                            <div className="sidebar_wrap mb-md-80">
                                <Sidebar />
                            </div>
                        </aside>
                        <div className="col-lg-8">
                            <div className="col-12">
                                <div className="service-detail-sec bg-custom-white bx-wrapper">
                                    <div className="service-image mb-xl-30">
                                        <img src={mainimg} className="image-fit" alt="img" />
                                        <div className="overlay overlay-bg-black" />
                                        <div className="service-text-wrapper transform-center">
                                            <h3 className="text-custom-white">Social Media Posting Leads To Defense Verdict</h3>
                                            <Link to="/finance" className="btn-first btn-submit">Make Apply Today</Link>
                                        </div>
                                    </div>
                                    <div className="service-meta mb-xl-40">
                                        <h2 className="text-custom-black fw-600">LOAN FIRM DEVOTED TO OUR CLIENTS</h2>
                                        <p className="text-light-white no-margin">Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim</p>
                                    </div>
                                </div>
                                <div className="row">
                                    {mainservice.map((item, i) => (
                                        <div key={i} className="col-md-4 col-sm-6">
                                            <div className="main-services-box p-relative mb-xl-30">
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
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Servicecontent;