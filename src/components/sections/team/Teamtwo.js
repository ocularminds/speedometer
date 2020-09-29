import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import team1 from '../../../assets/images/doctors/doctor9.jpg'
import team2 from '../../../assets/images/doctors/doctor10.jpg'
import team3 from '../../../assets/images/doctors/doctor8.jpg'
import team4 from '../../../assets/images/doctors/doctor7.jpg';

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
        designation: "Corporate Loan Advisor",
        url: "/team",
    },
    {
        photo: team3,
        name: "Aiken Ward",
        designation: "Home Loan Advisor",
        url: "/team",
    },
    {
        photo: team4,
        name: "Babatunde Jon",
        designation: "Real State Advisor",
        url: "/team",
    },
]
class Teamtwo extends Component {
    render() {
        return (
            <div className="row doctors-team darkblue">
                {teampost.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                    <div className="doctor-item mb-xl-30">
                        <div className="doctor-img mb-xl-20">
                            <img src={item.photo} className="rounded-circle full-width" alt="" />
                            <Link to={item.url} className="detail-btn"><i className="fas fa-plus" /></Link>
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

export default Teamtwo;