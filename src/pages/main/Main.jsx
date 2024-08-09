import React from 'react'
import Layout from '../layout/Layout'
import Form from './components/Form'
import PopularHotel from './components/PopularHotel'
import PopularLocation from './components/PopularLocation'
import InternationalRoutes from './components/InternationalRoutes'
import Testimonial from '../../components/Testimonial'
import Experience from '../../components/Experience'
import Blog from '../../components/Blog'
import Newsletter from '../../components/Newsletter'
import Features from './components/Features'

const Main = () => {
  return (
    <Layout header="light">
        <Form />
        <Features/>
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