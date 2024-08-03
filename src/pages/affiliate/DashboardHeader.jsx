import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const profileLinks = [
    {name:"My Profile",link:"/affiliate-profile",icon:<i className="fa-regular fa-id-card me-2" />},
    {name:"My Homestay",link:"/affiliate-homestay",icon:<i className="fa-solid fa-ticket me-2" />},
    {name:"Add Homestay",link:"/add-homestay-affiliate",icon:<i className="fa-solid fa-ticket me-2" />},
    {name:"Sign Out",link:"#",icon:<i className="fa-solid fa-power-off me-2" />},
]

const DashboardHeader = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate()

    const logOut = () =>{
        toast.success("Logout Sucessfully..")
        localStorage.removeItem("aff-info")
        localStorage.removeItem("aff-token");
        navigate("/");
    }

    return (
        <div>
        <div className="dashboard-menus border-top d-none d-lg-block">
            <div className="container">
                <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <ul className="user-Dashboard-menu">
                        {
                            profileLinks.map((item,index)=>(
                                <li className={`${pathname === item.link ? "active":""}`} key={index}>
                                    <Link to={item.link} onClick={item.name === "Sign Out" ? logOut : null} >
                                        {item.icon}{item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const DashboardMobile = ()=>{
    const {pathname} = useLocation();
    const navigate = useNavigate()

    const logOut = () =>{
        toast.success("Logout Sucessfully..")
        localStorage.removeItem("aff-info")
        localStorage.removeItem("aff-token");
        navigate("/")
    }

    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                <button className="btn btn-dark fw-medium full-width d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDashboard" aria-controls="offcanvasDashboard"><i className="fa-solid fa-gauge me-2" />Dashboard
                    Navigation</button>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasDashboard" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header gray-simple">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                    <div className="offcanvas-body p-0">
                        <ul className="user-Dashboard-longmenu">
                            {
                                profileLinks.map((item,index)=>(
                                    <li className={`${pathname === item.link ? "active":""}`} key={index}>
                                        <Link to={item.link} onClick={item.name === "Sign Out" ? logOut : null} >
                                            {item.icon}{item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {DashboardHeader,DashboardMobile}