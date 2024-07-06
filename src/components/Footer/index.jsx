import React from "react";
import Logo from "../../assets/images/logo.png";
import f1imag from "../../assets/images/f1.png";
import f2imag from "../../assets/images/f2.png";
import f3imag from "../../assets/images/f3.png";
import { Link } from "react-router-dom";
import arrows from "../../assets/images/arrows.svg";
const Footer = () => {
  return (
    <section className="bg-[#473d35] py-[120px] px-6 md:px-0 ">
      <div className="max-w-container m-auto">
        <div className="md:flex md:justify-between ">
          <div className="pb-6 md:pb-0">
            <picture>
              <img src={Logo} alt="" className="cursor-pointer" />
            </picture>
            <p className="text-[#d4cfcd] font-normal font-roboto text-base pt-3">
              7 Rue Caulaincourt, 75018 Paris, France
            </p>
            <p className="text-[#d4cfcd] font-normal font-roboto text-base py-3">
              <span className="font-medium">Phone:</span> +1 800 603 6035
              (Viber, WhatsApp)
            </p>
            <p className="text-[#d4cfcd] font-normal font-roboto text-base">
              <span className=" font-medium">Fax:</span> +1 800 889 9898
            </p>{" "}
            <p className="text-[#d9945f] text-base py-3">
              <span className="text-[#d4cfcd] font-normal font-roboto text-base">
                Email:
              </span>{" "}
              mail@companyname.com
            </p>
          </div>
          <div className="pb-6 md:pb-0">
            <h4 className="text-[24px] leading-8 text-[#fff] font-normal font-anglecia pb-4">
              Menu
            </h4>
            <ul className="flex flex-col">
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    About
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Office
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3 ">
                    News
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base">
                    Contact Us
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="pb-6 md:pb-0">
            <h4 className="text-[24px] leading-8 text-[#fff] font-normal font-anglecia pb-4">
              Rooms & Suits
            </h4>
            <ul className="flex flex-col">
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Cassic
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Superior
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Deluxe
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base">
                    Master
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="pb-6 md:pb-0">
            <h4 className="text-[24px] leading-8 text-[#fff] font-normal font-anglecia pb-4">
              Stay Connected
            </h4>
            <ul className="flex flex-col">
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Facebook
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Instagram
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px] text-base pb-3">
                    Twitter
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <img src={arrows} className="w-[40px]" alt="" />
                <div>
                  <Link className="text-[#d9945f] font-roboto leading-[24px]  text-base">
                    Tripadvia
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="pb-6 md:pb-0">
            <h4 className="text-[24px] leading-8 text-[#fff] font-normal font-anglecia">
              Our Awards
            </h4>
            <div className="flex mt-5 justify-between   md:gap-x-5">
              <div className="w-24 h-24 cursor-pointer">
                <img src={f1imag} alt="" />
              </div>
              <div className="w-24 h-24 cursor-pointer">
                <img src={f2imag} alt="" />
              </div>

              <div className="w-24 h-24 cursor-pointer">
                <img src={f3imag} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="copyright text-center leading-6 font-roboto text-[14px] pt-20 text-[#d4cfcd]">
          <p>Copyright © 2021 Hôtel Privé. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
