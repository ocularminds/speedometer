import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../assets/images/homepage/icon1a.png';
import icon2 from '../../../assets/images/homepage/icon1b.png';
import icon3 from '../../../assets/images/homepage/icon1c.png';
import icon4 from '../../../assets/images/homepage/icon1d.png';

const processpost = [
    {
        icon: icon1,
        parentcls:"exp-cal-img mb-md-30",
        title:"Multi-Currency",
        para:"Shop with less worry. We can calcuate your duty and tax from different countries you are importing from.",
        urltext:"Learn More",
        url:"/contact",
    },
    {
        icon: icon2,
        parentcls:"exp-cal-img mb-md-30",
        title:"Duty Calculator",
        para:"Use our Duty Calculator tool  to calculate import duty & taxes for hundreds of destinations worldwide.",
        urltext:"Calculate Import Duty Now",
        url:"/calculator",
    },
    {
        icon: icon3,
        parentcls:"exp-cal-img mb-xs-30",
        title:"API Access",
        para:"Get a hands-free approach to obtaining duty and tax information by integrating our API into your existing business solutions.",
        urltext:"Learn More",
        url:"/api",
    },
    {
        icon: icon4,
        parentcls:"exp-cal-img",
        title:"Instant Invoice",
        para:"What do you want to ship? We can provide you with instant quote.",
        urltext:"Learn More",
        url:"/invoice",
    },
]
class Process extends Component {
    render() {
        return (
            <section className="section-padding exp-cal parallax ln-process">
                <div className="overlay overlay-bg-black" />
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-white fw-700">&nbsp;</h3>
                            <div className="section-description">
                                <p className="text-custom-white"><b className="text-custom-white fw-700" style={{fontWeight:'bold',fontSize: '3em'}}>Duties</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {processpost.map((item, i) => (
                        <div key={i} className="col-lg-3 col-sm-6">
                            <div className={item.parentcls}>
                                <img src={item.icon} className="mb-xl-20" alt="whyexp" />
                                <h4 className="text-custom-white fw-600">{item.title}</h4>
                                <p className="text-custom-white text-left">{item.para}</p>
                                <Link to={item.url} className="text-custom-white fw-500 fs-14">{item.urltext}</Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

        );
    }
}

export default Process;