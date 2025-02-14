import React from "react";
import relatedImageOne from "../../assets/images/relatedOne.jpg";
import relatedImagTwo from "../../assets/images/relatedTwo.jpg";
import relatedImagthree from "../../assets/images/relatedThree.jpg";
const RelatedRoom = () => {
  return (
    <div className="py-24 md:mx-0 mx-6">
      <div className="max-w-container m-auto ">
        <h1 className="font-anglecia font-normal text-[40px] md:text-[56px] text-[#21160e] leading-[64px] mb-10">
          Related Rooms
        </h1>
        <div className="md:grid grid-cols-3 gap-x-6 ">
          <div className="relative group mb-10 md:mb-0 ">
            <picture>
              <img src={relatedImageOne} alt="" />
            </picture>
            <div className="relatedimgshap  box-border w-full md:w-[400px] md:group-hover:bg-[#faf5f2]  duration-300 ease-in-out   p-10 z-10  bg-[#faf5f2]  md:absolute md:-bottom-10 md:left-[50%] md:translate-x-[-50%] text-center">
              <h1 className="font-anglecia font-normal text-[36px] leading-[48px] text-[#21160e]">
                Deluxe Double Room
              </h1>
              <p className="font-anglecia font-normal text-[16px] text-[#21160e] leading-5 pb-8">
                From <span className="text-[32px] leading-8">$329/</span> night
              </p>
              <div className="md:hidden md:group-hover:block  duration-700 ease-in-out mt-4">
                <button className="bg-btn  hover:bg-btnhover  duration-700 font-normal text-base leading-6 uppercase px-6 mr-2 md:mr-0 md:px-10 py-4  font-roboto text-white mb-4 ">
                  Book Now
                </button>
                <button className="bg-[#a38c7a] font-normal text-base leading-6 uppercase px-6 md:px-10 py-4  font-roboto text-white ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="relative group mb-10 md:mb-0 ">
            <picture>
              <img src={relatedImageOne} alt="" />
            </picture>
            <div className="relatedimgshap  box-border w-full md:w-[400px] md:group-hover:bg-[#faf5f2]  duration-300 ease-in-out   p-10 z-10  bg-[#faf5f2]  md:absolute md:-bottom-10 md:left-[50%] md:translate-x-[-50%] text-center">
              <h1 className="font-anglecia font-normal text-[36px] leading-[48px] text-[#21160e]">
                Deluxe Suite
              </h1>
              <p className="font-anglecia font-normal text-[16px] text-[#21160e] leading-5 pb-8">
                From <span className="text-[32px] leading-8">$329/</span> night
              </p>
              <div className="md:hidden md:group-hover:block  duration-700 ease-in-out mt-4">
                <button className="bg-btn  hover:bg-btnhover  duration-700 font-normal text-base leading-6 uppercase px-6 mr-2 md:mr-0 md:px-10 py-4  font-roboto text-white mb-4 ">
                  Book Now
                </button>
                <button className="bg-[#a38c7a] font-normal text-base leading-6 uppercase px-6 md:px-10 py-4  font-roboto text-white ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="relative group  md:mb-0 ">
            <picture>
              <img src={relatedImageOne} alt="" />
            </picture>
            <div className="relatedimgshap  box-border w-full md:w-[400px] md:group-hover:bg-[#faf5f2]  duration-300 ease-in-out   p-10 z-10  bg-[#faf5f2]  md:absolute md:-bottom-10 md:left-[50%] md:translate-x-[-50%] text-center">
              <h1 className="font-anglecia font-normal text-[36px] leading-[48px] text-[#21160e]">
                Honeymoon Villa
              </h1>
              <p className="font-anglecia font-normal text-[16px] text-[#21160e] leading-5 pb-8">
                From <span className="text-[32px] leading-8">$329/</span> night
              </p>
              <div className="md:hidden md:group-hover:block  duration-700 ease-in-out mt-4">
                <button className="bg-btn  hover:bg-btnhover  duration-700 font-normal text-base leading-6 uppercase px-6 mr-2 md:mr-0 md:px-10 py-4  font-roboto text-white mb-4 ">
                  Book Now
                </button>
                <button className="bg-[#a38c7a] font-normal text-base leading-6 uppercase px-6 md:px-10 py-4  font-roboto text-white ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedRoom;
