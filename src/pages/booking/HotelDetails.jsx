import React from "react";
import demo from "../../assets/img/hotel/hotel-1.jpg";

const HotelDetails = ({ details }) => {
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-12">
        <div className="card p-3 mb-xl-0 mb-lg-0 mb-3">
          <div className="card-box list-layout-block">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md">
                <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                  <img
                    className="img-fluid h-100 object-fit"
                    src={demo}
                    alt="true"
                  />
                </div>
              </div>
              <div className="col-xl col-lg col-md">
                <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                  <h4 className="fs-5 fw-bold mb-1">
                    Hotel Chancellor@Orchard
                  </h4>
                  <ul className="row g-2 p-0">
                    <li className="col-auto">
                      <p className="text-muted-2 text-md">
                        Waterloo and Southwark
                      </p>
                    </li>
                    <li className="col-auto">
                      <p className="text-muted-2 text-md fw-bold">.</p>
                    </li>
                    <li className="col-auto">
                      <p className="text-muted-2 text-md">
                        9.8 km from Delhi Airport
                      </p>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center mb-3">
                    <div className="col-auto">
                      <div className="square--40 rounded-2 bg-primary text-light fw-semibold">
                        4.8
                      </div>
                    </div>
                    <div className="col-auto text-start ps-2">
                      <div className="text-md text-dark fw-medium">
                        Exceptional
                      </div>
                      <div className="text-md text-muted-2">3,014 reviews</div>
                    </div>
                  </div>
                  <div className="position-relative mt-3">
                    <div className="d-flex flex-wrap align-items-center">
                        {
                            details.property.bed_type &&
                            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                <div className="export-icon text-muted-2">
                                <i className="fa-solid fa-bed" />
                                </div>
                                <div className="export ps-2">
                                <span className="mb-0 text-muted-2 fw-semibold text-md">
                                    {details.property.bed_type}
                                </span>
                                </div>
                            </div>
                        }
                        {
                            details.property.size &&
                            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                <div className="export-icon text-muted-2">
                                <i class="fa-solid fa-hotel"></i>
                                </div>
                                <div className="export ps-2">
                                <span className="mb-0 text-muted-2 fw-semibold me-1">
                                    {details.property.size} 
                                </span>
                                <span className="mb-0 text-muted-2 text-md">Sq.feet</span>
                                </div>
                            </div>
                        }
                        {
                            details.no_of_person_allowed &&
                            <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                <div className="export-icon text-muted-2">
                                <i className="fa-solid fa-user-group" />
                                </div>
                                <div className="export ps-2 text-muted-2">
                                <span className="mb-0 text-muted-2 fw-semibold me-1">
                                    {details.no_of_person_allowed < 10
                                    ? `0${details.no_of_person_allowed}`
                                    : details.no_of_person_allowed}
                                </span>
                                <span className="mb-0 text-muted-2 text-md">Guests</span>
                                </div>
                            </div>
                        }
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
              <p>
                All Prices are in Indian Rupees and are subject to change
                without prior notice. In the case FIT flight inclusive package,
                the full amount of the flight will be payable at the time of
                booking.
              </p>
              <ul className="row align-items-center g-1 mb-0 p-0">
                {
                    details.extra_bed_charge && 
                    <li className="col-12">
                    <span className="text-muted-2 text-md">
                        <i className="fa-solid fa-circle-dot me-2" />
                        Extra Bed Charges ₹{details.extra_bed_charge}/-
                    </span>
                    </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
