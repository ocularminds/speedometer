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
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Entry type</label>
              <select className="custom-select form-control form-control-custom">
                <option>Sol Proprietorship</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Total annual business revenue</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="$ 10,000.00" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Number of full time employees</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder={1} />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Industry</label>
              <select className="custom-select form-control form-control-custom">
                <option>Professional and Technical Services</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Sub-industry</label>
              <select className="custom-select form-control form-control-custom">
                <option>Advertising Agencies and all other related services</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
