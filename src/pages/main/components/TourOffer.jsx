import React from 'react'
import city1 from "../../../assets/img/city/ct-6.png"
import city2 from "../../../assets/img/city/ct-5.png"
import city3 from "../../../assets/img/city/ct-1.png"
import { Link } from 'react-router-dom'

const TourOffer = () => {
  return (
    <section className="pt-5 pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="pop-touritems">
              <a href="#" className="card rounded-3 border br-dashed border-2 m-0">
                <div className="offers-container d-flex align-items-center justify-content-start p-2">
                  <div className="offers-flex position-relative">
                    <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">20% Off</span></div>
                    <div className="offers-pic"><img src={city1} className="img-fluid rounded" width={110} alt="offer-pic" />
                    </div>
                  </div>
                  <div className="offers-captions ps-3">
                    <h4 className="city fs-6 m-0 fw-bold">
                      <span>Los Angeles</span>
                    </h4>
                    <p className="detail ellipsis-container">
                      <span className="ellipsis-item__normal">Round-trip</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">3D/4N</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">3 Person</span>
                    </p>
                    <div className="booking-wrapes d-flex align-items-center justify-content-between">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$849 -
                          $999</span></h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="pop-touritems">
              <Link to='/' className="card rounded-3 border br-dashed border-2 m-0">
                <div className="offers-container d-flex align-items-center justify-content-start p-2">
                  <div className="offers-flex position-relative">
                    <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">15% Off</span></div>
                    <div className="offers-pic"><img src={city2} className="img-fluid rounded" width={110} alt="Tour Image" />
                    </div>
                  </div>
                  <div className="offers-captions ps-3">
                    <h4 className="city fs-6 m-0 fw-bold">
                      <span>United Kingdom</span>
                    </h4>
                    <p className="detail ellipsis-container">
                      <span className="ellipsis-item__normal">Round-trip</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">3D/4N</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">2 Person</span>
                    </p>
                    <div className="booking-wrapes d-flex align-items-center justify-content-between">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$399 -
                          $599</span></h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="pop-touritems">
              <a href="#" className="card rounded-3 border br-dashed border-2 m-0">
                <div className="offers-container d-flex align-items-center justify-content-start p-2">
                  <div className="offers-flex position-relative">
                    <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span className="label text-light bg-danger fw-medium">30% Off</span></div>
                    <div className="offers-pic"><img src={city3} className="img-fluid rounded" width={110} alt="offer-pic-2" />
                    </div>
                  </div>
                  <div className="offers-captions ps-3">
                    <h4 className="city fs-6 m-0 fw-bold">
                      <span>France</span>
                    </h4>
                    <p className="detail ellipsis-container">
                      <span className="ellipsis-item__normal">Round-trip</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">3D/4N</span>
                      <span className="separate ellipsis-item__normal" />
                      <span className="ellipsis-item">3 Person</span>
                    </p>
                    <div className="booking-wrapes d-flex align-items-center justify-content-between">
                      <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">$569 -
                          $799</span></h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourOffer