import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import HotelDetails from './HotelDetails'
import GuestDetails from './GuestDetails'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import axiosHeaders from '../../helpers/AxiosHeader'
import DetailsSkeleton from '../../skeleton/DetailsSkeleton'
import TopSection from './TopSection'
import Summary from './Summary'

const BookingPage = () => {

    const { id,checkin,checkout } = useParams();
    const apiUrl = `${process.env.REACT_APP_API_URL}room-details-by-id/${id}/${checkin}/${checkout}`
    const [booking, setbooking] = useState(false)
    const [guestField, setguestField] = useState(1)
    const [progressBar, setprogressBar] = useState(0)
    const [details, setdetails] = useState(null)
    const [loading, setloading] = useState(true)
    const [price, setprice] = useState("")
    const [tax, settax] = useState("")

    useEffect(() => { window.scrollTo(0,0)}, [booking] )
    
    const toggleBooking =()=>{ setbooking(!booking) }

    useEffect(() => {
        axios.get(apiUrl,axiosHeaders)
        .then(res=>{
            let data = res.data.data
            let price = data.longweek_end_price !== 0 ? data.longweek_end_price: data.black_out_date_price !== 0 ? data.black_out_date_price : data.room_price
            setprogressBar(20)
            setdetails(data)
            setguestField(data.no_of_person_allowed)
            setprice(price)
            settax(((18 * price) / 100).toFixed(2))
            setprogressBar(50)
            setloading(false)
            setprogressBar(100)
        })
        .catch(err=>console.log(err))
    }, [apiUrl])

  return (
    <Layout progressBar={progressBar} >
        <section className="pt-4 gray-simple position-relative">
            <div className="container">
                <TopSection first={booking} second={booking} third={false} />
                {
                    loading ? 
                    <DetailsSkeleton/> :
                    <div className="row align-items-start">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            {
                                booking &&
                                <div className="div-title d-flex align-items-center mb-3">
                                    <h4>Guests Detail</h4>
                                </div>
                            }
                            <div className="row align-items-start">
                                {
                                    booking ?
                                    <GuestDetails setbooking={toggleBooking} totalGuest={guestField} />:
                                    <HotelDetails setbooking={toggleBooking} details={details} loading={loading} />
                                }
                                <Summary price={price} tax={tax} checkin={checkin} checkout={checkout} details={details} />
                            </div>
                        </div>
                        {
                            !booking ?
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="text-center d-flex align-items-center justify-content-center mt-4">
                                        <div className="btn btn-md btn-primary fw-semibold" onClick={toggleBooking}>Next<i className="fa-solid fa-arrow-right ms-2" /></div>
                                    </div>
                                </div>:
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="text-center d-flex align-items-center justify-content-center mt-4">
                                        <div className="btn btn-md btn-dark fw-semibold mx-2" onClick={toggleBooking}>
                                            <i className="fa-solid fa-arrow-left me-2" />Previous
                                        </div>
                                    <Link to="/success-page" className="btn btn-md btn-primary fw-semibold mx-2">Make Your Payment<i className="fa-solid fa-arrow-right ms-2" /></Link>
                                        </div>
                                </div>
                        }
                    </div>
                }                    
                </div>
        </section>
    </Layout>
  )
}

export default BookingPage