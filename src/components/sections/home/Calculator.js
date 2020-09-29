import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calculator extends Component {
    render() {
        return (
            <section className="section-padding pb-0 exp-cal2">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-white fw-700">Duty Calculator</h3>
                            <div className="section-description">
                                <p className="text-light-white">Calculate import duty, taxes and customs charges when you are importing from the EU, USA, Russia, China and other countries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8 ">
                            <div className="exp-cal2-duty">
                                <div className="row">
                                    <div className="col-md-5">
                                        <p className="fw-600 text-center">Enter your duty amount</p>
                                        <div className="exp-cal2-input">
                                            <input placeholder="$0" maxLength={10} name="calculator" type="text" defaultValue={100} id="num1" />
                                            <input placeholder="$0" maxLength={10} className="d-none" name="calculator" defaultValue={2} type="text" id="num2" />
                                        </div>
                                        <p className="fw-600 mt-2 fs-13">please enter amount $100 to $1000</p>
                                    </div>
                                    <div className="col-md-2 align-self-center">
                                        <div className="exp-cal-icon">
                                            <button type="button" id="calculate"><i className="fa fa-angle-right" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <p className="fw-600 text-center exp-cal2-content">Total Duty</p>
                                        <div className="ex-calculate-value">
                                            <input type="text" name="sum" id="sum" defaultValue="$50" readOnly /> <Link to="/">How do we calculate this?</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center"> <Link to="/calculator" className="btn-first btn-submit-fill ">Find my Rates</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Calculator;