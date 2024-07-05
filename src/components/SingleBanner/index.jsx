import React from "react";
import SingleImg from "../../assets/images/single.jpg";
const bgimg = {
  backgroundImage: `url(${SingleImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const SingleBanner = () => {
  return (
    <section className="" style={bgimg}>
      <div className="overly bg-[#2322226b] pt-[550px] pb-20">
        <div className="max-w-container  m-auto">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-anglecia text-[64px] leading-[72px] font-normal text-[#fff] ">
                Superior Single Room
              </h1>
              <div className="flex mt-8">
                <div className="flex gap-x-3 items-center">
                  <div>1</div>
                  <div>
                    <h4 className="font-roboto text-[18px] leading-8 font-normal text-[#e3e1e0]">
                      30 Sqm
                    </h4>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center">
                  <div>1</div>
                  <div>
                    <h4 className="font-roboto text-[18px] leading-8 font-normal text-[#e3e1e0]">
                      1 Single Bed
                    </h4>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center">
                  <div>1</div>
                  <div>
                    <h4 className="font-roboto text-[18px] leading-8 font-normal text-[#e3e1e0]">
                      1 Adult
                    </h4>
                  </div>
                </div>{" "}
                <div className="flex gap-x-3 items-center">
                  <div>1</div>
                  <div>
                    <h4 className="font-roboto text-[18px] leading-8 font-normal text-[#e3e1e0]">
                      Gardern View
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="font-anglecia font-normal text-[18px] text-[#fff] ">
                Form
              </h3>
              <h3 className="font-anglecia font-normal text-[48px] text-[#fff]">
                $199/
                <span className="font-anglecia font-normal text-[18px] text-[#fff]">
                  night
                </span>
              </h3>
              <button className="bg-btn px-6 py-3 hover:bg-btnhover text-[#fff] duration-700">Book This Room</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBanner;
