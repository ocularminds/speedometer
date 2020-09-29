import React from 'react'

export default () => {

  return (
    <div className="step-tab-inner">
      <div className="heading text-center">
        <h4 className="text-custom-black fw-600">Enter Business Location</h4>
        <p className="text-custom-black">Check your business's eligibility without impacting your credit.<sup>*</sup></p>
      </div>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Address 1</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Business Address 1" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Address 2 (Optional)</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Business Address 2 (Optional)" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">City</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="City" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">State</label>
              <select className="custom-select form-control form-control-custom">
                <option>NY</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">ZIP</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="ZIP Code" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-500">This must be a physical address, not a PO Box number.</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="text-custom-black fs-14 fw-600">Business Phone No.</label>
              <input type="text" name="#" className="form-control form-control-custom" placeholder="Business Phone No." />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
