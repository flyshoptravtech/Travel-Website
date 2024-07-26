import React from 'react'
import Layout from '../layout/Layout'

const AffiliateForm = () => {
  return (
    <Layout>
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center align-items-center m-auto">
                <div className="col-12">
                    <div className="bg-mode shadow rounded-3 overflow-hidden">
                    <div className="row g-0">
                        <div className="col-12 order-1">
                        <div className="p-4 p-sm-7">
                            <h1 className="mb-2 fs-2">Join us as Influencer</h1>
                            <form className="mt-3 text-start">
                            <div className="form">
                                <div className="form-group">
                                <label className="form-label">Enter Name *</label>
                                <input type="text" className="form-control" name='name' placeholder="Enter Your Name" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Enter Email *</label>
                                <input type="email" className="form-control" name='email' placeholder="name@example.com" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Youtube Link <span style={{fontSize:'12px',fontWeight:"600"}}>( Kindly copy the URL link of your profile from your browser and paste here )</span></label>
                                <input type="text" className="form-control" name='email' placeholder="https://www.youtube.com/username" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Youtube Subscriber ( In Number ) :</label>
                                <input type="number" className="form-control" name='email' placeholder="Youtube Subscriber" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Instagram Link</label>
                                <input type="text" className="form-control" name='email' placeholder="https://www.instagram.com/username" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Instagram Followers ( In Number ) :</label>
                                <input type="text" className="form-control" name='email' placeholder="Instaram Followers" autoFocus />
                                </div>
                                <div className="form-group">
                                <label className="form-label">Whatsapp Number*</label>
                                <input type="number" className="form-control" name='email' placeholder="Enter Number" autoFocus />
                                </div>
                                <div className="form-group">
                                <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Submit</button>
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