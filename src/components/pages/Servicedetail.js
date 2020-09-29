import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/service-detail/Breadcrumb';
import Servicedetailcontent from '../sections/service-detail/Servicedetail';
import Footer from '../layouts/Footer';

class Servicedetail extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Servicedetailcontent/>
                <Footer/>
            </div>
        );
    }
}

export default Servicedetail;