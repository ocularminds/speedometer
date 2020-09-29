import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import team1 from '../../../assets/images/doctors/doctor5.jpg'
import team2 from '../../../assets/images/doctors/doctor6.jpg'
import team3 from '../../../assets/images/doctors/doctor7.jpg'
import team4 from '../../../assets/images/doctors/doctor2.jpg'
import team5 from '../../../assets/images/doctors/doctor3.jpg'

const teampost = [
    {
        photo: team1,
        name: "Addison Smith",
        designation: "Home Loan Advisor",
        url: "/team",
    },
    {
        photo: team2,
        name: "Sarah Taylor",
        designation: "Educational Loan Advisor",
        url: "/team",
    },
    {
        photo: team3,
        name: "Aiken Ward",
        designation: "Business Loan Advisor",
        url: "/team",
    },
    {
        photo: team4,
        name: "Babatunde Jon",
        designation: "Personal Loan Advisor",
        url: "/team",
    },
    {
        photo: team5,
        name: "Eachann Jhon",
        designation: "Corporate Loan Advisor",
        url: "/team",
    },
]
class Team extends Component {
    render() {
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            loop: true,
            autoplay: true,
            speed: 400,
            cssEase: 'linear',
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }]
        };
        return (
            <section className="section-padding doctors-team  style-2 p-relative">
                <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Team</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="doctors-slider" {...settings}>
                                {teampost.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="doctor-item">
                                            <div className="doctor-img mb-xl-20">
                                                <img src={item.photo} className="full-width" alt="" />
                                            </div>
                                            <div className="doctor-content">
                                                <h6><Link to={item.url} className="text-custom-black fw-700">{item.name}</Link></h6>
                                                <p className="designation text-light-white">{item.designation}</p>
                                                <ul className="custom">
                                                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link>
                                                    </li>
                                                    <li><Link to="#"><i className="fab fa-twitter" /></Link>
                                                    </li>
                                                    <li><Link to="#"><i className="fab fa-pinterest-p" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Team;