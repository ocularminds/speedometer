import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// images
import blogimg1 from '../../../assets/images/blog/blog1.jpg';
import blogimg2 from '../../../assets/images/blog/blog2.jpg';
import blogimg3 from '../../../assets/images/blog/blog3.jpg';

const blogpost = [
    {
        photo: blogimg1,
        title: "Bigger home still the goal right?",
        description: "Lorem ipsum dolor sit in faucibus ipsum. Cras euismod faucibus sagittis.",
        blogdate: "4, Nov",
        authorname: "Michael Dav",
        urltext: "Read More",
        url: "/blog-detail",
    },
    {
        photo: blogimg2,
        title: "Choosing right education loan",
        description: "Lorem ipsum dolor sit in faucibus ipsum. Cras euismod faucibus sagittis.",
        blogdate: "29, June",
        authorname: "Jhone Deo",
        urltext: "Read More",
        url: "/blog-detail",
    },
    {
        photo: blogimg3,
        title: "FAST APPROVAL  May For You If You Are Innocent",
        description: "Lorem ipsum dolor sit in faucibus ipsum. Cras euismod faucibus sagittis.",
        blogdate: "30, May",
        authorname: "Linda Choi",
        urltext: "Read More",
        url: "/blog-detail",
    },
    {
        photo: blogimg1,
        title: "Bigger home still the goal right?",
        description: "Lorem ipsum dolor sit in faucibus ipsum. Cras euismod faucibus sagittis.",
        blogdate: "4, Nov",
        authorname: "Michael Dav",
        urltext: "Read More",
        url: "/blog-detail",
    },
    {
        photo: blogimg2,
        title: "Choosing right education loan",
        description: "Lorem ipsum dolor sit in faucibus ipsum. Cras euismod faucibus sagittis.",
        blogdate: "29, June",
        authorname: "Jhone Deo",
        urltext: "Read More",
        url: "/blog-detail",
    },
    {
        photo: blogimg3,
        title: "FAST APPROVAL  May For You If You Are Innocent",
        description: "Lorem ipsum dolor sit in faucibus ipsum. Cras euismod faucibus sagittis.",
        blogdate: "30, May",
        authorname: "Linda Choi",
        urltext: "Read More",
        url: "/blog-detail",
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
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }]
        };
        return (
            <section className="section-padding our_articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black fw-700">Our Blog</h3>
                            <div className="section-description">
                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 no-padding">
                            <Slider className="blog-slider" {...settings}>
                                {blogpost.map((item, i) => (
                                    <article key={i} className="post col-12">
                                        <div className="single-blog">
                                            <div className="post-meta">
                                                <div className="post-date"><Link to={item.url} className="text-custom-white">{item.blogdate}</Link>
                                                </div>
                                            </div>
                                            <div className="blog-photo">
                                                <img src={item.photo} className="full-width" alt="#" />
                                            </div>
                                            <div className="post-contnet">
                                                <h2 className="post-title text-custom-black">{item.title}</h2>
                                                <p className="text-light-white">{item.description}</p>
                                                <div className="post-author"> <span className="text-custom-black fw-500 fs-14">Post by <Link to={item.url} className="text-light-blue">{item.authorname}</Link></span>
                                                </div>
                                            </div>
                                            <div className="blog-overlay">
                                                <div className="right-text-effect post-content">
                                                    <h2 className="post-title"><Link to={item.url} className="text-white">{item.title}</Link></h2>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="blog-read-more-icon">
                                                    <div className="post-author"> <span className="text-custom-white fw-600 fs-14">Post by <Link to={item.url} className="text-white">{item.authorname}</Link></span>
                                                    </div> <Link to={item.url} className="fw-500 fs-14">{item.urltext}</Link>
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