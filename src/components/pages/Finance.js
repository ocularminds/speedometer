import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/finance/Breadcrumb';
import Financecontent from '../sections/finance/Userinfodetails';
import Footer from '../layouts/Footer';

class Finance extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Financecontent/>
                <Footer/>
            </div>
        );
    }
}

export default Finance;