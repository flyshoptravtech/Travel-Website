import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom'
import { DashboardHeader, DashboardMobile } from './DashboardHeader'
import axios from 'axios'
import axiosHeaders from '../../helpers/AxiosHeader'
import { toast } from 'react-toastify'

const AddHomeStay = () => {

    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL
    const islog1 = localStorage.getItem("aff-info")
    const islog2 = localStorage.getItem("aff-token")
    const [loading, setloading] = useState(false)
    
    useEffect(() => {
        if(islog1 || islog2){}
        else{navigate("/");return;}
    }, [islog1,islog2,navigate])

    const handleAddHomeStay = (e) =>{
        e.preventDefault()
        setloading(true)
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        axios.post(`${apiUrl}create-home-stay-by-affiliate`,data,axiosHeaders)
        .then(res=>console.log(res.data))
        .catch(err=>{
            const error = err.response.data.errors;
            const firstErrorKey = Object.keys(error)[0];
            toast.error(error[firstErrorKey][0]);
            console.log(error);
            setloading(false);
        })
    }

    useEffect(() => {
        axios.get(`${apiUrl}countries-list`,{headers: {
            ...axiosHeaders.headers,
            Authorization: `Bearer ${islog2}`,
          },})
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
    }, [])
    

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
                                                <select className='form-control' name="country">
                                                    <option value="" defaultChecked hidden >--Select--</option>
                                                    <option value="" >India</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">State</label>
                                                <select className='form-control' name="state">
                                                    <option value="" defaultChecked hidden >--Select--</option>
                                                    <option value="" >India</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                <label className="form-label">State</label>
                                                <select className='form-control' name="state">
                                                    <option value="" defaultChecked hidden >--Select--</option>
                                                    <option value="" >India</option>
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