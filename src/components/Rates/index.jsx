import React from "react";

const Reats = () => {
  return (
    <section id="rates" className="pb-10 px-6">
      <h3 className="font-anglecia font-semibold text-2xl text-dark pb-6">
        Rates
      </h3>
      {/* Rates Table Start */}
      <table className="rates_table ">
        <tr className="tr ">
          <th className="th px-6 py-6 bg-[#e3e1e0] text-[#21160e] font-anglecia font-normal text-base">
            Price pre <br /> room <span className="block text-lg">in USD</span>
          </th>
          <th className="th px-6 py-6 bg-[#e3e1e0] text-[#21160e] font-anglecia font-normal text-base">
            Season 1{" "}
            <span className="block text-base">
              06.01-31.03, <span className="block">01.11-23.12</span>
            </span>
          </th>
          <th className="th px-6 py-6 bg-[#e3e1e0] text-[#21160e] font-anglecia font-normal text-base">
            Season 1{" "}
            <span className="block text-base">
              06.01-31.03, <span className="block">01.11-23.12</span>
            </span>
          </th>
          <th className="th px-6 py-6 bg-[#e3e1e0] text-[#21160e] font-anglecia font-normal text-base">
            Season 1{" "}
            <span className="block text-base">
              06.01-31.03, <span className="block">01.11-23.12</span>
            </span>
          </th>
          <th className="th px-6 py-6 bg-[#e3e1e0] text-[#21160e] font-anglecia font-normal text-base">
            Season 1{" "}
            <span className="block text-base">
              06.01-31.03, <span className="block">01.11-23.12</span>
            </span>
          </th>
          <th className="th px-6 py-6 bg-[#e3e1e0] text-[#21160e] font-anglecia font-normal text-base">
            Season 1{" "}
            <span className="block text-base">
              06.01-31.03, <span className="block">01.11-23.12</span>
            </span>
          </th>
        </tr>
        <tr className="tr border ">
          <td className="td pl-6">
            <span className="block">Sunday -</span> Thursday
          </td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
        </tr>
        <tr className="tr border ">
          <td className="td pl-6">
            <span className="block">Sunday -</span> Thursday
          </td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
          <td className="td px-6 py-8"> $ 99</td>
        </tr>
      </table>
      <p className="font-roboto text-base font-normal text-gray-500  pt-4">
        All prices are in USD per night and exclusive of GST. 15% Goods and
        Services tax is applvicable above the standard rates.
      </p>
      {/* Rates Table End */}
    </section>
  );
};

export default Reats;
