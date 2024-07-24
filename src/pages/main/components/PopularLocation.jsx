import React from 'react'
import locationImg from "../../../assets/img/city/ct-7.png"
import { Link } from 'react-router-dom'

const PopularLocation = () => {
  return (
    <section className="gray-simple">
        <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                <h2>Popular Location To Stay</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
            </div>
            </div>
            <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-3">
                {
                    Array(3).fill(null).map((i,index)=>(
                        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="card destination-card border-0 rounded-3 overflow-hidden m-0">
                            <div className="destination-card-wraps position-relative">
                                <div className="destination-card-thumbs">
                                <div className="destinations-pics"><Link to="/"><img src={locationImg} className="img-fluid" alt="location" /></Link>
                                </div>
                                </div>
                                <div className="destination-card-description position-absolute start-0 bottom-0 ps-4 pb-4 z-2">
                                <div className="exploterr-text">
                                    <h3 className="text-light fw-bold mb-1">New York</h3>
                                    <p className="detail ellipsis-container text-light">
                                    <span className="ellipsis-item__normal">10 hotels</span>
                                    <span className="separate ellipsis-item__normal" />
                                    <span className="ellipsis-item">5 Rental</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>

  )
}

export default PopularLocation