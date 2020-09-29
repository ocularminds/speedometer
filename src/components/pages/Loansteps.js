import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/loan-steps/Breadcrumb';
import Loanstep from '../sections/loan-steps/Loanstep';
import Footer from '../layouts/Footer';

class Loansteps extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Loanstep/>
                <Footer/>
            </div>
        );
    }
}

export default Loansteps;