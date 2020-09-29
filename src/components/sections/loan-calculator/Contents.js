import React, { Component } from 'react';

class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 10000,
            show: true,
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1000 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1000) {
            this.setState({
                clicks: 50000,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1000,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        return (
            <section className="section-padding-bottom ln-loan-calculator-style">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="ln-loan-calculator-wrap">
                                <h4 className="text-center text-custom-black fw-600">Calculate Import Duty & Tax</h4>
                                  <div className="loan-price-wrap">
									  <div className="form-group">
									      <label htmlFor="product" className="text-custom-black fw-600">Product Description</label>
									      <input type="text" className="form-control form-control-custom" id="product" placeholder="For example: Phone, Piano"/>
									  </div>
                                    <div className="form-row">
									    <div className="form-group col-md-6">
									      <label htmlFor="inputEmail4" className="text-custom-black fw-600">Importing From</label>
										  <select className="form-control form-control-custom">
												<option value="NGN" selected>China</option>
												<option value="UAE">United Arab Emirate</option>
									      </select>
									    </div>
									    <div className="form-group col-md-6">
									      <label htmlFor="inputEmail4" className="text-custom-black fw-600">Importing To</label>
										  <select id="inputState" className="form-control form-control-custom">
												<option selected>Nigeria</option>
												<option>...</option>
									      </select>
									    </div>
									</div>
									<div className="form-row">
										<div className="form-group col-md-6">
										  <label className="text-custom-black fw-600">Product Cost</label>
										  <input type="text" className="form-control form-control-custom" value="0.00"/>
										</div>
										<div className="form-group col-md-6">
										<label className="text-custom-black fw-600">Type</label>
										  <select id="inputState" className="form-control form-control-custom">
											<option selected value="FOB">Free on board</option>
											<option value="CIF">Insurance + Freight</option>
									      </select>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-md-6">
										  <label className="text-custom-black fw-600">Shipping Cost</label>
										  <input type="text" className="form-control form-control-custom" value="0.00"/>
										</div>
										<div className="form-group col-md-6">
										  <label className="text-custom-black fw-600">Insurrance Cost</label>
										  <input type="text" className="form-control form-control-custom" value="0.00"/>
										</div>
									  </div>
                                    <div className="form-group">
                                        <div className="custom-radio">
                                            <input id="loanstep1" defaultChecked name="loanstep" defaultValue={30} type="radio" />
                                             <label htmlFor="loanstep1">
                                                    <span className="upper-text">
                                                        Port Surcharge
                                                      <span className="fw-600">NGN 43,000.00</span>
                                                    </span>
                                                    <span className="upper-text">
                                                        Calculated VAT
														  <span className="fw-600">
																NGN 3,000.00
														  </span>
                                                    </span>
                                                <span className="radio-loan-amount-wrap">
													<span className="upper-text">
														Duty
													   <span>Payable to government</span>
													</span>
													<span className="bottom-text">
														<span>Total</span>
														<span>NGN 1,672.00</span>
                                                   </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                     <div className="text-center"><button type="submit" className="btn btn-first btn-submit-fill btn-height btn-lg">Calculate</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contents;