import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
const Amenities = () => {
  let [aminities, setAminities] = useState({
    air: true,
    tv: true,
    wardrop: true,
    shope: true,
    table: true,
    parking: true,
    smoke: true,
  });
  return (
    <div>
      <div className="inp pt-10">
        <p className="font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase">
          Aminities
        </p>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() => setAminities({ ...aminities, air: !aminities.air })}
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.air && <IoCheckmarkSharp />}
            </div>{" "}
            Air Condition
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() => setAminities({ ...aminities, tv: !aminities.tv })}
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.tv && <IoCheckmarkSharp />}
            </div>{" "}
            LED Tv
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() =>
              setAminities({ ...aminities, smoke: !aminities.smoke })
            }
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.smoke && <IoCheckmarkSharp />}
            </div>{" "}
            No Smoke
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() =>
              setAminities({ ...aminities, wardrop: !aminities.wardrop })
            }
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.wardrop && <IoCheckmarkSharp />}
            </div>{" "}
            Wardrop
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() =>
              setAminities({ ...aminities, shope: !aminities.shope })
            }
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.shope && <IoCheckmarkSharp />}
            </div>{" "}
            Shope
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() =>
              setAminities({ ...aminities, table: !aminities.table })
            }
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.table && <IoCheckmarkSharp />}
            </div>{" "}
            Table
          </label>
        </div>
        <div className="py-3">
          <input type="checkbox" name="" id="air" className="" hidden />
          <label
            onClick={() =>
              setAminities({ ...aminities, parking: !aminities.parking })
            }
            htmlFor="air"
            className="font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white "
          >
            {" "}
            <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">
              {aminities.parking && <IoCheckmarkSharp />}
            </div>{" "}
            Parking
          </label>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
