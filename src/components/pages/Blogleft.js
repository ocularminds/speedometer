import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/blog-left/Breadcrumb';
import Blogleftcontent from '../sections/blog-left/Blogleft';
import Footer from '../layouts/Footer';

class Blogleft extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Blogleftcontent/>
                <Footer/>
            </div>
        );
    }
}

export default Blogleft;