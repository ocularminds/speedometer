import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/service/Breadcrumb';
import Servicecontent from '../sections/service/Servicecontent';
import Bookappointment from '../layouts/Bookappointment';
import Footer from '../layouts/Footer';

class Service extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Servicecontent/>
                <Bookappointment/>
                <Footer/>
            </div>
        );
    }
}

export default Service;