import React from 'react'
import client_1 from "../assets/img/team-1.jpg"
import client_2 from "../assets/img/team-2.jpg"
import client_3 from "../assets/img/team-3.jpg"
import client_4 from "../assets/img/team-4.jpg"
import mainImg from "../assets/img/img-2.png"

const Experience = () => {

    const avatar = [
        {img:client_1},
        {img:client_2},
        {img:client_3},
        {img:client_4},
    ]

  return (
    <section>
        <div className="container">
            <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="position-relative">
                <img src={mainImg} className="img-fluid rounded-3 position-relative z-1" alt />
                <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-2">
                    <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2 shadow-wrap">
                    {/* Avatar group */}
                    <div className="me-4">
                        <h6 className="fw-normal">Client</h6>
                        {/* Avatar group */}
                        <ul className="avatar-group mb-0">
                            {
                                avatar.map((item,index)=>(
                                    <li className="avatar avatar-md" key={index}>
                                        <img className="avatar-img circle" src={item.img} alt="avatar" />
                                    </li>
                                ))
                            }
                            <li className="avatar avatar-md">
                                <div className="avatar-img circle bg-primary">
                                <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Rating */}
                    <div>
                        <h6 className="fw-normal mb-3">Rating</h6>
                        <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1" /></h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="bestExperience-block">
                <p className="fw-medium text-primary text-md text-uppercase mb-0">Memories</p>
                <h2 className="fw-bold lh-base">Our Attractive Experience And Services For you!</h2>
                <p className="fw-light fs-6">Using dummy content or fake information in the Web design process can Fake data
                    can ensure a nice looking layout but it doesn’t reflect what a living, breathing application must
                    endure. Real data does. result in products with unrealistic assumptions and potentially serious design
                    flaws. A seemingly elegant design can quickly begin to bloat with unexpected content or break under the
                    weight of actual activity. </p>
                <div className="d-inline-flex mt-4">
                    <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                    <h6 className="fw-bold fs-3 m-0">33</h6>
                    <p className="m-0 text-sm text-muted-2">Year Esperience</p>
                    </div>
                    <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                    <h6 className="fw-bold fs-3 m-0">78</h6>
                    <p className="m-0 text-sm text-muted-2">Destination Collaboration</p>
                    </div>
                    <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple">
                    <h6 className="fw-bold fs-3 m-0">25K</h6>
                    <p className="m-0 text-sm text-muted-2">Happy Customers</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

  )
}

export default Experience