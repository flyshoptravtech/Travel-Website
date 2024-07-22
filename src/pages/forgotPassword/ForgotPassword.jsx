import React from 'react'
import authSvg from "../../assets/img/auth.svg"
import logoSvg from "../../assets/img/logo-icon.png"
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
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
                        <img src={authSvg} className="img-fluid" alt />
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
                        <h1 className="mb-2 fs-2">Forgot Password?</h1>
                        <p className="mb-0">Enter the email address associated with an account.</p>
                        {/* Form START */}
                        <form className="mt-4 text-start">
                        <div className="form py-4">
                            <div className="form-group">
                            <label className="form-label">Enter your email ID</label>
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                            <div className="form-group text-center">
                            <p className="mb-0">Back to Sign in <Link to="/" className="fw-medium text-primary">Go Home</Link></p>
                            </div>
                            <div className="form-group">
                            <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Reset
                                Password</button>
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

export default ForgotPassword