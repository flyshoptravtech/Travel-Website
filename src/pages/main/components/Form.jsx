import React from 'react'
import twoFive from "../../../assets/img/25602.jpg"

const Form = () => {
  return (
    <div className="image-cover hero-header bg-white" style={{background: `url('${twoFive}')no-repeat`}} data-overlay={5}>
            <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                    <div className="position-relative text-center mb-5">
                    <h1>Explore The World <span className="position-relative z-4">Around<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                            <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                            </path>
                            </svg>
                        </span></span> You</h1>
                    <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="navTabbs d-flex align-items-center justify-content-center w-100 mb-2">
                    <ul className="nav nav-pills lights medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#hotels"><i className="fa-solid fa-hotel me-2" />Hotels</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tours"><i className="fa-solid fa-globe me-2" />Tour</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#cabs"><i className="fa-solid fa-car me-2" />Cab</a>
                        </li>
                    </ul>
                    </div>
                    <div className="search-wrap bg-white rounded-3 p-3">
                    <div className="tab-content">
                        <div className="tab-pane show active" id="hotels">
                        <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold hdd-arrow">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="form-group mb-0">
                                    <div className="booking-form__input guests-input mixer-auto">
                                    <button name="guests-btn" id="guests-input-btn">1 Guest</button>
                                    <div className="guests-input__options" id="guests-input-options">
                                        <div>
                                        <span className="guests-input__ctrl minus" id="adults-subs-btn"><i className="fa-solid fa-minus" /></span>
                                        <span className="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
                                        <span className="guests-input__ctrl plus" id="adults-add-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                        <div>
                                        <span className="guests-input__ctrl minus" id="children-subs-btn"><i className="fa-solid fa-minus" /></span>
                                        <span className="guests-input__value"><span id="guests-count-children">0</span>Children</span>
                                        <span className="guests-input__ctrl plus" id="children-add-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                        <div>
                                        <span className="guests-input__ctrl minus" id="room-subs-btn"><i className="fa-solid fa-minus" /></span>
                                        <span className="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
                                        <span className="guests-input__ctrl plus" id="room-add-btn"><i className="fa-solid fa-plus" /></span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>	
                        </div>
                        <div className="tab-pane" id="flights">
                        <div className="row gx-lg-2 g-3">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="leaving form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                <div className="btn-flip-icon mt-md-0">
                                    <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left" /></button>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-groupp hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="lv">Las Vegas</option>
                                    <option value="la">Los Angeles</option>
                                    <option value="kc">Kansas City</option>
                                    <option value="no">New Orleans</option>
                                    <option value="kc">Jacksonville</option>
                                    <option value="lb">Long Beach</option>
                                    <option value="cl">Columbus</option>
                                    <option value="cn">Canada</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." readOnly="readonly" />
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Return.." readOnly="readonly" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12">
                            <div className="form-groupp hdd-arrow mb-0">
                                <select className="occupant form-control fw-bold">
                                <option value>Select</option>
                                <option value="lv">01 Adult</option>
                                <option value="la">02 Adult</option>
                                <option value="kc">03 Adult</option>
                                <option value="no">04 Adult</option>
                                <option value="kc">05 Adult</option>
                                <option value="lb">06 Adult</option>
                                <option value="cl">07 Adult</option>
                                <option value="cn">08 Adult</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-12">
                            <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass fs-5" /></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="tours">
                        <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="tour form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">Family Package</option>
                                    <option value="sd">Honymoon Package</option>
                                    <option value="sj">Group Package</option>
                                    <option value="ph">Desert</option>
                                    <option value="nl">History</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="cabs">
                        <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="pickup form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="drop form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* </row> */}
            </div>
    </div>
  )
}

export default Form