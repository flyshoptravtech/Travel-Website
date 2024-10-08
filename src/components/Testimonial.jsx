import React from 'react'
import testImg from "../assets/img/team-1.jpg"
import Caraousel from './Caraousel';

const Testimonial = () => {
  return (
    <section className="gray-simple bg-cover" >
        <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                <h2>Loving Reviews By Our Customers</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
            </div>
            </div>
            <Caraousel>
                {
                    Array(3).fill(null).map((_,index)=>(
                        <div key={index} className="col-12 p-2">
                            <div className="card border rounded-3">
                            <div className="card-body">
                                <div className="position-absolute top-0 end-0 mt-3 me-3"><span className="square--40 circle text-primary bg-light-primary"><i className="fa-solid fa-quote-right" /></span></div>
                                <div className="d-flex align-items-center flex-thumbes">
                                <div className="revws-pic"><img src={testImg} className="img-fluid rounded-2" width={80} alt="true" />
                                </div>
                                <div className="revws-caps ps-3">
                                    <h6 className="fw-bold fs-6 m-0">Aman Diwakar</h6>
                                    <p className="text-muted-2 text-md m-0">United States</p>
                                    <div className="d-flex align-items-center justify-content-start">
                                    <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                                    <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                                    <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                                    <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star" /></span>
                                    </div>
                                </div>
                                </div>
                                <div className="revws-desc mt-3">
                                <p className="m-0 text-md">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </Caraousel>
        </div>
    </section>

  )
}

export default Testimonial