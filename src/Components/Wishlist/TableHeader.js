import React from "react";

const TableHeader = () => {
  return (
    <thead className={`w-full`}>
      <tr className={`w-full bg-slate-300`}>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Stock Name</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Symbol</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}># Shares</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Ave Cost</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Market Price</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Daily Gain</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Overall Gain</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Portfolio Value</td>
        <td className={`h-10 pl-4 pr-4 border text-center`}>Actions</td>
      </tr>
    </thead>
  );
};

export default TableHeader;
