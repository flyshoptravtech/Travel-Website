import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import HeaderLight from '../../components/HeaderLight'
import { useLocation } from 'react-router-dom'

const Layout = ({header, children}) => {

  const [isFixed, setisFixed] = useState(false)

  const navLinks = [
    { name:"Home", path:"/" },
    { name:"Hotel List", path:"/hotel-list" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setisFixed(true);
      } else {
        setisFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const {pathname} = useLocation();

  return (
    <div>
      {
        header === "light" ? 
        <Header navLinks={navLinks} activeLink={pathname} isFixed={isFixed} /> : 
        <HeaderLight navLinks={navLinks} activeLink={pathname} isFixed={isFixed} />
      }
        {children}
        <Footer />
    </div>
  )
}

export default Layout