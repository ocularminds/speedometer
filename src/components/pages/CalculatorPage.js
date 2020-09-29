import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/loan-calculator/Breadcrumb';
import Contents from '../sections/loan-calculator/Contents';
import Footer from '../layouts/Footer';

class CalculatorPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Contents/>
                <Footer/>
            </div>
        );
    }
}

export default CalculatorPage;