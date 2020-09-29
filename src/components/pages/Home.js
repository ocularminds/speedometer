import React, { Component } from 'react';
import Header from '../layouts/Header';
import Paymenttype from '../sections/home/Paymenttype';
import Downloadapp from '../sections/home-two/Downloadapp';
import Process from '../sections/home/Process';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Process/>
                <Paymenttype/>
                <Downloadapp/>
            </div>
        );
    }
}

export default Home;