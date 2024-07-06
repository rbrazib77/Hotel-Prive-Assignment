import React from "react";
import { FaInstagram } from "react-icons/fa";
import titleLine from "../../assets/images/title_line.svg";
import BannerImg from "../../assets/images/footerBg.svg";
const Newsletter = () => {
  const bgimg = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="">
      <div className="newsletter  " style={bgimg}>
        <div className="bg-[#664831f7] px-6 md:px-0 py-28">
          <div className="md:text-center">
            <div className="flex md:justify-center gap-x-5">
              <img src={titleLine} alt="" />
              <h5 className="text-base  font-roboto font-normal text-[#f2eeeb] tracking-[5px] ">
                JOIN OUR MAILING LIST
              </h5>
            </div>
            <h2 className="text-[40px] md:text-[60px] text-white font-roboto font-medium pb-7 pt-2 md:pt-4">
              Newsletter Sing UP
            </h2>
          </div>
          <div className=" md:w-2/3 m-auto ">
            <p className="text-[#c9c8c8] pb-2 md:pb-0">
              SIGN UP FOR NEWS AND SPECIAL OFFERS
            </p>
            <div className="md:flex gap-x-5">
              <input
                type="email"
                className="w-full focus:text-white focus:font-roboto focus:font-medium bg-transparent focus:outline-none border-b-2 py-2 placeholder:text-xl placeholder:text-white placeholder:font-medium font-roboto font-light"
                placeholder="Enter Email Address"
              />
              <button className="bg-btn mt-5 md:mt-0 w-full md:w-auto hover:bg-btnhover transition delay-150 duration-700 px-24 py-7 text-white font-roboto font-medium text-base">
                SUBCRIBER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
