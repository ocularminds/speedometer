import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import blogbig from '../../../assets/images/blog/mainblog.jpg';
import blogauthor from '../../../assets/images/doctors/doctor11.jpg';
import comment1 from '../../../assets/images/doctors/doctor13.jpg';
import comment2 from '../../../assets/images/doctors/doctor14.jpg';
import comment3 from '../../../assets/images/doctors/doctor15.jpg';

class Blogdetail extends Component {
    render() {
        return (
            <section className="section-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-detail padding-20">
                                {/* article */}
                                <article className="post">
                                    <div className="post-wrapper">
                                        <div className="blog-img animate-img mb-xl-20">
                                            <Link to="/blog-detail">
                                                <img src={blogbig} className="image-fit" alt="img" />
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <h2><Link to="/blog-detail" className="text-custom-black fw-600">Success People Ask Better Question</Link></h2>
                                            <div className="post-meta-box">
                                                <div className="post-meta mb-xl-20">
                                                    <div className="author-img">
                                                        <img src={blogauthor} className="rounded-circle" alt="" />
                                                    </div>
                                                    <div className="author-meta">
                                                        <h6 className="no-margin"><Link to="/blog-detail" className="text-custom-black">Charles C. Pruitt</Link></h6>
                                                        <p className="no-margin text-light-grey"><Link to="/blog-detail" className="text-light-grey">Admin</Link> | 25 January , 2020</p>
                                                    </div>
                                                </div>
                                                <div className="post-metas mb-xl-20"> <span className="mr-2 fs-14"><Link to="/blog-detail" className="text-custom-black"><i className="fas fa-eye text-light-blue" /> 33</Link></span>
                                                    <span className="fs-14"><Link to="/blog-detail" className="text-custom-black"><i className="far fa-comment text-light-blue" /> 33</Link></span>
                                                </div>
                                            </div>
                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <h5 className="text-custom-black fw-600">Why do we choose it?</h5>
                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <h5 className="text-custom-black fw-600">Where does it come from?</h5>
                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <blockquote className="mb-xl-20">
                                                <p className="text-custom-black fw-600">@Sometimes by accident, sometimes on purpose with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus page maker including versions of lorem ipsum. Sometimes by accident, sometimes on purpose."</p>
                                            </blockquote>
                                            <h5 className="text-custom-black fw-600">Where does it come from?</h5>
                                            <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p className="text-light-white no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                    </div>
                                </article>
                                {/* article */}
                                <hr />
                                {/* tags & social */}
                                <div className="post-details-tags-social">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8">
                                            <div className="tags-box mb-xl-20"> <span className="fs-18 text-dark-white"><i className="fas fa-tags" /></span>
                                                <div className="tags"> <Link to="/blog-detail">Car Loan</Link>
                                                    <Link to="/blog-detail">Business Loan</Link>
                                                    <Link to="/blog-detail">Home Loan</Link>
                                                    <Link to="/blog-detail">CORPORATE LOAN</Link>
                                                    <Link to="/blog-detail">PERSONAL LOAN</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="social-media-box mb-xl-20">
                                                <ul>
                                                    <li><Link to="/blog-detail" className="fb"><i className="fab fa-facebook-f" /></Link>
                                                    </li>
                                                    <li><Link to="/blog-detail" className="tw"><i className="fab fa-twitter" /></Link>
                                                    </li>
                                                    <li><Link to="/blog-detail" className="gg"><i className="fab fa-google-plus-g" /></Link>
                                                    </li>
                                                    <li><Link to="/blog-detail" className="ln"><i className="fab fa-linkedin-in" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* tags & social */}
                                <hr className="mt-0" />
                                {/* post pagination */}
                                <div className="pagination-btn">
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" to="/blog-detail">Previous</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="/blog-detail">Next</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* post pagination */}
                                {/* comments */}
                                <div className="comment-box section-padding-top p-relative">
                                    <div id="comment-box">
                                        <h4 className="text-custom-black fw-600">Reviews [4]</h4>
                                        <ul className="comments">
                                            <li className="comment">
                                                <article>
                                                    <div className="comment-avatar">
                                                        <img src={comment1} className="rounded-circle" alt="comment" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-header">
                                                                <h5 className="text-custom-black fw-600 author mb-3">Rosalina Pong</h5>
                                                                <div className="post-date"> <Link to="/blog-detail" className="date text-custom-white">25 Dec 2020</Link>
                                                                </div>
                                                            </div>
                                                            <div className="comment-meta-reply"> <Link to="/blog-detail" className="comment-reply-link btn-first btn-submit text-light-blue"><i className="fas fa-reply" /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment">
                                                            <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>
                                            <li className="comment">
                                                <article>
                                                    <div className="comment-avatar">
                                                        <img src={comment2} className="rounded-circle" alt="comment" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-header">
                                                                <h5 className="text-custom-black fw-600 author mb-3">Brian Wright</h5>
                                                                <div className="post-date"> <Link to="/blog-detail" className="date text-custom-white">30 Nov 2020</Link>
                                                                </div>
                                                            </div>
                                                            <div className="comment-meta-reply"> <Link to="/blog-detail" className="comment-reply-link btn-first btn-submit text-light-blue"><i className="fas fa-reply" /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment">
                                                            <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <article>
                                                            <div className="comment-avatar">
                                                                <img src={comment3} className="rounded-circle" alt="comment" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-meta">
                                                                    <div className="comment-meta-header">
                                                                        <h5 className="text-custom-black fw-600 author mb-3">Sarah Wright</h5>
                                                                        <div className="post-date"> <Link to="/blog-detail" className="date text-custom-white">30 Nov 2020</Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-meta-reply"> <Link to="/blog-detail" className="comment-reply-link btn-first btn-submit text-light-blue"><i className="fas fa-reply" /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="comment">
                                                                    <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="comment-respond" id="respond">
                                            <h4 className="text-custom-black fw-600">Leave Comment</h4>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="text-custom-black fw-600 fs-14">Full Name</label>
                                                            <input type="text" name="#" className="form-control form-control-custom" placeholder="Full Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="text-custom-black fw-600 fs-14">Email I'd</label>
                                                            <input type="email" name="#" className="form-control form-control-custom" placeholder="Email I'd" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label className="text-custom-black fw-600 fs-14">Comment</label>
                                                            <textarea rows={4} name="#" className="form-control form-control-custom" placeholder="Comment" defaultValue={""} />
                                                        </div>
                                                        <button type="submit" className="btn-first btn-submit text-light-blue">Leave Comment</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* comments */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Blogdetail;