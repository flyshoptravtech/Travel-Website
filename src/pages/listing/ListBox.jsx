import React from "react";
import hotelImg from "../../assets/img/hotel/hotel-1.jpg"

const ListBox = () => {
  return (
    <div className="col-xl-12 col-lg-12 col-12">
      <div className="card list-layout-block rounded-3 p-3">
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md">
            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
              <img
                className="img-fluid h-100 object-fit"
                src={hotelImg}
                alt="image"
              />
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
              <ul className="row gx-2 p-0 excortio">
                <li className="col-auto">
                  <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md fw-bold">.</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    9.8 km from Delhi Airport
                  </p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md fw-bold">.</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    <a href="#" className="text-primary">
                      Show on Map
                    </a>
                  </p>
                </li>
              </ul>
              <div className="detail ellipsis-container mt-3">
                <span className="ellipsis">Parking</span>
                <span className="ellipsis">WiFi</span>
                <span className="ellipsis">Eating</span>
                <span className="ellipsis">Cooling</span>
                <span className="ellipsis">Pet</span>
              </div>
              <div className="position-relative mt-3">
                <div className="fw-medium text-dark">
                  Standard Twin Double Room
                </div>
                <div className="text-md text-muted">Last booed 25min ago</div>
              </div>
              <div className="position-relative mt-4">
                <div className="d-block position-relative">
                  <span className="label bg-light-success text-success">
                    Free Cancellation, till 1 hour of Pick up
                  </span>
                </div>
                <div className="text-md">
                  <p className="m-0">
                    <a href="#" className="text-primary">
                      Login
                    </a>{" "}
                    &amp; get additional $15 Off Using
                    <span className="text-primary">Visa card</span>
                  </p>
                </div>
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
                  4.8
                </div>
              </div>
            </div>
            <div className="position-relative mt-auto full-width">
              <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                <span className="label bg-success text-light">15% Off</span>
              </div>
              <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                  US$79
                </div>
                <div className="text-dark fw-bold fs-3">$59</div>
              </div>
              <div className="d-flex align-items-start align-items-md-end justify-content-start justify-content-md-end flex-column mb-2">
                <div className="text-muted-2 text-sm">
                  +$22 taxes &amp; Fees
                </div>
                <div className="text-muted-2 text-sm">For 2 Nights</div>
              </div>
              <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                <a
                  href="#"
                  className="btn btn-md btn-primary full-width fw-medium px-lg-4 pt-2"
                >
                  See Availability
                  <i className="fa-solid fa-arrow-trend-up ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
