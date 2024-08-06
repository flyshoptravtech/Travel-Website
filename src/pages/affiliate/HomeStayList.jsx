import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { DashboardHeader, DashboardMobile } from './DashboardHeader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import ListData from './ListData'
import CryptoJS from 'crypto-js'

const HomeStayList = () => {

    const apiUrl = `${process.env.REACT_APP_API_URL}home-stay-list`
    const secret = process.env.REACT_APP_SECRET_KEY
    const islog1 = localStorage.getItem("aff-info")
    const islog2 = localStorage.getItem("aff-token")
    const [userId, setuserId] = useState(null)
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true)
    const [progressbar, setprogressbar] = useState(0)
    const [homeList, sethomeList] = useState([])

    useEffect(() => {
        if(islog1 || islog2){}
        else{navigate("/");return;}
    }, [islog1,islog2,navigate])
    
    useEffect(() => {
        if (islog1) {
            let bytes = CryptoJS.AES.decrypt(islog1, secret);
            let userInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setuserId(userInfo._id)
        }
    }, [islog1,secret])
    

    useEffect(() => {
        if(userId){
            setprogressbar(20)
            axios.get(`${apiUrl}/${userId}`)
            .then(res=>{
                setprogressbar(50)
                sethomeList(res.data.data)
                setprogressbar(100)
                setLoading(false)
            })
            .catch(()=>{
                setLoading(false);
                setprogressbar(100)
                sethomeList([])
            })
        }
    }, [userId,apiUrl])
    

  return (
    <Layout progressBar={progressbar} >
        <DashboardHeader />
            <section className='pt-5 gray-simple position-relative'>
            <div className="container">
                <DashboardMobile />
                <div className="row align-items-start justify-content-between gx-xl-4">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h3 className='fs-5 mb-0'>Homestay List :</h3>
                            </div>
                            <div className="card-body overflow-auto">
                                <div>
                                        {
                                            loading ?
                                            <div className="col-12">
                                                {
                                                    Array(3).fill(null).map((_,index)=>(
                                                        <Skeleton key={index} className='mt-3' height={20} />
                                                    ))
                                                }
                                            </div>:
                                            (
                                                homeList.length === 0 ?
                                                <h5 className='text-center mb-0'>No Data Found....</h5>:
                                                <ListData homeList={homeList} />
                                            )
                                        }
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

export default HomeStayList