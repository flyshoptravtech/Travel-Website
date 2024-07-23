import React from 'react'
import logo from "../assets/img/logo.png"
import { Link } from 'react-router-dom'

const HeaderLight = ({navLinks,activeLink,isFixed,width,mobNav,setmobNav,authToken,logout}) => {
  return (
    <div className={`header header-light ${isFixed ? "header-fixed" : ""}`}>
        <div className="container">
            <nav id="navigation" className={`navigation navigation-${width >= 993?"landscape":"portrait"}`}>
            <div className="nav-header">
                <Link className="nav-brand" to="/"><img src={logo} className="logo" alt="logo img" /></Link>
                <div className="nav-toggle" onClick={setmobNav} />
                <div className="mobile_nav">
                <ul>
                    <li>
                        <Link to="/" className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6" /></Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className={`nav-menus-wrapper ${mobNav ? "nav-menus-wrapper-open" :""}`}>
                <span className="nav-menus-wrapper-close-button" onClick={setmobNav}>✕</span>
                <ul className="nav-menu">
                    {
                        navLinks.map((item,index)=>(
                            <li key={index} className={`${activeLink === item.path ? "active" :""}`} onClick={width >= 993?null :setmobNav} >
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                {
                        authToken === null ?
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="list-buttons">
                                <a href='#' data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Log In / Register</a>
                            </li>
                        </ul>
                            :
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="list-buttons light position-relative">
                                <a className='bg-danger' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-regular fa-circle-user fs-6 me-2" /> Hii, User
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="w-100 py-1" style={{whiteSpace:"nowrap"}} href="#">Action</a></li>
                                    <li><a className="w-100 py-1" style={{whiteSpace:"nowrap"}} href="#">Another action</a></li>
                                    <li><a className="w-100 py-1 text-danger" style={{whiteSpace:"nowrap"}} onClick={logout}>Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    }
            </div>
            {mobNav ? <div className="nav-overlay-panel" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'block'}} onClick={setmobNav} /> :""}
            </nav>
        </div>
    </div>

  )
}

export default HeaderLight