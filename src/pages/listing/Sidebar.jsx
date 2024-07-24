import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
        <div className="filter-searchBar bg-white rounded-3">
          <div className="filter-searchBar-head border-bottom">
            <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
              <div className="searchBar-headerfirst">
                <h6 className="fw-bold fs-5 m-0">Filters</h6>
                <p className="text-md text-muted m-0">Showing 180 Hotels</p>
              </div>
              <div className="searchBar-headerlast text-end">
                <Link to="#" className="text-md fw-medium text-primary active">Clear All</Link>
              </div>
            </div>
          </div>
          <div className="filter-searchBar-body">
            {/* Bed types */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Bed Type</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-6">
                    <input type="checkbox" className="btn-check" id="doublebed" />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="doublebed">1 Double
                      Bed</label>
                  </li>
                  <li className="col-6">
                    <input type="checkbox" className="btn-check" id="2bed" />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="2bed">2 Beds</label>
                  </li>
                  <li className="col-6">
                    <input type="checkbox" className="btn-check" id="singlebed" />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="singlebed">1 Single
                      Bed</label>
                  </li>
                  <li className="col-6">
                    <input type="checkbox" className="btn-check" id="3beds" />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="3beds">3
                      Beds</label>
                  </li>
                  <li className="col-6">
                    <input type="checkbox" className="btn-check" id="kingbed" />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor="kingbed">King
                      Bed</label>
                  </li>
                </ul>
              </div>
            </div>
            {/* Popular Filters */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Popular Filters</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="fsq" />
                      <label className="form-check-label" htmlFor="fsq">Free Cancellation Available</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="bk1" />
                      <label className="form-check-label" htmlFor="bk1">Book @ ₹1</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="payh" />
                      <label className="form-check-label" htmlFor="payh">Pay At Hotel Available</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="brks" />
                      <label className="form-check-label" htmlFor="brks">Free Breakfast Included</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Pricing */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in US$</h6>
              </div>
              <div className="searchBar-single-wrap">
                <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" />
              </div>
            </div>
            {/* Customer Ratings */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Customer Ratings</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="fourfive" />
                          <label className="form-check-label" htmlFor="fourfive" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                            </div>
                            <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">4.5+</span></div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="fourplus" />
                          <label className="form-check-label" htmlFor="fourplus" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                            </div>
                            <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">4+</span></div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">10</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="threefive" />
                          <label className="form-check-label" htmlFor="threefive" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                            </div>
                            <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">3.5+</span></div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">08</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="threeplus" />
                          <label className="form-check-label" htmlFor="threeplus" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                            </div>
                            <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">3+</span></div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">26</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Star Ratings */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Star Ratings</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="fivestar" />
                          <label className="form-check-label" htmlFor="fivestar" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                            </div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="fourstar" />
                          <label className="form-check-label" htmlFor="fourstar" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                            </div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input className="form-check-input" type="checkbox" id="threestar" />
                          <label className="form-check-label" htmlFor="threestar" />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                              <i className="fa fa-star text-warning" />
                            </div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">16</span></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Amenities */}
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Amenities</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="wififree" />
                      <label className="form-check-label" htmlFor="wififree">Free Wifi</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="bkrsdt" />
                      <label className="form-check-label" htmlFor="bkrsdt">4 Breakfast included</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="pool" />
                      <label className="form-check-label" htmlFor="pool">Pool</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="parking" />
                      <label className="form-check-label" htmlFor="parking">Free Parking</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="acrion" />
                      <label className="form-check-label" htmlFor="acrion">Air Conditioning</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Popular Filters */}
            <div className="searchBar-single px-3 py-3">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Fun things To Do</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="beach" />
                      <label className="form-check-label" htmlFor="beach">Beach</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="ftns" />
                      <label className="form-check-label" htmlFor="ftns">Fitness center</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="cylc" />
                      <label className="form-check-label" htmlFor="cylc">Cycling</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="anms" />
                      <label className="form-check-label" htmlFor="anms">Animation Show</label>
                    </div>
                  </li>
                  <li className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="shpc" />
                      <label className="form-check-label" htmlFor="shpc">Shopping center</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sidebar