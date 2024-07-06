import { useState } from "react";
import { IoCalendarSharp } from "react-icons/io5";
import package1 from "../../assets/images/package1.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import Amenities from "../Amenities";
const Check = () => {
  const [table, setTable] = useState("");
  const [tableTwo, setTableTwo] = useState("");
  const [count, setCount] = useState(1);
  const [childrencount, setChildrencount] = useState(0);
  const bgimg = {
    backgroundImage: `url(${package1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const handleIClickOne = () => {
    setTable(!table);
  };
  const handleIClickTwo = () => {
    setTableTwo(!tableTwo);
  };

  const handelChilInc = () => {
    setChildrencount((prev) => prev + 1);
  };
  const handelChilDec = () => {
    setChildrencount((prev) => prev - 1);
  };
  const handelInc = () => {
    setCount((prev) => prev + 1);
  };
  const handelDec = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className=" mt-28 md:px-0 px-6 ">
        <div className="md:w-[400px] w-full  bg-[#664831] p-10">
          <div className="flex items-center gap-x-5">
            <IoCalendarSharp className="text-[#fff] text-4xl" />
            <h1 className="font-anglecia font-normal text-2xl leading-8 text-[#fff]">
              Check <br /> Availability
            </h1>
          </div>
          <div className="w-full mt-6">
            <h4 className="font-roboto text-[12px] font-normal leading-4 text-[#d4cfcd] ">
              ARRIVAL DATE
            </h4>
            <div
              className="date-input-container border-b-2"
              onClick={handleIClickOne}
            >
              <div className="flex justify-between items-center  relative w-full ">
                <p className="pb-2 font-normal font-anglecia text-base  text-[#fff]">
                  <span className="inline-block pr-3"> FRIDAY Aprile,</span>
                  2020
                </p>
                {table ? (
                  <TfiAngleUp className="absolute top-[50%] text-[#ffff] right-0 translate-y-[-50%] text-base " />
                ) : (
                  <TfiAngleDown className="absolute top-[50%] text-[#ffff] right-0 translate-y-[-50%] text-base " />
                )}
              </div>

              {table && (
                <div>
                  <div className="w-full  m-auto absolute bottom left-0 z-10">
                    <div className="topheade ">
                      <thead className="bg-[#856a54] flex justify-between items-center py-5 px-5">
                        <FaAngleLeft className="text-white" />
                        <th className="text-red-300">
                          <h2 className="text-white">September 2021</h2>
                        </th>
                        <FaAngleRight className="text-white" />
                      </thead>
                    </div>
                    <div className="header bg-[#a38c7a] py-4">
                      <thead className="flex justify-between px-6 text-white">
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
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>{" "}
                      <table className=" ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full mt-6">
            <h4 className="font-roboto text-[12px] font-normal leading-4 text-[#d4cfcd] ">
              ARRIVAL DATE
            </h4>
            <div
              className="date-input-container border-b-2"
              onClick={handleIClickTwo}
            >
              <div className="flex justify-between items-center  relative w-full ">
                <p className="pb-2 font-normal font-anglecia text-base  text-[#fff]">
                  <span className="inline-block pr-3"> FRIDAY Aprile,</span>
                  2020
                </p>
                {tableTwo ? (
                  <TfiAngleUp className="absolute top-[50%] text-[#ffff] right-0 translate-y-[-50%] text-base " />
                ) : (
                  <TfiAngleDown className="absolute top-[50%] text-[#ffff] right-0 translate-y-[-50%] text-base " />
                )}
              </div>

              {tableTwo && (
                <div>
                  <div className="w-full  m-auto absolute bottom left-0 z-10">
                    <div className="topheade ">
                      <thead className="bg-[#856a54] flex justify-between items-center py-5 px-5">
                        <FaAngleLeft className="text-white" />
                        <th className="text-red-300">
                          <h2 className="text-white">September 2021</h2>
                        </th>
                        <FaAngleRight className="text-white" />
                      </thead>
                    </div>
                    <div className="header bg-[#a38c7a] py-4">
                      <thead className="flex justify-between px-6 text-white">
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
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                      <table className="border-r-2 ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>{" "}
                      <table className=" ">
                        <li className="px-3 list-none py-4">30</li>
                        <li className="px-3 list-none py-4">6</li>
                        <li className="px-3 list-none py-4">13</li>
                        <li className="px-3 list-none py-4">20</li>
                        <li className="px-3 list-none py-4">27</li>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-x-7 mt-6 ">
            <div className="w-2/4 relative  border-b-2 ">
              <h2 className="font-roboto text-[12px] font-normal leading-4 text-[#d4cfcd] ">
                ADULTS
              </h2>
              <span className="font-anglecia text-white text-base font-normal pb-2 inline-block">
                {count}
              </span>

              <div className="absolute top-0 right-0">
                <FaAngleUp
                  onClick={handelInc}
                  className="text-white mb-2 text-lg"
                />
                <FaAngleDown
                  onClick={handelDec}
                  className="text-white text-lg"
                />
              </div>
            </div>
            <div className="w-2/4 relative  border-b-2 ">
              <h2 className="font-roboto text-[12px] font-normal leading-4 text-[#d4cfcd] ">
                CHILDREN
              </h2>
              <span className="font-roboto text-white text-base font-normal pb-2 inline-block">
                {childrencount}
              </span>

              <div className="absolute top-0 right-0">
                <FaAngleUp
                  onClick={handelChilInc}
                  className="text-white mb-2 text-lg"
                />
                <FaAngleDown
                  onClick={handelChilDec}
                  className="text-white text-lg"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Amenities />
          </div>
          <button className=" py-3 w-full mt-8 bg-btn hover:bg-btnhover  duration-700 text-white">
            Book Now
          </button>
        </div>
        <div className="md:w-[400px] mt-24" style={bgimg}>
          <div className="overly bg-[#101010c4] py-64 ">
            <h4 className="font-anglecia font-normal text-[#fff] text-6xl text-center leading-[60px]">
              Offers & <br /> Packages
            </h4>
            <button className=" flex justify-center uppercase py-4 px-10 mt-8  m-auto bg-btn hover:bg-btnhover  duration-700 text-white">
              Exploer More
            </button>
          </div>
        </div>
     
    </div>
  );
};

export default Check;
