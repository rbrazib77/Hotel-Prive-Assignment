import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import BannerImg from "../../assets/images/banner.jpg";
import titleLine from "../../assets/images/title_line.svg";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const bgimg = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Banner = () => {
  const [table, setTable] = useState("");
  const [tableTwo, setTableTwo] = useState("");
  const [count, setCount] = useState(1);
  const [childrencount, setChildrencount] = useState(0);
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

  const handleIClickOne = () => {
    setTable(!table);
  };
  const handleIClickTwo = () => {
    setTableTwo(!tableTwo);
  };
  return (
    <section>
      <div className="banner  " style={bgimg}>
        <div className="bg-[rgba(90,86,82,0.55)] pt-72 pb-44">
          <div className="flex flex-col items-center">
            <div className="flex gap-x-5">
              <img src={titleLine} className="text-white" alt="" />
              <h5 className=" text-white">TIME TO RECONNECT</h5>
            </div>
            <h1 className="pt-3 pb-4 text-center text-[64px] leading-[72px] text-white font-anglecia font-normal">
              A New Vision of Comfort
            </h1>
            <div className="w-[100px] h-[100px]  rounded-full relative border border-white">
              <IoMdPlay className="text-white text-4xl hover:scale-125  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " />
            </div>
            <h3 className="text-white font-roboto font-medium tracking-[2px] pt-2">
              WATCH THE FILM
            </h3>
          </div>
        </div>
        <div className="bg-[#000000b8] py-12 ">
          <div className="max-w-container m-auto md:px-0 px-6">
            <div className="md:flex  gap-x-7">
              <div className="md:w-2/4 w-full md:mb-0 mb-6">
                <div>
                  <h3 className=" text-[#d4cfcd] text-[12px] leading-[16px] font-roboto font-normal">
                    ARRIVAl DATE
                  </h3>
                  <div
                    className="date-input-container border-b-2"
                    onClick={handleIClickOne}
                  >
                    <div className="flex text-white gap-x-4">
                      <div className="">
                        <h2 className="text-4xl ">15</h2>
                      </div>
                      <div className="">
                        <p className="pb-2  font-normal font-anglecia text-base leading-4 pt-2">
                          <span className="   inline-block pr-3"> Aprile,</span>
                          2020
                          <br />
                          <span className="text-[#d4cfcd] inline-block text-[12px] leading-[16px] font-roboto font-normal pt-4">
                            {" "}
                            FRIDAY
                          </span>
                        </p>
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
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>{" "}
                            <table className=" ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:w-2/4 w-full">
                <div>
                  <h3 className="text-[#d4cfcd] text-[12px] leading-[16px] font-roboto font-normal">
                    DEPARTURE DATE
                  </h3>
                  <div
                    className="date-input-container  border-b-2"
                    onClick={handleIClickTwo}
                  >
                    <div className="flex text-white gap-x-4">
                      <div className="">
                        <h2 className="text-4xl ">27</h2>
                      </div>
                      <div className="">
                        <p className="pb-2 pt-2">
                          <span className="font-bold inline-block pr-3">
                            {" "}
                            Aprile
                          </span>
                          ,2020
                          <br />
                          <span className=" text-[#d4cfcd] text-[12px] leading-[16px] font-roboto font-normal">
                            {" "}
                            WEDNESDAY
                          </span>
                        </p>
                      </div>
                    </div>
                    {tableTwo && (
                      <div>
                        <div className="w-full  m-auto absolute bottom left-0 z-10">
                          <div className="topheade ">
                            <thead className="bg-[#856a54]  flex justify-between items-center py-5 px-5">
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
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                            <table className="border-r-2 ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>{" "}
                            <table className=" ">
                              <li className="px-10 list-none py-4">30</li>
                              <li className="px-10 list-none py-4">6</li>
                              <li className="px-10 list-none py-4">13</li>
                              <li className="px-10 list-none py-4">20</li>
                              <li className="px-10 list-none py-4">27</li>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex gap-x-6">
              <div className="md:w-2/4 w-full">
                <div className="flex gap-x-7 mt-7 ">
                  <div className="w-2/4 relative  border-b-2 ">
                    <h2 className="text-[#d4cfcd] text-[12px] leading-[16px] font-roboto font-normal">
                      ADULTS
                    </h2>
                    <span className="font-roboto text-white text-5xl font-normal py-2 inline-block">
                      {count}
                    </span>

                    <div className="absolute top-5 right-0">
                      <FaAngleUp
                        onClick={handelInc}
                        className="text-white mb-5 text-lg"
                      />
                      <FaAngleDown
                        onClick={handelDec}
                        className="text-white text-lg"
                      />
                    </div>
                  </div>
                  <div className="w-2/4 relative  border-b-2 ">
                    <h2 className="text-[#d4cfcd] text-[12px] leading-[16px] font-roboto font-normal">
                      CHILDREN
                    </h2>
                    <span className="font-roboto text-white text-5xl font-normal py-2 inline-block">
                      {childrencount}
                    </span>

                    <div className="absolute top-5 right-0">
                      <FaAngleUp
                        onClick={handelChilInc}
                        className="text-white mb-5 text-lg"
                      />
                      <FaAngleDown
                        onClick={handelChilDec}
                        className="text-white text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/4 w-full">
                <div className="flex gap-x-7 mt-9 ">
                  <button className="bg-[#A6734B] hover:bg-btn transition delay-150 duration-700 w-full text-[18px] py-6 text-[#fff] font-roboto  font-normal">
                    CHECK AVALIABLITY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
