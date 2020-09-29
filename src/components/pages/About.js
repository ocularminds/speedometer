import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/about/Breadcrumb';
import Aboutcontent from '../sections/about/About';
import History from '../sections/about/History';
import Story from '../sections/about/Story';
import Advertisement from '../layouts/Advertisement';
import Team from '../sections/about/Team';
import Footer from '../layouts/Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Aboutcontent/>
                <History/>
                <Story/>
                <Advertisement/>
                <Team/>
                <Footer/>
            </div>
        );
    }
}

export default About;