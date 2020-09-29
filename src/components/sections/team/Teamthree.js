import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import team1 from '../../../assets/images/doctors/doctor5.jpg'
import team2 from '../../../assets/images/doctors/doctor6.jpg'
import team3 from '../../../assets/images/doctors/doctor7.jpg'
import team4 from '../../../assets/images/doctors/doctor2.jpg'

const teampost = [
    {
        photo: team1,
        name: "Addison Smith",
        designation: "Home Loan Advisor",
        url: "/team",
    },
    {
        photo: team2,
        name: "Sarah Taylor",
        designation: "Educational Loan Advisor",
        url: "/team",
    },
    {
        photo: team3,
        name: "Aiken Ward",
        designation: "Business Loan Advisor",
        url: "/team",
    },
    {
        photo: team4,
        name: "Babatunde Jon",
        designation: "Personal Loan Advisor",
        url: "/team",
    },
]
class Teamthree extends Component {
    render() {
        return (
            <div className="row doctors-team style-2">
                {teampost.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                        <div className="doctor-item mb-md-30">
                            <div className="doctor-img mb-xl-20">
                                <img src={item.photo} className="full-width" alt="" />
                            </div>
                            <div className="doctor-content">
                                <h6><Link to={item.url} className="text-custom-black fw-700">{item.name}</Link></h6>
                                <p className="designation text-light-white">{item.designation}</p>
                                <ul className="custom">
                                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link>
                                    </li>
                                    <li><Link to="#"><i className="fab fa-twitter" /></Link>
                                    </li>
                                    <li><Link to="#"><i className="fab fa-pinterest-p" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}

export default Teamthree;