import React from "react";
import { FaInstagram } from "react-icons/fa";
import insta1 from "../../assets/images/insta1.jpg";
import insta2 from "../../assets/images/insta2.jpg";
import insta3 from "../../assets/images/insta3.jpg";
import insta4 from "../../assets/images/insta4.jpg";
import insta5 from "../../assets/images/insta5.jpg";
import titleLine from "../../assets/images/title_line.svg";
const Instagram = () => {
  return (
    <section className="py-24 max-w-container m-auto ">
      <div className="md:text-center px-6 md:px-6 ">
        <div className="flex md:justify-center gap-x-5">
          <img src={titleLine} alt="" />
          <h5 className="text-base  font-roboto font-bold text-[#c9c8c8] tracking-[5px] ">
            #HOTELPRIVE
          </h5>
        </div>
        <h2 className="text-[56px] font-anglecia text-[#21160e] leading-[64px] font-normal py-6">
          Follow Us on Instagram
        </h2>
      </div>
      <div className="md:flex grid grid-cols-2  gap-x-5 px-6 md:px-0">
        <div className="md:w-1/5   relative group ">
          <img src={insta1} alt="" />
          <div className=" flex items-center justify-center h-full w-full absolute top-0 left-0 group-hover:bg-[#9c9c9c6e] duration-700">
            <FaInstagram className="hidden text-5xl text-white group-hover:block duration-700" />
          </div>
        </div>
        <div className="md:w-1/5   relative group ">
          <img src={insta2} alt="" />
          <div className=" flex items-center justify-center h-full w-full absolute top-0 left-0 group-hover:bg-[#9c9c9c6e] duration-700">
            <FaInstagram className="hidden text-5xl text-white group-hover:block duration-700" />
          </div>
        </div>
        <div className="md:w-1/5 relative group mt-6 mb-6 md:mb-0 md:mt-0 ">
          <img src={insta3} alt="" />
          <div className=" flex items-center justify-center h-full w-full absolute top-0 left-0 group-hover:bg-[#9c9c9c6e] duration-700">
            <FaInstagram className="hidden text-5xl text-white group-hover:block duration-700" />
          </div>
        </div>
        <div className="md:w-1/5 relative group mt-6 md:mt-0 ">
          <img src={insta4} alt="" />
          <div className=" flex items-center justify-center h-full w-full absolute top-0 left-0 group-hover:bg-[#9c9c9c6e] duration-700">
            <FaInstagram className="hidden text-5xl text-white group-hover:block duration-700" />
          </div>
        </div>
        <div className="md:w-1/5  relative group ">
          <img src={insta5} alt="" />
          <div className=" flex items-center justify-center h-full w-full absolute top-0 left-0 group-hover:bg-[#9c9c9c6e] duration-700">
            <FaInstagram className="hidden text-5xl text-white group-hover:block duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
