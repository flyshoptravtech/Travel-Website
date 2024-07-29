import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLight from "../../components/HeaderLight";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Layout = ({ header, children }) => {

  const isAff1 = localStorage.getItem("aff-info")
  const isAff2 = localStorage.getItem("aff-token")
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isFixed, setisFixed] = useState(false);
  const [mobNav, setmob_Nav] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    toast.success("Logout Successfully..");
    navigate("/");
  };

  const userLinks = [
    { name: "My Profile", link: "/my-profile",logo:<i className="fa-regular fa-id-card me-2"></i> },
    { name: "Logout", link:"#",function: logOut,logo:<i className="fa-solid fa-power-off me-2"></i> },
  ];

  const setmobNav = () => {
    setmob_Nav(!mobNav);
  };

  const navLinks = [
    { name: "Hotel View", path: "/hotel-view" },
    { 
      name: `${isAff1 || isAff2 ? "Affiliate-Profile" : "Affiliate"}`,
      path: `${isAff1 || isAff2 ? "/affiliate-profile" : "/affiliate-login"}`
    },
  ];

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
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const { pathname } = useLocation();

  return (
    <div>
      {header === "light" ? (
        <Header
          navLinks={navLinks}
          activeLink={pathname}
          isFixed={isFixed}
          width={viewportWidth}
          mobNav={mobNav}
          setmobNav={setmobNav}
          authToken={authToken}
          logout={logOut}
          userLinks={authToken === null ? null : userLinks}
        />
      ) : (
        <HeaderLight
          navLinks={navLinks}
          activeLink={pathname}
          isFixed={isFixed}
          width={viewportWidth}
          mobNav={mobNav}
          setmobNav={setmobNav}
          authToken={authToken}
          logout={logOut}
          userLinks={authToken === null ? null : userLinks}
        />
      )}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
