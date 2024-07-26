import React from 'react'
import logo from "../assets/img/logo-icon.png"
import { Link } from 'react-router-dom'

const HeaderLight = ({navLinks,activeLink,isFixed,width,mobNav,setmobNav,authToken,userLinks}) => {
  return (
    <div className={`header header-light shadow-sm ${isFixed ? "header-fixed" : ""}`}>
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
                                <Link to='#' data-bs-toggle="modal" data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6 me-2" />Log In / Register</Link>
                            </li>
                        </ul>
                            :
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="list-buttons light position-relative">
                                <Link to="#" className='bg-danger butt' type="button" data-bs-toggle="dropdown" aria-expanded="false">
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

  )
}

export default HeaderLight