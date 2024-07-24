import React from 'react'
import logo_light from "../assets/img/logo-icon.png"
import logo from "../assets/img/logo-icon.png"
import { Link } from 'react-router-dom'

const Header = ({navLinks,activeLink,isFixed,width,mobNav,setmobNav,authToken,userLinks}) => {    
  return (
    <div>
        <div className={`header header-transparent theme ${isFixed ? "header-fixed" : ""}`}>
            <div className="container">
            <nav id="navigation" className={`navigation navigation-${width >= 993?"landscape":"portrait"}`}>
                <div className="nav-header">
                <Link className="nav-brand static-show" to="/"><img src={logo_light} className="logo" alt="logo img" /></Link>
                <Link className="nav-brand mob-show" to="/"><img src={logo} className="logo" alt="header logo" /></Link>
                <div className="nav-toggle" onClick={setmobNav} />
                <div className="mobile_nav">
                    <ul>
                    {
                        authToken === null ?
                        <li>
                            <Link to="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></Link>
                        </li>
                        :
                        <li className='dropdown'>
                            <Link to="#" className="bg-light-primary text-primary rounded" type='button' data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-regular fa-circle-user fs-6" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {
                                    userLinks.map((item,index)=>(
                                        <li className='w-100' key={index}>
                                            <Link className={`d-block h-auto w-100 py-1 ${item.name === "Logout" ? "text-danger" :""}`} to={item.link} style={{whiteSpace:"nowrap"}} onClick={item.function || null} >{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    }
                    </ul>
                </div>
                </div>
                <div className={`nav-menus-wrapper ${mobNav ? "nav-menus-wrapper-open" :""}`}>
                <span className="nav-menus-wrapper-close-button" onClick={setmobNav}>✕</span>
                <ul className="nav-menu">
                    {
                        navLinks.map((item,index)=>(
                            <li key={index} className={`${activeLink === item.path ? "active" :""}`} onClick={width >= 993?null :setmobNav} >
                                <Link to={item.path} >{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                    {
                        authToken === null ?
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="list-buttons light">
                                <Link to='#' data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Log In / Register</Link>
                            </li>
                        </ul>
                            :
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="list-buttons light position-relative">
                                <Link to="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-regular fa-circle-user fs-6 me-2" /> Hii, User
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    {
                                        userLinks.map((item,index)=>(
                                            <li key={index}>
                                                <Link className={`w-100 py-1 ${item.name === "Logout" ? "text-danger" :""}`} to={item.link} style={{whiteSpace:"nowrap"}} onClick={item.function || null} >{item.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    }
                </div>
                {mobNav ? <div className="nav-overlay-panel" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'block'}} onClick={setmobNav} /> :""}
            </nav>
            </div>
        </div>
    </div>
  )
}

export default Header