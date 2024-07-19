import React from 'react'
import Layout from '../layout/Layout'
import Form from './components/Form'
import TourOffer from './components/TourOffer'
import PopularHotel from './components/PopularHotel'
import PopularLocation from './components/PopularLocation'
import InternationalRoutes from './components/InternationalRoutes'
import Testimonial from '../../components/Testimonial'
import Experience from '../../components/Experience'
import Blog from '../../components/Blog'
import Newsletter from '../../components/Newsletter'

const Main = () => {
  return (
    <Layout header="light">
        <Form />
        <TourOffer/>
        <PopularHotel/>
        <PopularLocation/>
        <InternationalRoutes/>
        <Testimonial/>
        <Experience/>
        <Blog/>
        <Newsletter/>
    </Layout>
  )
}

export default Main