import React from 'react'
import notFoundImg from "../../assets/img/404.png"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="position-relative py-0">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="404-capstion text-center my-4">
                        <div className="404-captions">
                            <img src={notFoundImg} className="img-fluid mb-3" alt="not found img" />
                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                    <div className="404-capstion text-center my-4">
                        <div className="404-captions">
                            <h1 className="display-1 fw-bold mb-0">404</h1>
                            <h2>Ohhh ho, something went wrong!</h2>
                            <p className="fs-6">Cicero famously orated against his political opponent.</p>
                            <Link to="/" className="btn btn-md btn-primary fw-medium px-lg-4 pt-2">Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound