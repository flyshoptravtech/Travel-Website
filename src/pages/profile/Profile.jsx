import React from 'react'
import Layout from '../layout/Layout'
import demo from "../../assets/img/team-1.jpg"
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Layout>
        <section className="pt-5 gray-simple position-relative">
            <div className="container">
                <div className="row align-items-start justify-content-between gx-xl-4">
                <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="card rounded-2 me-xl-5 mb-4">
                    <div className="card-top bg-primary position-relative">
                        <div className="py-5 px-3">
                        <div className="crd-thumbimg text-center">
                            <div className="p-2 d-flex align-items-center justify-content-center brd"><img src={demo} className="img-fluid circle" width={120} alt="true" /></div>
                        </div>
                        <div className="crd-capser text-center">
                            <h5 className="mb-0 text-light fw-semibold">Adam K. Divliars</h5>
                            <span className="text-light opacity-75 fw-medium text-md"><i className="fa-solid fa-location-dot me-2" />California, USA</span>
                        </div>
                        </div>
                    </div>
                    <div className="card-middle px-4 py-5">
                        <div className="crdapproval-groups">
                        <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                            <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-envelope-circle-check fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                            <p className="fw-semibold text-dark lh-2 mb-0">Verified Email</p>
                            <p className="text-md text-muted lh-1 mb-0">10 Aug 2022</p>
                            </div>
                        </div>
                        <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                            <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-phone-volume fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                            <p className="fw-semibold text-dark lh-2 mb-0">Verified Mobile Number</p>
                            <p className="text-md text-muted lh-1 mb-0">12 Aug 2022</p>
                            </div>
                        </div>
                        <div className="crdapproval-single d-flex align-items-center justify-content-start">
                            <div className="crdapproval-item">
                            <div className="square--50 circle bg-light-warning text-warning"><i className="fa-solid fa-file-invoice fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                            <p className="fw-semibold text-dark lh-2 mb-0">Complete Basic Info</p>
                            <p className="text-md text-muted lh-1 mb-0">Not Verified</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card-middle mt-5 mb-4 px-4">
                        <div className="revs-wraps mb-3">
                        <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                            <span className="text-dark fw-semibold text-md">75%</span>
                        </div>
                        <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                            <div className="progress-bar bg-success" style={{width: '87%'}} />
                        </div>
                        </div>
                        <div className="crd-upgrades">
                        <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button"><i className="fa-solid fa-sun me-2" />Upgrade Pro</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12">
                    {/* Personal Information */}
                    <div className="card mb-4">
                    <div className="card-header">
                        <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            <div className="d-flex align-items-center">
                            <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                {/* Avatar place holder */}
                                <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={demo} alt="true" />
                                </span>
                            </label>
                            {/* Upload button */}
                            <label className="btn btn-sm btn-light-primary px-4 fw-medium mb-0" htmlFor="uploadfile-1">Change</label>
                            <input id="uploadfile-1" className="form-control d-none" type="file" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" defaultValue="Adam K" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" defaultValue="Divliars" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Email ID</label>
                            <input type="text" className="form-control" defaultValue="adamkruck@gmail.com" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Mobile</label>
                            <input type="text" className="form-control" defaultValue={9856542563} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" defaultValue="02/04/2000" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Gender</label>
                            <input type="text" className="form-control" defaultValue="Male" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                            <label className="form-label">About Info</label>
                            <textarea className="form-control ht-120" defaultValue={"Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel."} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mb-4">
                    <div className="card-header">
                        <h4><i className="fa-solid fa-envelope-circle-check me-2" />Update Your Email</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="update your new email" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                            <Link to="#" className="btn btn-md btn-primary mb-0">Update Email</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        <h4><i className="fa-solid fa-lock me-2" />Update Password</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                            <label className="form-label">Old Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                            <label className="form-label">New Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                            <Link to="#" className="btn btn-md btn-primary mb-0">Change Password</Link>
                            </div>
                        </div>
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

export default Profile