import React from 'react'
import logo_light from "../assets/img/logo-light.png"
import logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom'

const Header = ({navLinks,activeLink,isFixed,width,mobNav,setmobNav}) => {
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
                        <li>
                            <a className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className={`nav-menus-wrapper ${mobNav ? "nav-menus-wrapper-open" :""}`}>
                <span class="nav-menus-wrapper-close-button" onClick={setmobNav}>✕</span>
                <ul className="nav-menu">
                    {
                        navLinks.map((item,index)=>(
                            <li key={index} className={`${activeLink === item.path ? "active" :""}`} onClick={width >= 993?null :setmobNav} >
                                <Link to={item.path} >{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="nav-menu nav-menu-social align-to-right">
                    <li className="list-buttons light">
                        <a href='#' data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Sign In / Register</a>
                    </li>
                </ul>
                </div>
                {mobNav ? <div className="nav-overlay-panel" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'block'}} onClick={setmobNav} /> :""}
            </nav>
            </div>
        </div>
    </div>
  )
}

export default Header