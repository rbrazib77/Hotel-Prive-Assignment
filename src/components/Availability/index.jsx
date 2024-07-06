import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
const Availability = () => {
  return (
    <div className="md:px-0 px-6">
      <div className="header">
        <h1 className="font-anglecia text-[#21160e] font-normal leading-8 text-[24px] pt-10 pb-6">
          Availability
        </h1>
      </div>
      <div className="topheade ">
        <thead className="bg-[#856a54] flex justify-between items-center py-5 px-5">
          <FaAngleLeft className="text-white" />
          <th className="text-red-300">
            <h2 className="text-white">September 2021</h2>
          </th>
          <FaAngleRight className="text-white" />
        </thead>
      </div>
      <div className="md:flex gap-x-6 box-border">
        <div className="md:mb-0 mb-6">
          {/* Frist calendar  */}
          <div className="header bg-[#856a54] mt-3 py-4">
            <thead className="flex justify-between px-7 text-white">
              <div className="flex gap-x-4 items-center">
                <h4 className="font-anglecia font-normal text-base text-[#fff]">September</h4>
               <FaAngleDown/>
              </div>
              <div className="flex gap-x-4 items-center">
                <h4 className="font-anglecia font-normal text-base text-[#fff]">2024</h4>
                <FaAngleDown/>
              </div>
            </thead>
          </div>
           {/* Second calendar  */}
          <div className="header bg-[#a38c7a] py-4">
            <thead className="flex justify-between px-7 text-white">
              <th>SUN</th>
              <th>MOU</th>
              <th>YUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
            </thead>
          </div>
          <div className="tablebody bg-white flex px-4">
            <table className="border-r-2 ">
              <li className="px-6 list-none py-4">30</li>
              <li className="px-6 list-none py-4">6</li>
              <li className="px-6 list-none py-4">13</li>
              <li className="px-6 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="px-6 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4">6</li>
              <li className="md:px-6 px-4 list-none py-4">13</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4">6</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4">6</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4">6</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4">27</li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4">6</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4">27</li>
            </table>{" "}
            <table className=" ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4">6</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4">27</li>
            </table>
          </div>
        </div>
        <div>
          <div className="header bg-[#856a54] mt-3 py-4">
            <thead className="flex justify-center px-7 text-white">
              <h4 className="font-anglecia font-normal text-base text-[#fff]">Octobar 2021</h4>
            </thead>
          </div>
          <div className="header bg-[#a38c7a] py-4">
            <thead className="flex justify-between px-7 text-white">
              <th>SUN</th>
              <th>MOU</th>
              <th>YUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
            </thead>
          </div>
          <div className="tablebody bg-white flex px-2">
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4 ">30</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4 ">30</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4">30</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-6 px-4 list-none py-4 ">30</li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-6 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                30
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
            <table className="border-r-2 ">
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                30
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>{" "}
            <table className=" ">
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                30
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                6
              </li>
              <li className="md:px-7 px-6 list-none py-4 bg-[#7d9e36] text-white">
                13
              </li>
              <li className="md:px-7 px-4 list-none py-4 bg-[#7d9e36] text-white">
                20
              </li>
              <li className="md:px-7 px-6 list-none py-4 bg-[#7d9e36] text-white">
                27
              </li>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
