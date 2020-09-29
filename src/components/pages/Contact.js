import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/contact/Breadcrumb';
import Contactform from '../sections/contact/Contactform';
import Contactinfo from '../sections/contact/Contactinfo';
import Footer from '../layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Contactform/>
                <Contactinfo/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;