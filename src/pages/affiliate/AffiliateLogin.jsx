import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AxiosHeader from "../../helpers/AxiosHeader";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js"

const AffiliateLogin = () => {

    const isLogin1 = localStorage.getItem("aff-info")
    const isLogin2 = localStorage.getItem("aff-token")
    const apiUrl = process.env.REACT_APP_API_URL;
    const secret = process.env.REACT_APP_SECRET_KEY
    const navigate = useNavigate()
    const [togglePass, settogglePass] = useState(false)
    const [loading, setloading] = useState(false)
    const axiosHeaders = AxiosHeader()

    const submitLoginAffiliate = (e)=>{
        setloading(true)
        e.preventDefault();
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        axios.post(`${apiUrl}affiliate-login`,data,axiosHeaders)
        .then(res=>{
            setloading(false)
            toast.success(res.data.message)
            const userinfo = CryptoJS.AES.encrypt(JSON.stringify(res.data.admin), secret).toString();
            localStorage.setItem("aff-token",res.data.token)
            localStorage.setItem("aff-info",userinfo)
            navigate("/")
        })
        .catch(err=>{
            setloading(false)
            const error = err.response.data
            if(error.errors.email){
                toast.error(error.errors.email[0])
            }else if(error.errors.password){
                toast.error(error.errors.password[0])
            }else{
                toast.error(error.message)
            }
        })
    }

    useEffect(() => {
        if(isLogin1 || isLogin2){
            navigate("/")
        }
    }, [navigate,isLogin1,isLogin2])
    

  return (
    <Layout>
      <section className="py-4 py-md-5 gray-simple">
        <div className="container">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-12">
              <div className="bg-white border rounded-3 overflow-hidden">
                <div className="row g-0">
                  <div className="col-12 order-1">
                    <div className="p-4 p-sm-7">
                      <div>
                        <h1 className="mb-2 fs-2">Welcome Back !</h1>
                        <p className="mb-0"> Are you new here?
                          <Link to="/affiliate-signup" className="fw-medium text-primary" > Create an account</Link>
                        </p>
                      </div>
                      <form className="mt-3 text-start" onSubmit={submitLoginAffiliate} >
                        <div>
                          <div className="form-floating mb-4">
                            <input type="email" name="email" className="form-control" placeholder="name@example.com"  />
                            <label>Email</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input type={togglePass ? "text" :"password"} className="form-control" id="password-field" name="password" placeholder="Password" />
                            <label>Password</label>
                            <span className={`toggle-password position-absolute top-50 end-0 translate-middle-y me-3 fa-solid ${togglePass ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{settogglePass(!togglePass)}} style={{cursor:"pointer"}} />
                          </div>
                          <div className="form-group">
                            <button type="submit" className={`btn btn-primary full-width font--bold btn-lg ${loading ? "loading" :""}`}>
                                {loading?<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>:"Submit"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AffiliateLogin;
