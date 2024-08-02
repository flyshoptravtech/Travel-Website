import React from "react";
import noImg from "../../assets/img/noImages.png"
import { Link } from "react-router-dom";
import NoDataFound from "./NoDataFound";

const ListBox = ({searchResults}) => {
  return (
    <>
      {
        searchResults.length <= 0 ?
        <NoDataFound/>
        :
        searchResults.map((item,index)=>(
          <div key={index} className="col-xl-12 col-lg-12 col-12">
            <div className="card list-layout-block rounded-3 p-3">
              <div className="row">
                <div className="col-xl-4 col-lg-3 col-md">
                  <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                    <img
                      className="img-fluid w-100 object-fit"
                      src={item.image === null ? noImg : item.image.image_path }
                      alt="hotel"
                      style={{height:"206px"}}
                    />
                  </div>
                </div>
                <div className="col-xl col-lg col-md">
                  <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                    <h4 className="fs-5 fw-bold mb-1">{item.property_name}</h4>
                    <ul className="row gx-2 p-0 excortio mb-0">
                      <li className="col-auto">
                        <p className="text-muted-2 text-md mb-0">{item.property_address},</p>
                      </li>
                      <li className="col-auto">
                        <p className="text-muted-2 text-md mb-0">{item.property_country}</p>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-start mb-4">
                      <div className="d-inline-block">
                        {
                          Array(item.rating).fill(null).map((_,index)=>(
                            <i key={index} className="fa fa-star text-warning text-xs" />
                          ))
                        }
                      </div>
                    </div>
                    <div className="detail ellipsis-container mt-3">
                      <span className="ellipsis">Parking</span>
                      <span className="ellipsis">WiFi</span>
                      <span className="ellipsis">Eating</span>
                      <span className="ellipsis">Cooling</span>
                      <span className="ellipsis">Pet</span>
                    </div>
                    <div className="position-relative mt-3">
                      <div className="fw-medium text-dark">
                        {item.property_type}
                      </div>
                      <div className="text-md text-muted">{item.property_business_name}</div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                  <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                    <div className="col-auto text-start text-md-end">
                      <div className="text-md text-dark fw-medium">Exceptional</div>
                      <div className="text-md text-muted-2">3,014 reviews</div>
                    </div>
                    <div className="col-auto">
                      <div className="square--40 rounded-2 bg-primary text-light">
                        {item.rating}
                      </div>
                    </div>
                  </div>
                  <div className="position-relative mt-auto full-width">
                    <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                      <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                        INR ₹{item.price + 999}
                      </div>
                      <div className="text-dark fw-bold fs-3">₹{item.price}</div>
                    </div>
                    <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                      <Link
                        to={`/hotel-view/${item.id}`} target="_"
                        className="btn btn-md btn-primary full-width fw-medium px-lg-4 pt-2"
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default ListBox;
