import React from 'react'
import loginSvg from "../../assets/img/login.svg"
import logoSvg from "../../assets/img/logo-icon.png"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center m-auto">
                <div className="col-12">
                    <div className="bg-mode shadow rounded-3 overflow-hidden">
                    <div className="row g-0">
                        {/* Vector Image */}
                        <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                        <div className="p-3 p-lg-5">
                            <img src={loginSvg} className="img-fluid" alt />
                        </div>
                        {/* Divider */}
                        <div className="vr opacity-1 d-none d-lg-block" />
                        </div>
                        {/* Information */}
                        <div className="col-lg-6 order-1">
                        <div className="p-4 p-sm-7">
                            {/* Logo */}
                            <div>
                            <img className="img-fluid mb-4" src={logoSvg} width={70} alt="logo" />
                            </div>
                            {/* Title */}
                            <h1 className="mb-2 fs-2">Create New Account</h1>
                            <p className="mb-0">Already a Member?<Link to="/" className="fw-medium text-primary"> Go Home to Login</Link></p>
                            {/* Form START */}
                            <form className="mt-4 text-start">
                            <div className="form py-4">
                                <div className="form-group">
                                <label className="form-label">Enter email ID</label>
                                <input type="email" className="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Enter Password</label>
                                <div className="position-relative">
                                    <input type="password" className="form-control" id="password-field" name="password" placeholder="Password" />
                                    <span className="fa-solid fa-eye toggle-password position-absolute top-50 end-0 translate-middle-y me-3" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="*********" />
                                </div>
                                <div className="form-group">
                                <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Create An
                                    Account</button>
                                </div>
                                <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                                </div>
                            </div>
                            </form>
                            {/* Form END */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup