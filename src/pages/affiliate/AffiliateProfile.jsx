import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import {DashboardHeader, DashboardMobile} from './DashboardHeader'
import { Link, useNavigate } from 'react-router-dom'
import CryptoJS from "crypto-js"
import { toast } from 'react-toastify'
import ResetPassword from './ResetPassword'

const AffiliateProfile = () => {

    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL
    const secret = process.env.REACT_APP_SECRET_KEY
    const [isEditable, setisEditable] = useState(true)
    const islog1 = localStorage.getItem("aff-info")
    const islog2 = localStorage.getItem("aff-token")

    useEffect(() => {
      if(!islog1 || !islog2){
        navigate("/")
      }
    }, [islog1,islog2,navigate])

    const bytes = CryptoJS.AES.decrypt(islog1, secret);
    const userInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // console.log(userInfo);
    
    const profileLinks = [
        {name:"My Profile",link:"#",icon:<i className="fa-regular fa-id-card me-2" />},
        {name:"My Booking",link:"#",icon:<i className="fa-solid fa-ticket me-2" />},
        {name:"Travelers",link:"#",icon:<i className="fa-solid fa-user-group me-2" />},
        {name:"Payment Details",link:"#",icon:<i className="fa-solid fa-wallet me-2" />},
        {name:"My Wishlist",link:"#",icon:<i className="fa-solid fa-shield-heart me-2" />},
        {name:"Settings",link:"#",icon:<i className="fa-solid fa-sliders me-2" />},
        {name:"Delete Profile",link:"#",icon: <i className="fa-solid fa-trash-can me-2" />},
        {name:"Sign Out",link:"#",icon:<i className="fa-solid fa-power-off me-2" />},
    ]

    const toggleEdit = ()=>{
        setisEditable(!isEditable)
        toast.success("Your can now edit the information !!")
    }

  return (
    <Layout>
        <DashboardHeader profileLinks={profileLinks} />
        <section className="pt-5 gray-simple position-relative">
            <div className="container">
                <DashboardMobile profileLinks={profileLinks} />
                <div className="row align-items-start justify-content-between gx-xl-4">
                <div className="col-12">
                    <div className="card mb-4">
                    <div className="card-header">
                        <h3><i className="fa-solid fa-file-invoice me-2" />Personal Information</h3>
                        {
                            isEditable && <button className='btn btn-primary h-auto' onClick={toggleEdit}>Edit <i className="fa-solid fa-pen-to-square ps-2"></i></button>
                        }
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-start">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" defaultValue={userInfo.name} readOnly={isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Email ID</label>
                            <input type="text" className="form-control" defaultValue={userInfo.email} readOnly={isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Whatsapp Number</label>
                            <input type="text" className="form-control" defaultValue={userInfo.whatsapp_number} readOnly={isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                            <label className="form-label">Gender</label>
                            <select className='form-control' name='gender' defaultValue={userInfo.gender}>
                                <option value={userInfo.gender} hidden>{userInfo.gender}</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            </div>
                        </div>
                        {
                            !isEditable && <div className='d-flex align-items-center justify-content-end'> <button className='btn btn-primary h-auto'>Save Changes</button></div>
                        }
                        </div>
                    </div>
                    </div>
                    <ResetPassword id={userInfo._id} />
                </div>
                </div>
            </div>
        </section>

    </Layout>
  )
}

export default AffiliateProfile