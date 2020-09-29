import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Particles from 'react-particles-js';

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
            <div className="slider parallax overlay-bg" id="banner-animation">
                <div className="side-lines"> <span className="box" />
                    <span className="text">Loanly</span>
                    <span className="line" />
                </div>
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
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            }, "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },

                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true,
                        "config_demo": {
                            "hide_card": false,
                            "background_color": "#b61924",
                            "background_image": "",
                            "background_position": "50% 50%",
                            "background_repeat": "no-repeat",
                            "background_size": "cover"
                        }
                    }} />
            </div>

        );
    }
}

export default Banner;