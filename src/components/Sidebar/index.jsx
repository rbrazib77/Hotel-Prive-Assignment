import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import "../Sidebar/sidebar.css";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let [dropshow, setDropShow] = useState(false);
  let [dropshow2, setDropShow2] = useState(false);
  let [dropshow3, setDropShow3] = useState(false);
  let [dropshow4, setDropShow4] = useState(false);
  let [dropshow5, setDropShow5] = useState(false);
  let [dropshow6, setDropShow6] = useState(false);
  let [dropshow7, setDropShow7] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handelDrop = () => {
    setDropShow(!dropshow);
  };
  const handelDrop2 = () => {
    setDropShow2(!dropshow2);
  };
  const handelDrop3 = () => {
    setDropShow3(!dropshow3);
  };
  const handelDrop4 = () => {
    setDropShow4(!dropshow4);
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggleSidebar} className="toggle-button fixed">
          {isOpen ? (
            <IoCloseSharp className="text-5xl" />
          ) : (
            <div className="flex flex-col cursor-pointer ">
              <span className="bg-white h-[2px] w-8 inline-block"></span>
              <span className="bg-white h-[2px] w-6 inline-block my-2"></span>
              <span className="bg-white h-[2px] w-8 inline-block"></span>
            </div>
          )}
        </button>
        <div className="flex items-center justify-center mt-16 relative ">
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent focus:outline-none border-b-2 py-2 placeholder:text-base placeholder:font-normal placeholder:text-[#fff] placeholder:font-anglecia"
          />
          <IoSearchOutline className="absolute bottom-2 text-2xl right-14" />
        </div>
        <div className="sidebar-content flex justify-center m-auto">
          <ul className="">
            <li
              className="flex items-center font-roboto text-[14px] font-normal leading-8  hover:border-b-2 gap-x-2 transition delay-200 duration-700 "
              onClick={handelDrop}
            >
              Home
              <FaAngleDown />
            </li>
            {dropshow && (
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            )}
            <li
              className="flex items-center font-roboto text-[14px] font-normal leading-8 hover:border-b-2 gap-x-2 transition delay-200 duration-700 "
              onClick={handelDrop2}
            >
              ROOMS
              <FaAngleDown />
            </li>
            {dropshow2 && (
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            )}
            <li
              className="flex items-center uppercase font-roboto text-[14px] font-normal leading-8 hover:border-b-2 gap-x-2 transition delay-200 duration-700 "
              onClick={handelDrop3}
            >
              Pages
              <FaAngleDown />
            </li>
            {dropshow3 && (
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            )}

            <li
              className="flex items-center uppercase font-roboto text-[14px] font-normal leading-8 hover:border-b-2 gap-x-2 transition delay-200 duration-700 "
              onClick={handelDrop4}
            >
              Portfolio
              <FaAngleDown />
            </li>
            {dropshow4 && (
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <div className="icon flex w-[200px] gap-x-1 m-auto ">
          <FaFacebookF className="bg-btn p-3 text-5xl" />
          <FaInstagram className="bg-btn p-3 text-5xl" />
          <CiTwitter className="bg-btn p-3 text-5xl" />
          <FaFacebookF className="bg-btn p-3 text-5xl" />
        </div>
        <p className="text-center text-[14px] leading-[24px] font-normal font-roboto pt-6 text-[#d4cfcd]">
          7 Rue Caulaincourt, 75018{" "}
        </p>
        <p className="text-center text-[14px] leading-[24px] font-normal font-roboto text-[#d4cfcd]">Paris, France </p>
        <p className="text-center text-[14px] leading-[24px] font-normal font-roboto text-[#d4cfcd] pt-7">
          +1 800 603 6035 (Viber,
          <br /> WhatsApp)<span> </span>
        </p>
        <p className="text-center font-normal font-roboto text-[14px] text-[#d9945f]  pt-16">
          mail@companyname.com
        </p>
      </div>
    </>
  );
};

export default Sidebar;
