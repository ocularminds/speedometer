import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Servicesidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-light-blue">
                        <h5 className="no-margin text-custom-white fw-600">Search</h5>
                    </div>
                    <form>
                        <div className="form-group mb-0">
                            <div className="search p-relative">
                                <input type="text" name="#" className="form-control form-control-custom" placeholder="Title or keywords" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-light-blue">
                        <h5 className="no-margin text-custom-white fw-600"> LOANLY Services</h5>
                    </div>
                    <ul className="custom sidebar-services">
                        <li className="active"> <Link to="/service-detail" className="text-custom-black fs-14">PERSONAL LOAN <span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">Business Loan<span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">Real State LOANLY<span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">CORPORATE LOAN<span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">Education LOAN<span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">Car Loan <span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">Personal Injuery<span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                        <li> <Link to="/service-detail" className="text-custom-black fs-14">Divorce LOANLY<span><i className="fas fa-chevron-right" /></span></Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-light-blue">
                        <h5 className="no-margin text-custom-white fw-600">Opening Hours</h5>
                    </div>
                    <table className="table text-custom-black">
                        <tbody>
                            <tr>
                                <td>Mon – Wed</td>
                                <td>-</td>
                                <td className="text-right">9:00 AM - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>-</td>
                                <td className="text-right">9:00 AM - 6:30 PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>-</td>
                                <td className="text-right">9:00 AM - 6:00 PM</td>
                            </tr>
                            <tr className="last-tr">
                                <td>Sun - Sun</td>
                                <td>-</td>
                                <td className="text-right">CLOSED</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title bg-light-blue">
                        <h5 className="no-margin text-custom-white fw-600">Recent News</h5>
                    </div>
                    <ul className="custom popular_post">
                        <li>
                            <div className="post">
                                <div className="post-wrapper">
                                    <div className="popular_post_img animate-img">
                                        <Link to="/service-detail">
                                            <img src="assets/images/blog/sblog1.jpg" className="img-fluid image-fit" alt="#" />
                                        </Link>
                                    </div>
                                    <div className="popular_post_title">
                                        <div className="post-date">
                                            <p className="text-custom-black no-margin">March 20 2020</p>
                                        </div>
                                        <h6><Link to="/service-detail" className="text-custom-black fs-16 fw-600">FAST APPROVAL  May For You If You Are Innocent</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="post">
                                <div className="post-wrapper">
                                    <div className="popular_post_img animate-img">
                                        <Link to="/service-detail">
                                            <img src="assets/images/blog/sblog2.jpg" className="img-fluid image-fit" alt="#" />
                                        </Link>
                                    </div>
                                    <div className="popular_post_title">
                                        <div className="post-date">
                                            <p className="text-custom-black no-margin">March 20 2020</p>
                                        </div>
                                        <h6><Link to="/service-detail" className="text-custom-black fs-16 fw-600">FAST APPROVAL  May For You If You Are Innocent</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="post">
                                <div className="post-wrapper">
                                    <div className="popular_post_img animate-img">
                                        <Link to="/service-detail">
                                            <img src="assets/images/blog/sblog3.jpg" className="img-fluid image-fit" alt="#" />
                                        </Link>
                                    </div>
                                    <div className="popular_post_title">
                                        <div className="post-date">
                                            <p className="text-custom-black no-margin">March 20 2020</p>
                                        </div>
                                        <h6><Link to="/service-detail" className="text-custom-black fs-16 fw-600">FAST APPROVAL  May For You If You Are Innocent</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Servicesidebar;