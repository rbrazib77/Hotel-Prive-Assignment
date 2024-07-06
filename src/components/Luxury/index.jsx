import React from "react";
import lux from "../../assets/images/lux.jpg";
import Arrows from "../../assets/images/arrows.svg";
import { CgArrowLongRight } from "react-icons/cg";
import titleLine from "../../assets/images/title_line.svg";
const Luxury = () => {
  return (
    <section id="welcome">
      <div className="md:flex  py-10 md:py-32 md:px-6 px-6">
        <div className="md:w-1/2 w-full block md:hidden">
          <div className="welcome_img">
            <picture>
              <img src={lux} alt={lux} />
            </picture>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="container_box relative z-[99] md:-right-16 px-0">
            <div className="welcome_info md:pl-20 relative bg-white md:after:absolute after:w-full md:after:content-[''] after:h-full md:after:border after:border-dark after:top-10 after:-right-8 after:z-[-1]  pt-20 md:before:absolute before:w-full before:content-[''] before:h-full before:border before:border-secondary before:top-12 before:-right-10 before:z-[-2]">
              <div className="title pb-4 text-left">
                <h4 className="font-roboto font-normal text-center text-lg uppercase flex items-center justify-start gap-5 text-secondary tracking-[5px]">
                  <picture>
                    <img src={titleLine} alt={titleLine} />
                  </picture>{" "}
                  Welcome{" "}
                </h4>
              </div>
              <h2 className="font-anglecia pb-10 font-normal leading-[1.7] text-dark_title text-4xl block">
                <span className="block text-6xl">Luxury Hotel </span>
                Near The Montmartre, <span className="md:block">Paris</span>
              </h2>
              <p className="text-lg pb-4 font-roboto font-bold text-dark_title leading-[1.7] justify w-[410px] md:w-[450px] ">
                Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
              </p>
              <p className="text-lg font-roboto font-normal text-dark_title  leading-[1.7] justify w-[360px] md:w-[450px]">
                Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                turpis. Integer rutrum ante eu lacus.
              </p>
              <a
                href="#"
                className="font-roboto text-btnhover pt-10 text-lg text-third font-medium tracking-[1px] flex items-center gap-10"
              >
                Explore More
                <span className="w-14  inline-block overflow-hidden">
                  <img className="w-20" src={Arrows} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full hidden md:block">
          <div className="welcome_img">
            <picture>
              <img src={lux} alt={lux} />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Luxury;
