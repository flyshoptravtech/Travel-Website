import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
  return (
    <Layout>
        <section className="py-4 gray-simple position-relative">
            <div className="container">
                <div className="row align-items-start">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-3">
                    <div className="car-body px-xl-5 px-lg-4 py-lg-5 py-4 px-2">
                        <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="square--80 circle text-light bg-success"><i className="fa-solid fa-check-double fs-1" />
                        </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center flex-column text-center mb-5">
                        <h3 className="mb-0">Your order was confirmed successfully!</h3>
                        <p className="text-md mb-0">Booking detail send to: <span className="text-primary">paythemezhub@gmail.com</span></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center flex-column mb-4">
                        <div className="border br-dashed full-width rounded-2 p-3 pt-0">
                            <ul className="row align-items-center justify-content-start g-3 m-0 p-0">
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Order Invoice</p>
                                <p className="text-muted mb-0 lh-2">#26545</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Date</p>
                                <p className="text-muted mb-0 lh-2">24 Aug 2023</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Total Amount</p>
                                <p className="text-muted mb-0 lh-2">$772.40</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Payment Mode</p>
                                <p className="text-muted mb-0 lh-2">Visa Card</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">First Name</p>
                                <p className="text-muted mb-0 lh-2">Dhananjay</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Last Name</p>
                                <p className="text-muted mb-0 lh-2">Verma</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Phone</p>
                                <p className="text-muted mb-0 lh-2">9584563625</p>
                                </div>
                            </li>
                            <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="d-block">
                                <p className="text-dark fw-medium lh-2 mb-0">Email</p>
                                <p className="text-muted mb-0 lh-2">paythemezhub@gmail.com</p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="text-center d-flex align-items-center justify-content-center">
                        <Link to="/" className="btn btn-md border fw-semibold mx-2">Book Next Tour</Link>
                        <div data-bs-toggle="modal" data-bs-target="#invoice" className="btn btn-md btn-primary fw-semibold mx-2">View invoice Print</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default SuccessPage