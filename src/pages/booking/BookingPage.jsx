import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import HotelDetails from './HotelDetails'
import GuestDetails from './GuestDetails'

const BookingPage = () => {

    const [booking, setbooking] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [booking])
    
    const toggleBooking =()=>{
        setbooking(!booking)
    }

  return (
    <Layout>
        {
            booking ?
            <GuestDetails setbooking={toggleBooking} />:
            <HotelDetails setbooking={toggleBooking} />
        }
    </Layout>
  )
}

export default BookingPage