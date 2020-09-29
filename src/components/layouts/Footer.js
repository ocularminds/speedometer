import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import paymenticons from '../../assets/images/footer-bottom-img.png';

const twitterfeeds = [
    {
        feedtext: "Do you work with video? Help us improve our video offering by taking this quick 2 minute survey. ",
        url: "#",
        urltemplate: "demo.com",
        feeddate: "Feb 18, 2020",
    },
    {
        feedtext: "Do you work with video? Help us improve our video offering by taking this quick 2 minute survey. ",
        url: "#",
        urltemplate: "demo.com",
        feeddate: "Feb 18, 2020",
    },
    {
        feedtext: "Do you work with video? Help us improve our video offering by taking this quick 2 minute survey. ",
        url: "#",
        urltemplate: "demo.com",
        feeddate: "Feb 18, 2020",
    },
];

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redText: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 300
            });
        }, false);
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const classNames = this.state.isTop ? 'active' : '';
        const setting = {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            cssEase: 'linear',
            pauseOnHover: true
        }
        return (
            <div>
                <footer className="bg-black section-padding footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-md-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Useful Links</h4>
                                    </div>
                                    <ul className="custom links">
                                        <li> <Link to="/about" className="text-custom-white">About Us</Link>
                                        </li>
                                        <li> <Link to="/service" className="text-custom-white">Service</Link>
                                        </li>
                                        <li> <Link to="/blog" className="text-custom-white">Blog</Link>
                                        </li>
                                        <li> <Link to="/team" className="text-custom-white">Team</Link>
                                        </li>
                                        <li> <Link to="/contact" className="text-custom-white">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-md-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Featured Post</h4>
                                    </div>
                                    <ul className="custom popular_post">
                                        <li>
                                            <div className="post">
                                                <div className="post-wrapper">
                                                    <div className="popular_post_img animate-img">
                                                        <Link to="/blog-detail">
                                                            <img src="assets/images/insta/insta9.jpg" className="img-fluid image-fit" alt="#" />
                                                        </Link>
                                                    </div>
                                                    <div className="popular_post_title">
                                                        <h6><Link to="/blog-detail" className="text-custom-white fs-14 fw-400">8 Tips to Help You Finding New Home</Link></h6>
                                                        <div className="post-date">
                                                            <p className="text-white no-margin">March 20 2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post">
                                                <div className="post-wrapper">
                                                    <div className="popular_post_img animate-img">
                                                        <Link to="/blog-detail">
                                                            <img src="assets/images/insta/insta10.jpg" className="img-fluid image-fit" alt="#" />
                                                        </Link>
                                                    </div>
                                                    <div className="popular_post_title">
                                                        <h6><Link to="/blog-detail" className="text-custom-white fs-14 fw-400">Bedroom Colors You'll Never Regret</Link></h6>
                                                        <div className="post-date">
                                                            <p className="text-white no-margin">09 Jan 2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box mb-xs-80">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">Twitter Feeds</h4>
                                    </div>
                                    <Slider className="custom twitter-feed twitter-slider" {...setting}>
                                        {twitterfeeds.map((item, i) => (
                                            <li key={i}>
                                                <p className="tweet">{item.feedtext} <Link to={item.url}>{item.urltemplate} </Link>
                                                </p>
                                                <p className="timePosted"><Link to="#">Posted on {item.feeddate} </Link>
                                                </p>
                                            </li>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-box">
                                    <div className="footer-heading">
                                        <h4 className="text-custom-white no-margin">News Letter</h4>
                                    </div>
                                    <div className="newsletter">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-custom" placeholder="Email Id" />
                                            </div>
                                            <button className="btn-first btn-submit-fill btn-height full-width" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                    <div className="social-media">
                                        <ul className="custom social-media">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link>
                                            </li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link>
                                            </li>
                                            <li><Link to="#"><i className="fab fa-instagram" /></Link>
                                            </li>
                                            <li><Link to="#"><i className="fab fa-youtube" /></Link>
                                            </li>
                                            <li><Link to="#"><i className="fab fa-google-plus" /></Link>
                                            </li>
                                            <li><Link to="#"><i className="fab fa-pinterest-p" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="payment-logo mb-md-20"> <span className="text-custom-white fs-14 mr-3">We are accept</span>
                                    <div className="payemt-icon">
                                        <img src={paymenticons} alt="#" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="text-custom-white no-margin">© <Link to="#" target="_blank" className="text-custom-white">Metropolitanthemes</Link> - 2020 | All Right Reserved.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer */}
                {/* back to top */}
                <div id="back-top" className={`back-top ${classNames}`} onClick={() => this.scrollToTop()}> <Link to="#top"><i className="flaticon-up-arrow" /></Link>
                </div>
            </div>

        );
    }
}

export default Footer;