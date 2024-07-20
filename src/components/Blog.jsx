import React from 'react'
import blogImg from "../assets/img/blog-1.jpg"

const Blog = () => {
  return (
    <section className="pt-0">
        <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                <h2>Trending &amp; Popular Articles</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
            </div>
            </div>
            <div className="row justify-content-center g-4">
                {
                    Array(3).fill(null).map((i,index)=>(
                        <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="blogGrid-wrap d-flex flex-column h-100">
                            <div className="blogGrid-pics">
                                <a href="#" className="d-block"><img src={blogImg} className="img-fluid rounded" alt="Blog image" /></a>
                            </div>
                            <div className="blogGrid-caps pt-3">
                                <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                                <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                                    Comfirtable And Best Price</a></h4>
                                <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                                to be unintendedly humorous or offensive day of going live.</p>
                                <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></a>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>

  )
}

export default Blog