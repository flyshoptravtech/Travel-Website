import React from 'react'
import hotelImg from "../../../assets/img/hotel/hotel-1.jpg"

const PopularHotel = () => {
  return (
    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                <h2>Popular Resorts In Chicago</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
            </div>
            </div>
            <div className="row justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
                {
                    Array(2).fill(null).map(()=>(
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="pop-touritem">
                            <a href="#" className="card rounded-3 border m-0">
                                <div className="flight-thumb-wrapper">
                                <div className="popFlights-item-overHidden">
                                    <img src={hotelImg} className="img-fluid" alt />
                                </div>
                                </div>
                                <div className="touritem-middle position-relative p-3">
                                <div className="touritem-flexxer">
                                    <h4 className="city fs-title m-0 fw-bold">
                                    <span>Mercure Singapore Tyrwhitt</span>
                                    </h4>
                                    <p className="detail ellipsis-container">
                                    <span className="ellipsis-item__normal">Delhi</span>
                                    <span className="separate ellipsis-item__normal" />
                                    <span className="ellipsis-item">3.5 Km From Delhi</span>
                                    </p>
                                    <div className="touritem-centrio mt-4">
                                    <div className="d-block position-relative"><span className="label bg-light-success text-success">Free Cancellation Till 10 Aug 23</span></div>
                                    <div className="aments-lists mt-2">
                                        <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                                        <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                                        <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                                        <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                                        <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                                        <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                                        <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="trsms-foots mt-4">
                                    <div className="flts-flex d-flex align-items-end justify-content-between">
                                    <div className="flts-flex-strat">
                                        <div className="d-flex align-items-center justify-content-start">
                                        <span className="label bg-seegreen text-light">15% Off</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                        <div className="text-dark fw-bold fs-4">US$59</div>
                                        <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">US$79</div>
                                        </div>
                                        <div className="d-flex align-items-start flex-column">
                                        <div className="text-muted-2 text-sm">Per Night</div>
                                        </div>
                                    </div>
                                    <div className="flts-flex-end">
                                        <div className="row align-items-center justify-content-end gx-2">
                                        <div className="col-auto text-start text-md-end">
                                            <div className="text-md text-dark fw-medium">Exceptional</div>
                                            <div className="text-md text-muted-2">3,014 reviews</div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default PopularHotel