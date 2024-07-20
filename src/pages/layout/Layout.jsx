import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import HeaderLight from '../../components/HeaderLight'
import { useLocation } from 'react-router-dom'

const Layout = ({header, children}) => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isFixed, setisFixed] = useState(false)
  const [mobNav, setmob_Nav] = useState(false)

  const setmobNav = () =>{
    setmob_Nav(!mobNav)
  }

  const navLinks = [
    { name:"Home", path:"/" },
    { name:"Hotel List", path:"/hotel-list" },
    { name:"Hotel View", path:"/hotel-view" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setisFixed(true);
      } else {
        setisFixed(false);
      }
    };
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    };
  }, []);
  

  const {pathname} = useLocation();

  return (
    <div>
      {
        header === "light" ? 
        <Header navLinks={navLinks} activeLink={pathname} isFixed={isFixed} width={viewportWidth} mobNav={mobNav}
        setmobNav={setmobNav} /> : 
        <HeaderLight navLinks={navLinks} activeLink={pathname} isFixed={isFixed} width={viewportWidth} mobNav={mobNav}
        setmobNav={setmobNav}  />
      }
        {children}
        <Footer />
    </div>
  )
}

export default Layout