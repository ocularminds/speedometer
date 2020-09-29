import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import team1 from '../../../assets/images/doctors/doctor3.jpg';
import team2 from '../../../assets/images/doctors/doctor2.jpg';
import team3 from '../../../assets/images/doctors/doctor4.jpg';
import team4 from '../../../assets/images/doctors/doctor5.jpg';

const teampost = [
    {
        photo: team1,
        name: "Eachann Jhon",
        designation: "Loan Advisor",
        url: "/team",
    },
    {
        photo: team2,
        name: "Addison Smith",
        designation: "Business Loan Advisor",
        url: "/team",
    },
    {
        photo: team1,
        name: "Sarah Taylor",
        designation: "Loan Advisor",
        url: "/team",
    },
    {
        photo: team3,
        name: "Aiken Ward",
        designation: "Corporate Loan Advisor",
        url: "/team",
    },
    {
        photo: team4,
        name: "Babatunde Jon",
        designation: "Home Loan Advisor",
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
            <section className="section-padding doctors-team-style-2 bg-gray">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Teams</h3>
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
                                        <div className="team-block p-relative">
                                            <div className="inner-box">
                                                <div className="image animate-img">
                                                    <img src={item.photo} alt="img" className="full-width" />
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner p-relative full-height">
                                                            <ul className="team-social-box custom">
                                                                <li className="youtube">
                                                                    <Link to="#" className="fab fa-youtube fs-16" />
                                                                </li>
                                                                <li className="linkedin">
                                                                    <Link to="#" className="fab fa-linkedin fs-16" />
                                                                </li>
                                                                <li className="facebook">
                                                                    <Link to="#" className="fab fa-facebook-f fs-16" />
                                                                </li>
                                                                <li className="twitter">
                                                                    <Link to="#" className="fab fa-twitter fs-16" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lower-content p-relative text-center">
                                                    <h4><Link to={item.url} className="text-custom-black fw-600 fs-20">{item.name}</Link></h4>
                                                    <p className="designation text-light-white">{item.designation}</p>
                                                </div>
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