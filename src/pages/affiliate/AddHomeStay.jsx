import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom'
import { DashboardHeader, DashboardMobile } from './DashboardHeader'
import { useHomeContext } from '../../context/homeContext'

const AddHomeStay = () => {

    const navigate = useNavigate()
    const islog1 = localStorage.getItem("aff-info")
    const islog2 = localStorage.getItem("aff-token")
    const [togglePas, settogglePas] = useState(false)
    
    const { homeloading,state,country,city,getStateList,getCityList,handleAddHomeStay,loading,userId,success } = useHomeContext()
    
    useEffect(() => {
        if(islog1 || islog2){}
        else{navigate("/");return;}
    }, [islog1,islog2,navigate])
    
    useEffect(() => {
        if(success){
            navigate("/affiliate-homestay")
        }
    }, [success,navigate])

  return (
    <Layout>
        <DashboardHeader />
            <section className='pt-5 gray-simple position-relative'>
                <div className="container">
                    <DashboardMobile />
                    <div className="row align-items-start justify-content-between gx-xl-4">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h3 className='fs-5 mb-0'>Add Homestay :</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleAddHomeStay}>
                                        <div className="row align-items-center justify-content-start">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" name='first_name' />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" name='last_name' />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input type="text" className="form-control" name='email' />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Contact Number</label>
                                                <input type="text" className="form-control" name='contact_number' />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Address</label>
                                                <input type="text" className="form-control" name='address' />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Country</label>
                                                <select className='form-control' name="country" onChange={getStateList} disabled={homeloading} >
                                                    <option value="" defaultChecked hidden >--Select--</option>
                                                    {
                                                        country.map((item,index)=>(
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">State</label>
                                                <select className='form-control' name="state" onChange={getCityList} disabled={homeloading} >
                                                    <option value="" defaultChecked hidden >--Select--</option>
                                                    {
                                                        state.map((item,index)=>(
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">City</label>
                                                <select className='form-control' name="city" disabled={homeloading} >
                                                    <option value="" defaultChecked hidden >--Select--</option>
                                                    {
                                                        city.map((item,index)=>(
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <div className='position-relative'>
                                                    <input type={togglePas ? "text" :"password"} name='password' className='form-control' />
                                                    <span className={`toggle-password position-absolute top-50 end-0 translate-middle-y me-3 fa-solid ${togglePas ? "fa-eye-slash" : "fa-eye"}`} style={{cursor:"pointer"}} onClick={()=>{settogglePas(!togglePas)}} ></span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Confirm-Password</label>
                                                <input type="password" name='confirm_password' className='form-control' />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">Show on website</label>
                                                <input type="hidden" name='affiliate_id' value={userId} />
                                                <select className='form-control' name='is_website' >
                                                    <option value="1" defaultChecked >Yes</option>
                                                    <option value="0" >No</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-end">
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
            </section>
    </Layout>
  )
}

export default AddHomeStay