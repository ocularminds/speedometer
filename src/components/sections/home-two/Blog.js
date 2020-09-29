import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// blog img
import blogimg1 from '../../../assets/images/blog/blog7.jpg';
import blogimg2 from '../../../assets/images/blog/blog8.jpg';
import blogimg3 from '../../../assets/images/blog/blog9.jpg';
import blogimg4 from '../../../assets/images/blog/blog10.jpg';
// author img
import authorimg1 from '../../../assets/images/doctors/doctor13.jpg';
import authorimg2 from '../../../assets/images/doctors/doctor11.jpg';
import authorimg3 from '../../../assets/images/doctors/doctor12.jpg';
import authorimg4 from '../../../assets/images/doctors/doctor14.jpg';

const blogpost = [
    {
        photo: blogimg1,
        authorphoto: authorimg1,
        url: "/blog-detail",
        postdate: "25 January , 2020",
        authorname: "Charles C. Pruitt",
        title: "Bigger home still the goal right?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        views: "33",
        comments: "33",
        urltext: "Read More",
    },
    {
        photo: blogimg2,
        authorphoto: authorimg2,
        url: "/blog-detail",
        postdate: "25 January , 2020",
        authorname: "Charles C. Pruitt",
        title: "Choosing right education loan",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        views: "33",
        comments: "33",
        urltext: "Read More",
    },
    {
        photo: blogimg3,
        authorphoto: authorimg3,
        url: "/blog-detail",
        postdate: "25 January , 2020",
        authorname: "Charles C. Pruitt",
        title: "Bigger home still the goal right?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        views: "33",
        comments: "33",
        urltext: "Read More",
    },
    {
        photo: blogimg4,
        authorphoto: authorimg4,
        url: "/blog-detail",
        postdate: "25 January , 2020",
        authorname: "Charles C. Pruitt",
        title: "How Is Mediation Useful in Home Loan Cases?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        views: "33",
        comments: "33",
        urltext: "Read More",
    },
]


class Blog extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
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
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }]
        };
        return (
            <section className="section-padding our-articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Blog</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="blog-slider" {...settings}>
                                {blogpost.map((item, i) => (
                                    <article key={i} className="col-12 post">
                                        <div className="post-wrapper">
                                            <div className="blog-img animate-img">
                                                <Link to={item.url}>
                                                    <img src={item.photo} className="full-width" alt="blog" />
                                                </Link>
                                            </div>
                                            <div className="blog-meta padding-20">
                                                <div className="post-meta">
                                                    <div className="author-img">
                                                        <img src={item.authorphoto} className="rounded-circle" alt="" />
                                                    </div>
                                                    <div className="author-meta">
                                                        <h6 className="no-margin"><Link to={item.url} className="text-custom-white">{item.authorname}</Link></h6>
                                                        <p className="no-margin text-custom-white"><Link to={item.url} className="text-custom-white">Admin</Link> | {item.postdate}</p>
                                                    </div>
                                                </div>
                                                <div className="post-content">
                                                    <h2><Link to={item.url} className="text-custom-black fw-600">{item.title}</Link></h2>
                                                    <p className="text-light-white">{item.description}</p>
                                                </div>
                                                <div className="blog-links">
                                                    <div className="post-metas"> <span className="mr-2 fs-14"><Link to={item.url} className="text-custom-black"><i className="fas fa-eye text-light-blue" /> {item.views}</Link></span>
                                                        <span className="fs-14"><Link to={item.url} className="text-custom-black"><i className="far fa-comment text-light-blue" /> {item.comments}</Link></span>
                                                    </div> <Link to={item.url} className="text-light-blue fs-14 fw-600">{item.urltext}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Blog;
