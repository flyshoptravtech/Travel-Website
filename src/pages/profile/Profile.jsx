import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CryptoJS from "crypto-js"

const Profile = () => {

    const secret = process.env.REACT_APP_SECRET_KEY
    const [isEditable, setisEditable] = useState(true)
    const navigate = useNavigate();
    const authToken = localStorage.getItem("authToken")
    const encryptedData = localStorage.getItem("userInfo")
    const bytes = CryptoJS.AES.decrypt(encryptedData, secret);
    const userInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    useEffect(() => {
        if(!authToken){
            navigate("/")
            return;
        }
    }, [authToken,navigate])
    
    const toggleEdit = ()=>{
        setisEditable(!isEditable)
        toast.success("Your can now edit the information !!")
    }

  return (
    <Layout>
        <section className="pt-5 gray-simple position-relative">
            <div className="container">
                <div className="row align-items-start justify-content-between gx-xl-4">
                <div className="col-12">
                    {/* Personal Information */}
                    <div className="card mb-4">
                    <div className="card-header py-3 px-3">
                        <div className='d-flex align-items-center justify-content-between w-100'>
                            <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                            {
                                isEditable && <button className='btn btn-primary h-auto' onClick={toggleEdit}>Edit <i className="fa-solid fa-pen-to-square ps-2"></i></button>
                            }
                        </div>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="row align-items-center justify-content-start">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" readOnly={isEditable} autoFocus placeholder='Enter Your Name'/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Email ID</label>
                                <input type="text" className="form-control" readOnly={isEditable} defaultValue={userInfo.email} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Mobile</label>
                                <input type="text" className="form-control" readOnly={isEditable} defaultValue={userInfo.mobile} />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                <label className="form-label">Gender</label>
                                <select className='form-control' disabled={isEditable}>
                                    <option value="" defaultValue hidden>--Gender--</option>
                                    <option value="male" >Male</option>
                                    <option value="female" >Female</option>
                                    <option value="no_say" >Not prefer to say</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            {
                                !isEditable && <div className='d-flex align-items-center justify-content-end'> <button className='btn btn-primary h-auto'>Save Changes</button></div>
                            }
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Profile