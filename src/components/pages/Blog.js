import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/blog/Breadcrumb';
import Bloggrid from '../sections/blog/Bloggrid';
import Footer from '../layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Bloggrid/>
                <Footer/>
            </div>
        );
    }
}

export default Blog;