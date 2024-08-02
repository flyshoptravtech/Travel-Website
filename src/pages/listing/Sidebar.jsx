import React from 'react'
import { useFilterContext } from '../../context/filterContext';

const Sidebar = ({searchNo}) => {
  const rating = [1,2,3,4,5];
  const propertyArr= ['Villas','Luxury Suit']
  const {handleUpdateFilter} = useFilterContext()
  
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
        <div className="filter-searchBar bg-white rounded-3">
          <div className="filter-searchBar-head border-bottom">
            <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
              <div className="searchBar-headerfirst">
                <h6 className="fw-bold fs-5 m-0">Filters</h6>
                <p className="text-md text-muted m-0">Showing {searchNo} Hotels</p>
              </div>
            </div>
          </div>
          <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-wrap">
                <input type="text" name="text" className='form-control' placeholder='Search by Name' onChange={handleUpdateFilter} />
              </div>
            </div>
          <div className="filter-searchBar-body">
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Property Type</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-2 gy-2 mb-0">
                  {
                    propertyArr.map((item, index) => (
                      <li key={index} className="col-6">
                        <input type="checkbox" className="btn-check" id={item} name='property_type' value={item} onChange={handleUpdateFilter} />
                        <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor={item}>{item}</label>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in IN ₹</h6>
              </div>
              <div className="searchBar-single-wrap">
                {/* <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" /> */}
              </div>
            </div>
            <div className="searchBar-single px-3 py-3 border-bottom">
              <div className="searchBar-single-title d-flex mb-3">
                <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Star Ratings</h6>
              </div>
              <div className="searchBar-single-wrap">
                <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                  {
                    rating.map((item,index)=>(
                      <li className="col-12" key={index}>
                        <div className="form-check lg">
                          <div className="frm-slicing d-flex align-items-center">
                            <div className="frm-slicing-first">
                              <input className="form-check-input" type="checkbox" id={`${item}star`} name='rating' value={item} onChange={handleUpdateFilter} />
                              <label className="form-check-label" htmlFor={`${item}star`} />
                            </div>
                            <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                              <div className="frms-flex d-flex align-items-center">
                                <div className="frm-slicing-ico text-md">
                                  {
                                    Array(item).fill(null).map((_,index)=>(
                                      <i key={index} className="fa fa-star text-warning" />
                                    ))
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
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
          </div>
        </div>
      </div>
  )
}

export default Sidebar