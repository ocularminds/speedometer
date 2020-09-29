import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Sidebar from '../../layouts/Servicesidebar';

import serviceimg1 from '../../../assets/images/services.jpg';
import serviceimg2 from '../../../assets/images/services1.jpg';

const servicepost = [
    {
        photo: serviceimg1,
        title: "Choosing right education loan",
        urltext: "Make Apply Today",
        url: "/finance",
    },
    {
        photo: serviceimg2,
        title: "Choosing right education loan",
        urltext: "Make Apply Today",
        url: "/finance",
    },
    {
        photo: serviceimg1,
        title: "Choosing right education loan",
        urltext: "Make Apply Today",
        url: "/finance",
    },
]

class Servicedetail extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 400,
            focusOnSelect: true,
            cssEase: 'linear'
        };
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
                                    <Slider className="services-detail-slider mb-xl-30" {...settings}>
                                        {servicepost.map((item, i) => (
                                            <div key={i} className="service-image">
                                                <img src={item.photo} className="image-fit" alt="img" />
                                                <div className="overlay overlay-bg-black" />
                                                <div className="service-text-wrapper transform-center">
                                                    <h3 className="text-custom-white">{item.title}</h3>
                                                    <Link to={item.url} className="btn-first btn-submit">{item.urltext}</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                    <div className="service-meta mb-xl-30">
                                        <h2 className="text-custom-black fw-600">LOAN FIRM DEVOTED TO OUR CLIENTS</h2>
                                        <p className="text-light-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque.</p>
                                        <p className="text-light-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque.</p>
                                        <h4 className="text-custom-black fw-600">What we do ?.</h4>
                                        <p className="text-light-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque.</p>
                                        <h4 className="text-custom-black fw-600">What the procedure ?.</h4>
                                        <p className="text-light-white no-margin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae quia nemo possimus soluta dignissimos provident ipsum tenetur non ratione incidunt, debitis commodi similique maxime unde fugiat ab? Odio, eaque.</p>
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

export default Servicedetail;