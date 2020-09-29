import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="sub-header p-relative">
                <div className="overlay overlay-bg-black" />
                <div className="pattern" />
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sub-header-content p-relative">
                                    <h1 className="text-custom-white lh-default fw-600">Blog Detail</h1>
                                    <ul className="custom">
                                        <li> <Link to="/" className="text-custom-white">Home</Link>
                                        </li>
                                        <li> <Link to="/blog" className="text-custom-white">Blog</Link>
                                        </li>
                                        <li className="text-custom-white active">Blog Detail</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;