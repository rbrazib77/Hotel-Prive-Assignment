import React, { useState, useEffect } from "react";

import Logo from "../../assets/images/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setStickyClass("sticky-nav") : setStickyClass("");
    } else {
      setStickyClass("");
    }
  };
  return (
    <>
      {location.pathname == "/" ? (
        <nav className={stickyClass ? "navbar sticky-nav " : "sticky-navs"}>
          <div
            className={
              stickyClass
                ? "md:bg-[#473d35] bg-transparent   transition delay-200 duration-700"
                : "block"
            }
          >
            <div className="max-w-container  m-auto px-6 md:px-0">
              <div className="flex md:justify-between items-center py-6 md:py-10">
                <div className="flex md:gap-x-6">
                  <div className="sideMenu">
                    <Sidebar />
                  </div>
                  <div className="select ml-20">
                    <select
                      name=""
                      id=""
                      className="bg-transparent w-16 py-1 select_box font-roboto text-sm font-normal"
                    >
                      <option value="EN">EN</option>
                      <option value="DC">DC</option>
                    </select>
                  </div>
                </div>

                <div className="ml-auto md:ml-0">
                  <picture>
                    <img src={Logo} alt="NoT" />
                  </picture>
                </div>
                <div className=" hidden md:block">
                  <ul className="flex">
                    <div className="flex gap-x-3">
                      <div className="flex items-center gap-x-3 text-white">
                        <IoCallOutline />{" "}
                        <span className="">+1 800 603 6035</span>
                      </div>
                      <div className="booking">
                        <button className=" py-3 px-7 bg-[#A6734B] hover:bg-btn transition delay-150 duration-600 text-white">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className=" hidden md:hidden">
                <ul className="flex justify-between">
                  <div className="flex   md:gap-x-3">
                    <div className="flex items-center gap-x-3 text-white">
                      <IoCallOutline />{" "}
                      <span className="">+1 800 603 6035</span>
                    </div>
                    <div className="booking">
                      <button className=" py-3 px-7 bg-btn hover:bg-btnhover transition delay-150 duration-600 text-white">
                        Book Now
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
      {/* /* //Single Room Page Navbar */}
      {location.pathname == "/singleroom" ? (

        <nav className="bg-[#473d35] fixed   z-[9999] w-full">
          <div className="">
            <div className="max-w-container m-auto px-6 md:px-0">
              <div className="flex md:justify-between items-center py-6 md:py-10">
                <div className="flex md:gap-x-6">
                  <div className="sideMenu">
                    <Sidebar />
                  </div>
                  <div className="select ml-20">
                    <select
                      name=""
                      id=""
                      className="bg-transparent w-16 py-1 select_box font-roboto text-sm font-normal"
                    >
                      <option value="EN">EN</option>
                      <option value="DC">DC</option>
                    </select>
                  </div>
                </div>

                <div className="ml-auto md:ml-0">
                  <picture>
                    <img src={Logo} alt="NoT" />
                  </picture>
                </div>
                <div className=" hidden md:block">
                  <ul className="flex">
                    <div className="flex gap-x-3">
                      <div className="flex items-center gap-x-3 text-white">
                        <IoCallOutline />{" "}
                        <span className="">+1 800 603 6035</span>
                      </div>
                      <div className="booking">
                        <button className=" py-3 px-7 bg-btn hover:bg-btnhover  duration-700 text-white">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className=" hidden md:hidden">
                <ul className="flex justify-between">
                  <div className="flex   md:gap-x-3">
                    <div className="flex items-center gap-x-3 text-white">
                      <IoCallOutline />{" "}
                      <span className="">+1 800 603 6035</span>
                    </div>
                    <div className="booking">
                      <button className=" py-3 px-7 bg-[#A6734B] hover:bg-btn transition delay-150 duration-600 text-white">
                        Book Now
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
