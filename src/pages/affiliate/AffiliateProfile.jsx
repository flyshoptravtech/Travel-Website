import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import {DashboardHeader, DashboardMobile} from './DashboardHeader'
import { useNavigate } from 'react-router-dom'
import animated from "react-select/animated"
import Select from "react-select/creatable"
import CryptoJS from "crypto-js"
import { toast } from 'react-toastify'
import ResetPassword from './ResetPassword'
import options from './assets/CategoryOptions'

const AffiliateProfile = () => {

    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL
    const secret = process.env.REACT_APP_SECRET_KEY
    const [isEditable, setisEditable] = useState(true)
    const [inputs, setInputs] = useState({ input1: '', input2: '' });
    const islog1 = localStorage.getItem("aff-info")
    const [category, setcategory] = useState("")
    const makeAnimated = animated()
    const islog2 = localStorage.getItem("aff-token")

    useEffect(() => {
        if(islog1 || islog2){}
        else{navigate("/");return;}
    }, [islog1,islog2,navigate])

    let bytes,userInfo
    if(islog1){
        bytes = CryptoJS.AES.decrypt(islog1, secret);
    }
    if(bytes){
        userInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }else{
        return;
    }
    console.log(userInfo);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        const regex = /^[0-9]*$/;
        if (regex.test(value)) {
            setInputs((prev) => ({ ...prev, [id]: value }));
        }else{
            e.target.value = inputs[id];
        }
    }

    const affLogOut = () =>{
        toast.success("Logout Sucessfully..")
        localStorage.removeItem("aff-info")
        localStorage.removeItem("aff-token");
        navigate("/")
    }

    const profileLinks = [
        {name:"My Profile",link:"#",icon:<i className="fa-regular fa-id-card me-2" />},
        {name:"My Booking",link:"#",icon:<i className="fa-solid fa-ticket me-2" />},
        {name:"Travelers",link:"#",icon:<i className="fa-solid fa-user-group me-2" />},
        {name:"Payment Details",link:"#",icon:<i className="fa-solid fa-wallet me-2" />},
        {name:"My Wishlist",link:"#",icon:<i className="fa-solid fa-shield-heart me-2" />},
        {name:"Settings",link:"#",icon:<i className="fa-solid fa-sliders me-2" />},
        {name:"Delete Profile",link:"#",icon: <i className="fa-solid fa-trash-can me-2" />},
        {name:"Sign Out",link:"#",icon:<i className="fa-solid fa-power-off me-2" />,clickF:affLogOut},
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
                            <select className='form-control' name='gender' defaultValue={userInfo.gender} disabled={isEditable}>
                                <option value={userInfo.gender} hidden>{userInfo.gender.length === 0 ? "Select" :userInfo.gender}</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Youtube Link</label>
                                <input type="text" className="form-control" name='youtube_link' placeholder="https://www.youtube.com/username" defaultValue={userInfo.youtube_link} readOnly={isEditable} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Youtube Subscriber</label>
                                <input type="text" className="form-control" name='youtube_subscriber' placeholder="Youtube Subscriber" defaultValue={userInfo.youtube_subscriber} readOnly={isEditable} id='input1' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Instagram Link</label>
                                <input type="text" className="form-control" name='instagram_link' placeholder="https://www.instagram.com/username" defaultValue={userInfo.instagram_link} readOnly={isEditable} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Instagram Followers</label>
                                <input type="text" className="form-control" name='instagram_followers' placeholder="Instagram Followers" defaultValue={userInfo.instagram_followers} readOnly={isEditable} id='input2' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Other Link</label>
                                <input type="text" className="form-control" name='otherlink' placeholder="https://www.other.com/username" defaultValue={userInfo.otherlink} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Location ( City )</label>
                                <input type="text" className="form-control" name='location' placeholder="Enter Location" defaultValue={userInfo.location} readOnly={isEditable} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <Select 
                                    components={makeAnimated} 
                                    options={options} 
                                    isMulti 
                                    onChange={(e)=>setcategory(e)} 
                                    styles={{control:(base)=>({
                                            ...base,height:"fit-content",padding:".375rem .2rem",border:"1px solid #dee2e6",
                                    })}}
                                />
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