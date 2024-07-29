import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import animated from "react-select/animated"
import Select from "react-select/creatable"
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import AxiosHeader from '../../helpers/AxiosHeader'

const AffiliateForm = () => {

    const apiUrl = process.env.REACT_APP_API_URL
    const axiosHeaders = AxiosHeader()
    const islog1 = localStorage.getItem("aff-info")
    const islog2 = localStorage.getItem("aff-token")
    const [inputs, setInputs] = useState({ input1: '', input2: '' });
    const [category, setcategory] = useState("")
    const [loading, setloading] = useState(false)
    const makeAnimated = animated()
    const navigate = useNavigate()

    useEffect(() => {
      if(islog1 || islog2){
        navigate("/")
      }
    }, [islog1,islog2,navigate])
    

    const options = [
        {label:"Youtube",value:"youtube"},
        {label:"Laura",value:"Jonathan"},
    ]

    const handleChange = (e) => {
        const { id, value } = e.target;
        const regex = /^[0-9]*$/;

        if (regex.test(value)) {
            setInputs((prev) => ({ ...prev, [id]: value }));
        }else{
            e.target.value = inputs[id];
        }
    }

    const affiliateSubmit = (e) =>{
        e.preventDefault()
        setloading(true)
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        let stringCate = category
        if(Array.isArray(stringCate)){
            stringCate= category.map(item=>item.value).join(",")
        }
        const fullData = {...data,category:stringCate}
        axios.post(`${apiUrl}affiliate-register`,fullData,axiosHeaders)
        .then((res)=>{
            toast.success(res.data.message);
            navigate("/affiliate-login")
            setloading(false)
        })
        .catch((err)=>{
            setloading(false)
            const error = JSON.parse(err.request.response).message
            if(error.name){
                toast.error(error.name[0])
            }else if(error.email){
                toast.error(error.email[0])
            }else if(error.whatsapp_number){
                toast.error(error.whatsapp_number[0])
            }
        })
    }

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
                                <h1 className="mb-2 fs-2">Join us as Influencer</h1>
                                <p className="mb-0">Already a Member?
                                <Link to="/affiliate-login" className="fw-medium text-primary" > Login</Link>
                                </p>
                            </div>
                            <form className="mt-3 text-start" onSubmit={affiliateSubmit}>
                            <div className="form">
                                <div className="form-group">
                                    <label className="form-label">Enter Name *</label>
                                    <input type="text" className="form-control" name='name' placeholder="Enter Full Name"  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Enter Email *</label>
                                    <input type="email" className="form-control" name='email' placeholder="name@example.com"  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Youtube Link <span style={{fontSize:'12px',   fontWeight:"600"}}>( Kindly copy the URL link of your profile from your browser and paste here )</span></label>
                                    <input type="text" className="form-control" name='youtube_link' placeholder="https://www.youtube.com/username"  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Youtube Subscriber ( In Number ) :</label>
                                    <input type="text" className="form-control" name='youtube_subscriber' placeholder="Youtube Subscriber" id='input1' onChange={handleChange}  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Instagram Link <span style={{fontSize:'12px',fontWeight:"600"}}>( Kindly copy the URL link of your profile from your browser and paste here )</span></label>
                                    <input type="text" className="form-control" name='instagram_link' placeholder="https://www.instagram.com/username"  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Instagram Followers ( In Number ) :</label>
                                    <input type="text" className="form-control" name='instagram_followers' placeholder="Instaram Followers" id='input2' onChange={handleChange}  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Other Link  <span style={{fontSize:'12px',fontWeight:"600"}}>( Kindly copy the URL link of your profile from your browser and paste here )</span></label>
                                    <input type="text" className="form-control" name='otherlink' placeholder="https://www.other.com/username"  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Whatsapp Number*</label>
                                    <input type="number" className="form-control" name='whatsapp_number' placeholder="Enter Number"  />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" name='gender' placeholder="Enter Gender">
                                        <option value="" hidden>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Location <span style={{fontSize:'12px',fontWeight:"600"}}>( City )</span></label>
                                    <input className='form-control' type="text" placeholder='Enter city' name='location' />
                                </div>
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
                                <div className="form-group">
                                    <button type="submit" className={`btn btn-primary full-width font--bold btn-lg ${loading ? "loading" :""}`}>
                                        {loading?<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>:"Submit"}
                                    </button>
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
    </Layout>
  )
}

export default AffiliateForm