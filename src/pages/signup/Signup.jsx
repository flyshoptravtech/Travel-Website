import React, { useState } from 'react'
import loginSvg from "../../assets/img/login.svg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Signup = () => {

    const apiUrl = process.env.REACT_APP_API_URL
    const [togglePass, settogglePass] = useState(false)
    const navigate = useNavigate()

    const axiosHeaders = {
        headers:{"Content-Type":"application/json",}
    }

    const handleSignup = (e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        axios.post(`${apiUrl}register`,data,axiosHeaders)
        .then(res=>{
            if(res.data.message.email){
                toast.error(res.data.message.email[0])
            }else if(res.data.message.mobile){
                toast.error(res.data.message.mobile[0])
            }else if(res.data.message.password){
                toast.error(res.data.message.password[0])
            }else if(res.data.message.confirm_password){
                toast.error(res.data.message.confirm_password[0])
            }else{
                toast.success(`${res.data.message} and You can Login`)
                navigate("/")
            }
            console.log(res.data);
        })
        .catch(res=>{
            console.log(res);
        })
    }

    console.log(apiUrl);

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
                            <img src={loginSvg} className="img-fluid" alt="signupImage" />
                        </div>
                        {/* Divider */}
                        <div className="vr opacity-1 d-none d-lg-block" />
                        </div>
                        {/* Information */}
                        <div className="col-lg-6 order-1">
                        <div className="p-4 p-sm-7">
                            {/* Logo */}
                            {/* Title */}
                            <h1 className="mb-2 fs-2">Create New Account</h1>
                            <p className="mb-0">Already a Member?<Link to="/" className="fw-medium text-primary"> Go Home to Login</Link></p>
                            {/* Form START */}
                            <form className="mt-3 text-start" onSubmit={handleSignup}>
                            <div className="form">
                                <div className="form-group">
                                <label className="form-label">Enter Email</label>
                                <input type="email" className="form-control" name='email' placeholder="name@example.com" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Enter Mobile Number</label>
                                <input type="number" name='mobile' className="form-control" placeholder="Mobile Number" />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Enter Password</label>
                                <div className="position-relative">
                                    <input type={togglePass ? "text" : "password"} className="form-control" id="password-field" name="password" placeholder="Password" />
                                    <span className={`fa-solid ${togglePass ? "fa-eye-slash" : "fa-eye"} position-absolute top-50 end-0 translate-middle-y me-3`} onClick={()=>settogglePass(!togglePass)} />
                                </div>
                                </div>
                                <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" name='confirm_password' className="form-control" placeholder="*********" />
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