import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import team1 from '../../../assets/images/doctors/doctor7.jpg';
import team2 from '../../../assets/images/doctors/doctor2.jpg';
import team3 from '../../../assets/images/doctors/doctor3.jpg';
import team4 from '../../../assets/images/doctors/doctor4.jpg';

const teampost = [
    {
        photo: team1,
        name: "Eachann Jhon",
        designation: "Loan Advisor",
        url: "/team",
    },
    {
        photo: team2,
        name: "Addison Smith",
        designation: "Car Advisor",
        url: "/team",
    },
    {
        photo: team3,
        name: "Sarah Taylor",
        designation: "Home Loan Advisor",
        url: "/team",
    },
    {
        photo: team4,
        name: "Aiken Ward",
        designation: "Home Loan Advisor",
        url: "/team",
    },
]
class Teamone extends Component {
    render() {
        return (
            <div className="row doctors-team-style-2">
                {teampost.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                        <div className="team-block p-relative mb-xl-30">
                            <div className="inner-box">
                                <div className="image animate-img">
                                    <img src={item.photo} alt="img" className="full-width" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner p-relative full-height">
                                            <ul className="team-social-box custom">
                                                <li className="youtube">
                                                    <Link to="#" className="fab fa-youtube fs-16" />
                                                </li>
                                                <li className="linkedin">
                                                    <Link to="#" className="fab fa-linkedin fs-16" />
                                                </li>
                                                <li className="facebook">
                                                    <Link to="#" className="fab fa-facebook-f fs-16" />
                                                </li>
                                                <li className="twitter">
                                                    <Link to="#" className="fab fa-twitter fs-16" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-content p-relative text-center">
                                    <h4><Link to={item.url} className="text-custom-black fw-600 fs-20">{item.name}</Link></h4>
                                    <p className="designation text-light-white">{item.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}

export default Teamone;