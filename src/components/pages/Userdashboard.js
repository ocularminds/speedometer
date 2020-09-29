import React, { Component } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../sections/user-dashboard/Breadcrumb';
import Dashboardcontent from '../sections/user-dashboard/dashboardcontent';

class Userdashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Dashboardcontent/>
            </div>
        );
    }
}

export default Userdashboard;