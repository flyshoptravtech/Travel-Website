import React from 'react'
import TopSection from './TopSection'
import demo from "../../assets/img/hotel/hotel-1.jpg"

const HotelDetails = ({setbooking}) => {
  return (
    <section className="pt-4 gray-simple position-relative">
            <div className="container">
                <TopSection first={false} second={false} third={false} />
                <div className="row align-items-start">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row align-items-start">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="card p-3 mb-xl-0 mb-lg-0 mb-3">
                        {/* Booking Info */}
                        <div className="card-box list-layout-block">
                            <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                                <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src={demo} alt="true" />
                                </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                                <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="d-inline-block">
                                    <i className="fa fa-star text-warning text-xs" />
                                    <i className="fa fa-star text-warning text-xs" />
                                    <i className="fa fa-star text-warning text-xs" />
                                    <i className="fa fa-star text-warning text-xs" />
                                    <i className="fa fa-star text-warning text-xs" />
                                    </div>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Hotel Chancellor@Orchard</h4>
                                <ul className="row g-2 p-0">
                                    <li className="col-auto">
                                    <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                    </li>
                                    <li className="col-auto">
                                    <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                    <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="col-auto">
                                    <div className="square--40 rounded-2 bg-primary text-light fw-semibold">4.8</div>
                                    </div>
                                    <div className="col-auto text-start ps-2">
                                    <div className="text-md text-dark fw-medium">Exceptional</div>
                                    <div className="text-md text-muted-2">3,014 reviews</div>
                                    </div>
                                </div>
                                <div className="position-relative mt-3">
                                    <div className="d-flex flex-wrap align-items-center">
                                    <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                        <div className="export-icon text-muted-2"><i className="fa-solid fa-bed" /></div>
                                        <div className="export ps-2">
                                        <span className="mb-0 text-muted-2 fw-semibold me-1">03</span><span className="mb-0 text-muted-2 text-md">Beds</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                        <div className="export-icon text-muted-2"><i className="fa-solid fa-bath" /></div>
                                        <div className="export ps-2">
                                        <span className="mb-0 text-muted-2 fw-semibold me-1">02</span><span className="mb-0 text-muted-2 text-md">Baths</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                        <div className="export-icon text-muted-2"><i className="fa-solid fa-house-flood-water-circle-arrow-right" /></div>
                                        <div className="export ps-2">
                                        <span className="mb-0 text-muted-2 fw-semibold me-1">5</span><span className="mb-0 text-muted-2 text-md">Floor</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                        <div className="export-icon text-muted-2"><i className="fa-solid fa-user-group" /></div>
                                        <div className="export ps-2 text-muted-2">
                                        <span className="mb-0 text-muted-2 fw-semibold me-1">04</span><span className="mb-0 text-muted-2 text-md">Guests</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Good to Know */}
                        <div className="flight-boxyhc mt-4">
                            <h4 className="fs-5">Good To Know</h4>
                            <div className="effloration-wrap">
                            <p>All Prices are in Indian Rupees and are subject to change without prior notice. In the case FIT
                                flight inclusive package, the full amount of the flight will be payable at the time of booking.
                            </p>
                            <ul className="row align-items-center g-1 mb-0 p-0">
                                <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-dot me-2" />Free Cancellation till 10 Aug 2023</span></li>
                                <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />10 days: 100%</span></li>
                                <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />10 to 15 days: 75% + Non Refundable
                                    Component</span></li>
                                <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />15 to 30 days: 30% + Non Refundable
                                    Component</span></li>
                                <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-dot me-2" />10Hotel / Air: 100% in case of non-refundable
                                    ticket / Hotel Room</span></li>
                                <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-circle-dot me-2" />10Cruise / Visa: On Actuals</span></li>
                            </ul>
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
                            <div className="row align-items-center justify-content-between mb-2">
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
                    <div className="btn btn-md btn-primary fw-semibold" onClick={setbooking}>Next<i className="fa-solid fa-arrow-right ms-2" /></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}

export default HotelDetails