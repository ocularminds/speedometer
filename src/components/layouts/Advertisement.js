import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Advertisement extends Component {
  render() {
    return (
      <section className="section-padding LOANLY-advertisement parallax">
        <div className="row">
          <div className="col-12">
            <div className="promo-text">
              <p className=" text-white fs-20">Fast Approval - Less Fee</p>
              <h3 className="text-white">We are with you every step .</h3>
              <div className="btn-group">
                <Link to="/service" className="btn-first btn-submit fw-600 mb-xs-20">Our Services</Link>
                <Link to="/contact" className="btn-first btn-submit-fill fw-600 mb-xs-20">Start Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Advertisement;