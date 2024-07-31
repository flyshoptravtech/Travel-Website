import React from 'react'
import TopSection from './TopSection'
import { Link } from 'react-router-dom'

const GuestDetails = ({setbooking}) => {
  return (
    <>
        <section className="pt-4 gray-simple position-relative">
            <div className="container">
                <TopSection first={true} second={true} />
                <div className="row align-items-start">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="div-title d-flex align-items-center mb-3">
                    <h4>Guests Detail</h4>
                    </div>
                    <div className="row align-items-start">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="card mb-3">
                        <div className="card-header">
                            <h4>Guest 01</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Passport Number</label>
                                <input type="text" className="form-control" placeholder="Passport Number" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="side-block card rounded-2 p-3">
                        <h5 className="fw-semibold fs-6">Reservation Summary</h5>
                        <div className="mid-block rounded-2 border br-dashed p-2 mb-3">
                            <div className="row align-items-center justify-content-between g-2 mb-4">
                            <div className="col-6">
                                <div className="gray rounded-2 p-2">
                                <span className="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">Check-In</span>
                                <p className="text-dark fw-semibold lh-base text-md mb-0">27 Aug 2023</p>
                                <span className="text-dark text-md">From 14:40</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="gray rounded-2 p-2">
                                <span className="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">Check-Out</span>
                                <p className="text-dark fw-semibold lh-base text-md mb-0">31 Aug 2023</p>
                                <span className="text-dark text-md">By 11:50</span>
                                </div>
                            </div>
                            </div>
                            <div className="row align-items-center justify-content-between mb-4">
                            <div className="col-12">
                                <p className="text-muted-2 text-sm text-uppercase fw-medium mb-1">Total Length of Stay:</p>
                                <div className="d-flex align-items-center">
                                <div className="square--30 circle text-seegreen bg-light-seegreen"><i className="fa-regular fa-calendar" /></div><span className="text-dark fw-semibold ms-2">3 Days \
                                    2 Night</span>
                                </div>
                            </div>
                            </div>
                            <div className="row align-items-center justify-content-between">
                            <div className="col-12">
                                <p className="mb-0">King Bed Appolo Resort with 3 Rooms.</p>
                            </div>
                            </div>
                        </div>
                        <div className="bott-block d-block mb-3">
                            <h5 className="fw-semibold fs-6">Your Price Summary</h5>
                            <ul className="list-group list-group-borderless">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium mb-0">Rooms &amp; Offers</span>
                                <span className="fw-semibold">$750.52</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium mb-0">Total Discount<span className="badge rounded-1 text-bg-danger smaller mb-0 ms-2">10% off</span></span>
                                <span className="fw-semibold">-$7.50</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium mb-0">8% Taxes % Fees</span>
                                <span className="fw-semibold">$10.10</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-medium text-success mb-0">Total Price</span>
                                <span className="fw-semibold text-success">$772.40</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="text-center d-flex align-items-center justify-content-center mt-4">
                    <div className="btn btn-md btn-dark fw-semibold mx-2" onClick={setbooking}>
                        <i className="fa-solid fa-arrow-left me-2" />Previous
                    </div>
                    <Link to="/success-page" className="btn btn-md btn-primary fw-semibold mx-2">Make Your Payment<i className="fa-solid fa-arrow-right ms-2" /></Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default GuestDetails