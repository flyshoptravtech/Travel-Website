import React from 'react'
import routesImg from "../../../assets/img/destination/tr-1.jpg"

const InternationalRoutes = () => {
  return (
    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                <h2>Hot International Routes</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
            </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
                {
                    Array(3).fill(null).map((i,index)=>(
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="pop-touritem">
                            <a href="flight-search.html" className="card rounded-3 h-100 m-0 shadow-sm">
                                <div className="flight-thumb-wrapper">
                                <div className="popFlights-item-overHidden">
                                    <img src={routesImg} className="img-fluid" alt="true" />
                                </div>
                                </div>
                                <div className="touritem-middle position-relative p-3">
                                <div className="touritem-flexxer">
                                    <h4 className="city fs-6 m-0 fw-bold">
                                    <span>New York</span>
                                    <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z" fill="currentColor" />
                                        <path opacity="0.3" d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <span>Los Angeles</span>
                                    </h4>
                                    <p className="detail ellipsis-container">
                                    <span className="ellipsis-item__normal">Round-trip</span>
                                    <span className="separate ellipsis-item__normal" />
                                    <span className="ellipsis-item">3 days</span>
                                    </p>
                                </div>
                                <div className="flight-foots">
                                    <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">US$492</span>
                                    </h5>
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

export default InternationalRoutes