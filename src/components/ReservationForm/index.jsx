import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
const ReservationForm = () => {
  const [table, setTable] = useState("");
  const [tableTwo, setTableTwo] = useState("");

  const handleIClickOne = () => {
    setTable(!table);
  };
  const handleIClickTwo = () => {
    setTableTwo(!tableTwo);
  };
  return (
    <section id='reservation_form'>
    <div className="md:px-0 px-6">
      <div className="">
        <h2 className="font-anglecia text-[#21160e] font-normal leading-8 text-[24px] pt-10">
          Reservation Form
        </h2>
        <h5 className="font-roboto font-normal text-[#473d35] text-base leading-6 pb-5 pt-6">
          Required fields are followed by *
        </h5>
      </div>
      <div className="md:flex gap-x-10 ">
        <div className="md:w-[50%] w-full">
          <h4 className="font-roboto text-[12px] font-normal leading-4 text-[#7a6f68] pb-3">
            CHECK-IN DATE *
          </h4>
          <div
            className="date-input-container border-b-2"
            onClick={handleIClickOne}
          >
            <div className="flex  border-2 border-black gap-x-4">
              <div className="flex justify-between items-center p-4 relative w-full ">
                <p className="pb-2 font-normal font-anglecia text-base  text-[#473d35]">
                  <span className="inline-block pr-3"> FRIDAY Aprile,</span>
                  2020
                </p>
                <MdOutlineDateRange className="absolute top-[50%] right-6 translate-y-[-50%] text-2xl " />
              </div>
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
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="px-6 list-none py-4">30</li>
                      <li className="px-6 list-none py-4">6</li>
                      <li className="px-6 list-none py-4">13</li>
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="px-6 list-none py-4">30</li>
                      <li className="px-6 list-none py-4">6</li>
                      <li className="px-6 list-none py-4">13</li>
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="px-6 list-none py-4">30</li>
                      <li className="px-6 list-none py-4">6</li>
                      <li className="px-6 list-none py-4">13</li>
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="px-6 list-none py-4">30</li>
                      <li className="px-6 list-none py-4">6</li>
                      <li className="px-6 list-none py-4">13</li>
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="px-6 list-none py-4">30</li>
                      <li className="px-6 list-none py-4">6</li>
                      <li className="px-6 list-none py-4">13</li>
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>{" "}
                    <table className=" ">
                      <li className="px-6 list-none py-4">30</li>
                      <li className="px-6 list-none py-4">6</li>
                      <li className="px-6 list-none py-4">13</li>
                      <li className="px-6 list-none py-4">20</li>
                      <li className="px-6 list-none py-4">27</li>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-[50%] w-full md:mt-0 mt-8">
          <h4 className="font-roboto text-[12px] font-normal leading-4 text-[#7a6f68] pb-3">
            CHECK-OUT DATE *
          </h4>
          <div
            className="date-input-container border-b-2"
            onClick={handleIClickTwo}
          >
            <div className="flex  border-2 border-black gap-x-4">
              <div className="flex justify-between items-center p-4 relative w-full ">
                <p className="pb-2 font-normal font-anglecia text-base  text-[#473d35]  leading-4 pt-2">
                  <span className="inline-block pr-3"> FRIDAY Aprile,</span>
                  2020
                </p>
                <MdOutlineDateRange className="absolute top-[50%] right-6 translate-y-[-50%] text-2xl " />
              </div>
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
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>
                    <table className="border-r-2 ">
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>{" "}
                    <table className=" ">
                      <li className="md:px-6 px-5 list-none py-4">30</li>
                      <li className="md:px-6 px-5 list-none py-4">6</li>
                      <li className="md:px-6 px-5 list-none py-4">13</li>
                      <li className="md:px-6 px-5 list-none py-4">20</li>
                      <li className="md:px-6 px-5 list-none py-4">27</li>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:flex gap-x-10">
        <div className="md:w-[50%] w-full">
          <div className="flex gap-x-6">
            <div className="w-[50%] ">
              <h1 className="font-roboto text-[12px] font-normal leading-4 text-[#7a6f68] pb-3 pt-5">
                ADULTS
              </h1>
              <div className="border-2 border-black p-4">
                <h1>1</h1>
              </div>
            </div>

            <div className="w-[50%]">
              <h1 className="font-roboto text-[12px] font-normal leading-4 text-[#7a6f68] pb-3 pt-5">
                CHILDREN
              </h1>
              <div className="border-2 border-black p-4">
                <h1>0</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full mt-11">
          <button className="bg-btn hover:bg-btnhover duration-700 w-full  py-5 text-[#fff] uppercase font-roboto font-normal text-base leading-6">
            Check Availability
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ReservationForm;
