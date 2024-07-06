import React from "react";
import { IoMdStarOutline } from "react-icons/io";
const AddReview = () => {
  return (
    <section className="id='reviews'">

  
    <div className="px-6 md:px-0">
      <h2 className="font-anglecia text-[#21160e] font-normal leading-8 text-[24px] pt-8 pb-6">
        Add a Review
      </h2>
      <p className="font-roboto font-normal text-[#473d35] text-base leading-6 pb-6 pt-2">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="md:grid grid-cols-4">
        <div className="mb-6 md:mb-0">
          <h4 className="font-roboto font-normal text-[#7a6f68] text-[12px] leading-4">
            ACCOMMODATION
          </h4>
          <div className="flex gap-x6 mt-2">
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="font-roboto font-normal text-[#7a6f68] text-[12px] leading-4">
            LOCATION
          </h4>
          <div className="flex gap-x6 mt-2">
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="font-roboto font-normal text-[#7a6f68] text-[12px] leading-4">
            MEALS
          </h4>
          <div className="flex gap-x6 mt-2">
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
          </div>
        </div>
        <div >
          <h4 className="font-roboto font-normal text-[#7a6f68] text-[12px] leading-4">
            FACILITIES
          </h4>
          <div className="flex gap-x6 mt-2">
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
            <IoMdStarOutline className="text-3xl text-[#bf885e]" />
          </div>
        </div>
      </div>
      {/* YOUR REVIEW Message From * */}
      <div className="form mt-8 ">
        <h2 className="font-roboto font-normal text-[#7a6f68] text-[12px] leading-4 pb-4 ">
          YOUR REVIEW *
        </h2>
        <textarea
          maxLength={400}
          rows={10}
          className="border-2 border-black w-full outline-none resize-none row-span-10 placeholder:font-anglecia placeholder:font-normal placeholder:px-2 focus:pl-2 focus:text-[16px] placeholder:text-base placeholder:leading-10"
          placeholder="Your Review"
        ></textarea>
        <div className="md:flex gap-x-6 mt-6">
          <div className="inputBox w-full">
            <h5 className=" font-roboto font-normal text-[#7a6f68] text-[12px] leading-4 pb-4 uppercase">
              NAME *
            </h5>
            <input
              type="text"
              className="border-2 border-black outline-none w-full py-3 placeholder:font-anglecia placeholder:font-normal placeholder:px-2 focus:pl-2 focus:text-[16px] placeholder:text-base placeholder:leading-10 "
              placeholder="Your Name"
            />
          </div>
          <div className="inputBox w-full md:mt-0 mt-6">
            <h5 className="font-roboto font-normal text-[#7a6f68] text-[12px] leading-4 pb-4 uppercase">
              Email *
            </h5>
            <input
              type="text"
              className="border-2 border-black outline-none w-full py-3 placeholder:font-anglecia placeholder:font-normal placeholder:px-2 focus:pl-2 focus:text-[16px] placeholder:text-base placeholder:leading-10 "
              placeholder="Your Email Address"
            />
          </div>
        </div>
        <button
          type="submit"
          className=" mt-8 bg-btn font-roboto w-full md:w-[20%] font-normal hover:bg-btnhover duration-500  md:px-8 py-4 text-[16px] leading-6 text-[#fff] uppercase"
        >
          post review
        </button>
      </div>
    </div>
    </section>
  );
};

export default AddReview;
