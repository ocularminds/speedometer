import React from 'react'
import { Link } from 'react-router-dom';

export default () => {

  return (
    <div className="step-tab-inner">
      <div className="heading text-center">
        <h4 className="text-custom-black fw-600">Enter Basic Information</h4>
        <p className="text-custom-black">Check your business's eligibility without impacting your credit.<sup>*</sup></p>
      </div>
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Name</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Business Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">First Name</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="First Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Last Name</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Last Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Phone No.</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Phone No." />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Email Address</label>
              <input type="email" name="#" className="form-control form-control-custom" placeholder="Email Address" />
            </div>
          </div>
          <div className="col-12">
            <div className="radio-box form-group">
              <div className="custom-radio">
                <input id="phone1" name="phonetype" type="radio" defaultChecked />
                <label htmlFor="phone1">Business</label>
              </div>
              <div className="custom-radio">
                <input id="phone2" name="phonetype" type="radio" />
                <label htmlFor="phone2">Mobile</label>
              </div>
              <div className="custom-radio">
                <input id="phone3" name="phonetype" type="radio" />
                <label htmlFor="phone3">Home</label>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Primary Loan Purpose</label>
              <select className="custom-select form-control form-control-custom">
                <option>Purchase business location</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Reference</label>
              <select className="custom-select form-control form-control-custom">
                <option>Banner/Digital Ad</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="custom-checkbox text-custom-black">
                <input type="checkbox" name="#" />
                <span className="checkmark" />
  I Agree to the <Link to="#">terms &amp; conditions</Link> and <Link to="#">privacy policy.</Link>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
