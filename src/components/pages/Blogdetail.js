import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/blog-detail/Breadcrumb';
import Blogdetailcontent from '../sections/blog-detail/Blogdetail';
import Footer from '../layouts/Footer';

class Blogdetail extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Blogdetailcontent/>
                <Footer/>
            </div>
        );
    }
}

export default Blogdetail;