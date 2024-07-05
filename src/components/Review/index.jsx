import React from "react";
import Review2 from "../../assets/images/review2.jpg";
import Review1 from "../../assets/images/review1.jpg";
import { IoIosStar } from "react-icons/io";
const Review = () => {
  return (
    <div>
      <div className="">
        <h2 className="font-anglecia text-[#21160e] font-normal leading-8 text-[24px] pt-10 pb-6">
          Reviews
        </h2>
        <div className="flex gap-x-8">
          <div className="w-[20%] bg-[#f5f0eb] text-center box-content px-10 py-20 ">
            <p className="font-anglecia font-normal text-[96px] leading-[96px]  text-[#bf885e]">
              4.5
            </p>
            <h4 className="font-anglecia font-normal text-[#21160e] text-[24px]">
              Good
            </h4>
          </div>
          <div className="w-[70%]  ">
            <div className="relative">
              <div className="flex justify-between border-b-4 border-[#f5f0eb] py-4 after:h-[3px] after:w-[80%] after:content['] after:bg-[#bf885e] after:absolute  after:top-16 after:left-0">
                <h2 className="font-roboto font-normal text-lg leading-8 text-[#21160e]">
                  Accommodation
                </h2>
                <h4 className="">4.5</h4>
              </div>
            </div>
            <div className="relative mt-3">
              <div className="flex justify-between border-b-4 border-[#f5f0eb] py-4 after:h-[3px] after:w-[75%] after:content['] after:bg-[#bf885e] after:absolute  after:top-16 after:left-0">
                <h2 className="font-roboto font-normal text-lg leading-8 text-[#21160e]">
                  Location
                </h2>
                <h4 className="font-roboto font-normal text-lg text-[#21160e] leading-8">
                  4.
                </h4>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between border-b-4 border-[#f5f0eb] py-4 after:h-[3px] after:w-[85%] after:content['] after:bg-[#bf885e] after:absolute  after:top-16 after:left-0">
                <h2 className="font-roboto font-normal text-lg leading-8 text-[#21160e]">
                  Meals
                </h2>
                <h4 className="font-roboto font-normal text-lg text-[#21160e] leading-8">
                  4.8
                </h4>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between border-b-4 border-[#f5f0eb] py-4 after:h-[3px] after:w-[95%] after:content['] after:bg-[#bf885e] after:absolute  after:top-16 after:left-0">
                <h2 className="font-roboto font-normal text-lg leading-8 text-[#21160e]">
                  Facilities
                </h2>
                <h4 className="font-roboto font-normal text-lg text-[#21160e] leading-8">
                  4.9
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h1 className="font-anglecia font-normal text-[#21160e] text-[24px] leading-8">
            2 Reviews
          </h1>
          <button className="bg-btn py-3 px-6 hover:bg-btnhover duration-700 uppercase font-roboto font-normal text-sm leading-4 text-[#fff] ">
            Write Review
          </button>
        </div>
        <div className="reviewUser mt-6">
          <div className="flex">
            <div className="w-[150px]">
              <picture>
                <img src={Review2} className="rounded-full" alt="" />
              </picture>
            </div>
            <div className="flex  justify-between">
              <div>
                <h3 className="font-anglecia text-xl text-[#21160e] font-normal leading-8">
                  John Smith
                </h3>
                <p className="font-roboto font-normal text-[#473d35] text-base leading-6 pt-6 ">
                  Mauris accumsan nulla vel diam. Sed in lacus ut enim
                  adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit
                  amet, euismod in,auctor ut, ligula.
                </p>
              </div>
              <div className="flex">
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
              </div>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="w-[150px]">
              <picture>
                <img src={Review1} className="rounded-full" alt="" />
              </picture>
            </div>
            <div className="flex  justify-between">
              <div>
                <h3 className="font-anglecia text-xl text-[#21160e] font-normal leading-8">
                  Sara Franklin
                </h3>
                <p className="font-roboto font-normal text-[#473d35] text-base leading-6 pt-6 ">
                  Mauris accumsan nulla vel diam. Sed in lacus ut enim
                  adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit
                  amet, euismod in,auctor ut, ligula.
                </p>
              </div>
              <div className="flex">
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
                <IoIosStar className="text-[#bf885e] text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
