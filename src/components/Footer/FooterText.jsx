import React from 'react'
import logo_light from "../../assets/img/logo-light.png"
import payment from "../../assets/img/payment.png"
import partner_1 from "../../assets/img/mytrip.png"
import partner_2 from "../../assets/img/tripadv.png"
import partner_3 from "../../assets/img/goibibo.png"

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
                        <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-google-plus" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa-brands fa-dribbble" /></a></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                    <h4 className="widget-title">The Navigation</h4>
                    <ul className="footer-menu">
                    <li><a href="#">Talent Marketplace</a></li>
                    <li><a href="#">Payroll Services</a></li>
                    <li><a href="#">Direct Contracts</a></li>
                    <li><a href="#">Hire Worldwide</a></li>
                    <li><a href="#">Hire in the USA</a></li>
                    <li><a href="#">How to Hire</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                    <h4 className="widget-title">Our Resources</h4>
                    <ul className="footer-menu">
                    <li><a href="#">Free Business tools</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Upwork Reviews</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Help &amp; Support</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                    <h4 className="widget-title">The Company</h4>
                    <ul className="footer-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Trust, Safety &amp; Security</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <h4 className="widget-title">Payment Methods</h4>
                    <div className="pmt-wrap">
                    <img src={payment} className="img-fluid" alt />
                    </div>
                    <div className="our-prtwrap mt-4">
                    <div className="prtn-title">
                        <p className="text-light opacity-75 fw-medium">Our Partners</p>
                    </div>
                    <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                        <div className="pmt-wrap pe-4">
                        <img src={partner_1} className="img-fluid" alt />
                        </div>
                        <div className="pmt-wrap pe-4">
                        <img src={partner_2} className="img-fluid" alt />
                        </div>
                        <div className="pmt-wrap pe-4">
                        <img src={partner_3} className="img-fluid" alt />
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
                <div className="col-xl-6 col-lg-6 col-md-6">
                <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                    <li><a href="#">Terms of services</a></li>
                    <li className="ms-3"><a href="#">Privacy Policies</a></li>
                    <li className="ms-3"><a href="#">Cookies</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default FooterText