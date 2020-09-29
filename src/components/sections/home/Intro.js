import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

const intropost = [
    {
        title: "CORPORATE LOAN",
        para: "Create pages with ease with a help of the best page builder plugin.",
        urltext: "Read More",
        url: "/service-detail",
        addcls: "intro-box bg-dark-brown mb-md-20",
        animationname: "fadeInUp",
        animationdur: "1s",
        animationdelay: "0.3s",
    },
    {
        title: "GET FUNDS IN SECOND",
        para: "Create pages with ease with a help of the best page builder plugin.",
        urltext: "Read More",
        url: "/service-detail",
        addcls: "intro-box bg-dark-brown mb-md-20",
        animationname: "fadeInUp",
        animationdur: "1.5s",
        animationdelay: "0.6s",
    },
    {
        title: "REPAY AS YOU GET PAID",
        para: "Create pages with ease with a help of the best page builder plugin.",
        urltext: "Read More",
        url: "/service-detail",
        addcls: "intro-box bg-dark-brown mb-xs-20",
        animationname: "fadeInUp",
        animationdur: "2s",
        animationdelay: "1s",
    },
    {
        title: "ONE FIX FEE",
        para: "Create pages with ease with a help of the best page builder plugin.",
        urltext: "Read More",
        url: "/service-detail",
        addcls: "intro-box bg-dark-brown",
        animationname: "fadeInUp",
        animationdur: '2.5s',
        animationdelay: '1.3s',
    },
]


class Intro extends Component {
    render() {
        return (
            <section className="genmed-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        {intropost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6">
                                <ReactWOW animation={item.animationname} data-wow-duration={item.animationdur} data-wow-delay={item.animationdelay}>
                                    <div className={item.addcls}>
                                        <div className="intro-wrapper text-center">
                                            <h6 className="text-custom-white fw-700">{item.title}</h6>
                                            <p className="text-custom-white">{item.para}</p> <Link to={item.url} className="btn-first btn-submit fw-600">{item.urltext}</Link>
                                        </div>
                                    </div>
                                </ReactWOW>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        );
    }
}

export default Intro;