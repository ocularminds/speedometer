import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// clients
import client1 from '../../../assets/images/clients/client1.jpg';
import client2 from '../../../assets/images/clients/client2.jpg';
import client3 from '../../../assets/images/clients/client3.jpg';
import client4 from '../../../assets/images/clients/client4.jpg';
import client5 from '../../../assets/images/clients/client5.jpg';
import client6 from '../../../assets/images/clients/client6.jpg';

// Testimonials
import testiimg1 from '../../../assets/images/doctors/doctor6.jpg';
import testiimg2 from '../../../assets/images/doctors/doctor2.jpg';
import testiimg3 from '../../../assets/images/doctors/doctor3.jpg';
import testiimg4 from '../../../assets/images/doctors/doctor4.jpg';
import testiimg5 from '../../../assets/images/doctors/doctor5.jpg';

// Clients
const clients = [
    {
        photo: client1,
    },
    {
        photo: client2,
    },
    {
        photo: client3,
    },
    {
        photo: client4,
    },
    {
        photo: client5,
    },
    {
        photo: client6,
    },
];
// testimonials
const testimonialasimgs = [
    {
        photo: testiimg1,
    },
    {
        photo: testiimg2,
    },
    {
        photo: testiimg3,
    },
    {
        photo: testiimg4,
    },
    {
        photo: testiimg5,
    },
    {
        photo: testiimg1,
    },
    {
        photo: testiimg2,
    },
    {
        photo: testiimg3,
    },
    {
        photo: testiimg4,
    },
    {
        photo: testiimg5,
    },
];
const testimonialascontent = [
    {
        title: "Very satisfied!",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        name: "David Smith",
        designation: "Marketing Manager",
    },
    {
        title: "Very satisfied!",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        name: "Michael Jhonson",
        designation: "Engineering Officer",
    },
    {
        title: "Very satisfied!",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        name: "Mark Lee",
        designation: "Contractor",
    },
    {
        title: "Very satisfied!",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        name: "James Brown",
        designation: "Web Developer",
    },
    {
        title: "Very satisfied!",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        name: "Maria Lopez",
        designation: "Sales Manager",
    },
]
class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const setting = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            }]

        }
        const setting2 = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            dots: false,
            vertical: true,
        }
        return (
            <section className="section-padding findrate-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonials-box mb-md-80">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black fw-700">Our Testimonials</h3>
                                    </div>
                                    <div className="section-description">
                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                                <div className="testimonials-wrapper">
                                    <div className="col-12">
                                        <Slider
                                            asNavFor={this.state.nav2}
                                            ref={slider => (this.slider1 = slider)}
                                            focusOnSelect={true} className="testimonial-nav row mb-xl-40" {...setting}>
                                            {testimonialasimgs.map((item, i) => (
                                                <div key={i} className="slide-item col-12">
                                                    <div className="testimonials-author">
                                                        <Link to="/">
                                                            <img src={item.photo} className="image-fit" alt="img" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                        <Slider
                                            asNavFor={this.state.nav1}
                                            ref={slider => (this.slider2 = slider)}
                                            slidesToShow={1}
                                            swipeToSlide={true} className="testimonial-for row" {...setting2}>
                                            {testimonialascontent.map((item, i) => (
                                                <div key={i} className="slide-item col-12">
                                                    <div className="testimonials-inner">
                                                        <div className="testimonial-content">
                                                            <h4 className="text-custom-blue fw-700 fs-20">{item.title}</h4>
                                                            <p className="text-light-white mb-xl-20">{item.description}</p>
                                                            <p className="text-custom-black fw-700"><strong>{item.name}<br /><span className="text-light-blue fw-500">{item.designation}</span></strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clients-box">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black fw-700">Our Clients</h3>
                                    </div>
                                    <div className="section-description">
                                        <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                                <div className="clients-wrapper">
                                    {clients.map((item, i) => (
                                        <div key={i} className="client-box">
                                            <div className="client-item">
                                                <Link to="/">
                                                    <img src={item.photo} className="image-fit" alt="img" />
                                                </Link>
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

export default Testimonials;