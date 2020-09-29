import React, { Component } from 'react';
import Header from '../layouts/Header';
import Banner from '../sections/home-two/Banner';
import Intro from '../sections/home/Intro';
import About from '../sections/home/About';
import Mainservice from '../sections/home/Mainservice';
import Calculator from '../sections/home/Calculator';
import Loantable from '../sections/home/Loantable';
import Advertisement from '../layouts/Advertisement';
import Team from '../sections/home-two/Team';
import Downloadapp from '../sections/home-two/Downloadapp';
import Blog from '../sections/home-two/Blog';
import Bookappointment from '../layouts/Bookappointment';
import Testimonials from '../sections/home/Testimonials';
import Faqs from '../sections/home/Faqs';
import Footer from '../layouts/Footer';

class Hometwo extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Intro/>
                <About/>
                <Mainservice/>
                <Calculator/>
                <Loantable/>
                <Advertisement/>
                <Team/>
                <Downloadapp/>
                <Blog/>
                <Bookappointment/>
                <Testimonials/>
                <Faqs/>
                <Footer/>
            </div>
        );
    }
}

export default Hometwo;