import React from 'react'
import logo_light from "../../../assets/img/logo-icon.png"
import payment from "../../../assets/img/payment.png"
import partner_1 from "../../../assets/img/mytrip.png"
import partner_2 from "../../../assets/img/tripadv.png"
import partner_3 from "../../../assets/img/goibibo.png"
import { Link } from 'react-router-dom'

const FooterText = () => {
  return (
    <footer className="footer skin-dark-footer">
        <div>
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
                    <div className="d-flex align-items-start flex-column mb-3">
                    <div className="d-inline-block"><img src={logo_light} className="img-fluid" width={160} alt="Footer Logo" /></div>
                    </div>
                    <div className="footer-add pe-xl-3">
                    <p>We make your dream more beautiful &amp; enjoyful with lots of happiness.</p>
                    </div>
                    <div className="foot-socials">
                    <ul>
                        <li><Link to="#"><i className="fa-brands fa-facebook" /></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-linkedin" /></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-google-plus" /></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-dribbble" /></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                    <h4 className="widget-title">The Navigation</h4>
                    <ul className="footer-menu">
                    <li><Link to="#">Talent Marketplace</Link></li>
                    <li><Link to="#">Payroll Services</Link></li>
                    <li><Link to="#">Direct Contracts</Link></li>
                    <li><Link to="#">Hire Worldwide</Link></li>
                    <li><Link to="#">Hire in the USA</Link></li>
                    <li><Link to="#">How to Hire</Link></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                    <h4 className="widget-title">Our Resources</h4>
                    <ul className="footer-menu">
                    <li><Link to="#">Free Business tools</Link></li>
                    <li><Link to="#">Affiliate Program</Link></li>
                    <li><Link to="#">Success Stories</Link></li>
                    <li><Link to="#">Upwork Reviews</Link></li>
                    <li><Link to="#">Resources</Link></li>
                    <li><Link to="#">Help &amp; Support</Link></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                    <h4 className="widget-title">The Company</h4>
                    <ul className="footer-menu">
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Leadership</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Investor Relations</Link></li>
                    <li><Link to="#">Trust, Safety &amp; Security</Link></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <h4 className="widget-title">Payment Methods</h4>
                    <div className="pmt-wrap">
                    <img src={payment} className="img-fluid" alt="true" />
                    </div>
                    <div className="our-prtwrap mt-4">
                    <div className="prtn-title">
                        <p className="text-light opacity-75 fw-medium">Our Partners</p>
                    </div>
                    <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                        <div className="pmt-wrap pe-4">
                        <img src={partner_1} className="img-fluid" alt="true" />
                        </div>
                        <div className="pmt-wrap pe-4">
                        <img src={partner_2} className="img-fluid" alt="true" />
                        </div>
                        <div className="pmt-wrap pe-4">
                        <img src={partner_3} className="img-fluid" alt="true" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom border-top">
            <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12">
                    <p className="mb-0">© {new Date().getFullYear()} Demo Website Design by Flyshop.</p>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default FooterText