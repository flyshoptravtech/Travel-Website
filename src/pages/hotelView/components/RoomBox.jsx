import React from "react";
import roomImg from "../../../assets/img/hotel/hotel-10.jpg";
import { Link, useParams } from 'react-router-dom';

const RoomBox = ({ item }) => {

    const { checkin,checkout } = useParams();

  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          <h6 className="fw-semibold mb-0">{item.room_type}</h6>
        </div>
        <div className="card-body">
          <div className="row align-items-start">
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="roomavls-groups">
                <div className="roomavls-thumb mb-2">
                  <img
                    src={roomImg}
                    className="img-fluid rounded-2"
                    alt="true"
                  />
                </div>
                <div className="roomavls-caps">
                  <div className="roomavls-escols d-flex align-items-start mb-2">
                    {item.bed_type != null ? (
                      <span className="label bg-light-purple text-purple me-2">
                        {item.bed_type}
                      </span>
                    ) : (
                      ""
                    )}
                    {item.size != null ? (
                      <span className="label bg-light-purple text-purple">
                        {item.size} Sq.feet
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="roomavls-lists">
                    <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                      {item.room_amenties.map((item, index) => (
                        <li className="col-6" key={index}>
                          <span className="text-muted-2 text-md">
                            <i className="fa-solid fa-circle-arrow-right"></i>{" "}
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8">
              <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
                <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                  <div className="typsofrooms-wrap">
                    <div className="d-flex align-items-center">
                      <h6 className="fs-6 fw-semibold mb-1 me-2">
                        Your Choice
                      </h6>
                      <Link to="#" className="text-muted fs-6">
                        <i className="fa-solid fa-circle-question" />
                      </Link>
                    </div>
                    <div className="typsofrooms-groups d-flex align-items-start">
                      <div className="typsofrooms-brk1 mb-4">
                        <ul className="row align-items-center g-1 mb-0 p-0 mt-2">
                          {item.price.no_of_person_allowed && (
                            <li className="col-12">
                              <span className="text-muted-2 text-md">
                                <i className="fa-solid fa-user-group me-2" />
                                Number of person allowed{" "}
                                {item.price.no_of_person_allowed}
                              </span>
                            </li>
                          )}
                          {item.price.extra_bed_charge && (
                            <li className="col-12">
                              <span className="text-muted-2 text-md">
                                <i className="fa-solid fa-bed me-2" />
                                Charge for Extra Bed is ₹
                                {item.price.extra_bed_charge}
                              </span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="typsofrooms-action col-auto">
                    <div className="prcrounce-groups">
                      <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                        <div className="text-dark fw-semibold fs-4">
                          INR ₹
                          {item.price.longweek_end_price !== 0
                            ? item.price.longweek_end_price
                            : item.price.black_out_date_price !== 0
                            ? item.price.black_out_date_price
                            : item.price.room_price}
                        </div>
                      </div>
                    </div>
                    <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                      <div className="prcrounce-sngbuttons d-flex">
                        <Link
                          to={`/booking-page/${item.price._id}/${checkin}/${checkout}`}
                          className="btn btn-sm btn-primary rounded-1 fw-medium px-4"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBox;
