import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import clip from '../../../assets/images/video-bg.mp4';
import Poster from '../../../assets/images/banner/banner1.jpg';

const banner = [
    {
        title: "Dedicated To One Client At A Time",
        para: "Professional service with personal attention",
        urltext: "Explore",
        url: "/contact",
    },
    {
        title: "Welcome to fast, easy funding",
        para: "Professional service with personal attention",
        urltext: "Explore",
        url: "/contact",
    },
]
class Banner extends Component {

    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 400,
            focusOnSelect: true,
            cssEase: 'linear'
        };
        return (
            <div className="slider video-banner">
                <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
                <video playsInline="playsinline" className="jarallax" autoPlay="autoplay" muted="muted" loop="loop" poster={Poster}>
                    <source src={clip} type="video/mp4" />
                    <source src={clip} type="video/ogg" />
                </video>
                <div className="transform-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider className="banner-slider" {...settings}>
                                    {banner.map((item, i) => (
                                        <div key={i} className="slide-item">
                                            <div className="banner-text">
                                                <h1 className="text-custom-white fw-700">{item.title}</h1>
                                                <p className="text-custom-white">{item.para}</p> <Link to={item.url} className="btn-first btn-submit-fill">{item.urltext}</Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Banner;