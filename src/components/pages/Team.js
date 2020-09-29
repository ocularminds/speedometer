import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/team/Breadcrumb';
import Teamone from '../sections/team/Teamone';
import Teamtwo from '../sections/team/Teamtwo';
import Teamthree from '../sections/team/Teamthree';
import Footer from '../layouts/Footer';

class Team extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <section className="section-padding bg-gray">
                    <div className="container">
                        <Teamone/>
                        <Teamtwo/>
                        <Teamthree/>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Team;