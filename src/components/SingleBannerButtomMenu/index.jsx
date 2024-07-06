import React from "react";
import { NavLink } from "react-router-dom";
import Description from "../Description";

const SingleBannerButtomMenu = () => {
  return (
    <section className="">
      <div className="bg-[#473d35]">
        <div className="max-w-container m-auto">
        <ul className='pdct_navs  overflow-x-auto whitespace-nowrap'>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-dark' href="#description">Description</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#room_facilities">Room Facilities</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#floor_plan">Floor Plan</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#photo_gallery">Photo Gallery</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#rates">Rates</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="">Availability</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#reservation_form">Reservation Form</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#reviews">Reviews</a></li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleBannerButtomMenu;
