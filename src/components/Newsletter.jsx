import React from 'react'
import newsBg from "../assets/img/bg.jpg"

const Newsletter = () => {
  return (
    <div className="position-relative bg-cover py-5 bg-primary" style={{background: `url(${newsBg})no-repeat`}} data-overlay={5}>
        <div className="container">
            <div className="row align-items-center justify-content-between">
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="calltoAction-wraps position-relative py-5 px-4">
                <div className="ht-40" />
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                    <div className="calltoAction-title mb-5">
                        <h4 className="text-light fs-2 fw-bold lh-base m-0">Subscribe &amp; Get<br />Special Discount with GeoTrip.com
                        </h4>
                    </div>
                    <div className="newsletter-forms mt-md-0 mt-4">
                        <form>
                        <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                            <div className="col-xl-9 col-lg-8 col-md-8">
                            <div className="form-group m-0">
                                <input type="text" className="form-control bold ps-1 border-0" placeholder="Enter Your Mail!" />
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="form-group m-0">
                                <button type="button" className="btn btn-primary fw-medium full-width">Submit<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="ht-40" />
                </div>
            </div>
            </div>
        </div>
        </div>

  )
}

export default Newsletter