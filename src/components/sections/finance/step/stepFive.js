import React from 'react'

export default () => {

  return (
    <div className="step-tab-inner">
      <div className="heading text-center">
        <h4 className="text-custom-black fw-600">Tell us about your business.</h4>
        <p className="text-custom-black">Check your business's eligibility without impacting your credit.<sup>*</sup></p>
      </div>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Date of Birth</label>
              <input type="text" name="#" className="form-control datepickrnew form-control-custom" placeholder="01/01/1990" readOnly />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Social Security Number</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Social Security Number" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-1">
              <label className="text-custom-black fs-14 fw-600">Federal Tax ID</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Federal Tax ID" />
            </div>
            <label className="text-light-grey mb-xl-20">Enter your social security number (SSN) of your business is a sole proprietorship or single-owner LLC without a Federal Tax ID.</label>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Are you a citizen or permanent resident of the U.S.?</label>
              <div className="radio-box">
                <div className="custom-radio">
                  <input id="yes" name="nationality" type="radio" defaultChecked />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div className="custom-radio">
                  <input id="no" name="nationality" type="radio" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="custom-checkbox text-custom-black">
                <input type="checkbox" name="#" />
                <span className="checkmark" />
                              I agree to receive Loan disclosures electronically to any email address provided by me.
                            </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="custom-checkbox text-custom-black">
                <input type="checkbox" name="#" />
                <span className="checkmark" />
                                          I understand that by clicking the “Submit” button below, that I am giving Loanly, LLC and Loanly written instructions under the Fair Credit Reporting Act to obtain my personal and business credit reports and to evaluate my eligibility. Answering these questions lets me check my price and will not impact my credit score. I understand that if I sign a loan agreement, Loanly, LLC and Loanly will not perform credit checks and other public records checks, which may impact my credit score.
                                        </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
