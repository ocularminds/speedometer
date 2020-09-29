import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from '../../layouts/Pagination';

// blog img
import blogimg1 from '../../../assets/images/blog/blog7.jpg';
import blogimg2 from '../../../assets/images/blog/blog8.jpg';
import blogimg3 from '../../../assets/images/blog/blog9.jpg';
import blogimg4 from '../../../assets/images/blog/blog10.jpg';
import blogimg5 from '../../../assets/images/blog/blog11.jpg';
import blogimg6 from '../../../assets/images/blog/blog12.jpg';
// author img
import authorimg1 from '../../../assets/images/doctors/doctor13.jpg';
import authorimg2 from '../../../assets/images/doctors/doctor11.jpg';
import authorimg3 from '../../../assets/images/doctors/doctor12.jpg';
import authorimg4 from '../../../assets/images/doctors/doctor14.jpg';
import authorimg5 from '../../../assets/images/doctors/doctor15.jpg';

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
        photo: blogimg5,
        authorphoto: authorimg5,
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
        photo: blogimg6,
        authorphoto: authorimg4,
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
        photo: blogimg4,
        authorphoto: authorimg2,
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
class Blogleft extends Component {
    render() {
        return (
            <section className="section-padding bg-gray our-articles">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4">
                            <div className="sidebar_wrap mb-md-80">
                                <Sidebar />
                            </div>
                        </aside>
                        <div className="col-lg-8">
                            <div className="row">
                                {blogpost.map((item, i) => (
                                    <article key={i} className="col-lg-6 col-md-6 post mb-xl-30">
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
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <nav className="section-padding-top">
                                        <Pagination />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Blogleft;
