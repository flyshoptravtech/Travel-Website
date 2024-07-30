import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import axiosHeaders from "../../helpers/AxiosHeader";

const ResetPassword = ({id}) => {

    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL +"affiliate-change-password/"
    const [togglePass, settogglePass] = useState(false)
    const [loading, setloading] = useState(false)

    const resetPassword = (e)=>{
        e.preventDefault()
        setloading(true)
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        axios.post(`${apiUrl}${id}`,data,axiosHeaders)
        .then(res=>{
            toast.success(res.data.message)
            localStorage.removeItem("aff-token")
            localStorage.removeItem("aff-info")
            navigate("/affiliate-login")
        })
        .catch(err=>{
            setloading(false)
            const error = err.response.data
            if(error.message === "Old password is incorrect"){
                toast.error(err.response.data.message);return;
            }else if(error.errors.old_password){
                toast.error(error.errors.old_password[0])
            }else if(error.errors.new_password){
                toast.error(error.errors.new_password[0])
            }else if(error.error.confirm_password){
                toast.error(error.errors.confirm_password[0])
            }
        })
    }

  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <i className="fa-solid fa-lock me-2" />
          Update Password
        </h4>
      </div>
      <div className="card-body">
        <form onSubmit={resetPassword}>
            <div className="row align-items-center justify-content-start">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="form-label">Old Password</label>
                  <input type="password" className="form-control" name="old_password" placeholder="*********" />
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <div className="position-relative">
                    <input type={togglePass ? "text" :"password"} className="form-control" name="new_password" placeholder="*********" />
                    <span className={`toggle-password position-absolute top-50 end-0 translate-middle-y me-4 fa-solid ${togglePass ? "fa-eye-slash" : "fa-eye"}`} onClick={()=>{settogglePass(!togglePass)}} style={{cursor:"pointer"}} />
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" name="confirm_password" placeholder="*********" />
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="text-end form-group">
                  <button type="submit" className={`btn btn-md btn-primary w-25 mb-0 ${loading ? "loading" :""} `}>
                  {loading?<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>:"Change Password"}
                  </button>
                </div>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
