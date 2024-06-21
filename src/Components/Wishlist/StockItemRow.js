import React from "react";
import ActionButtons from "./ActionButtons";

const StockItemRow = () => {
  return (
    <tr className="">
      <td className="h-8 pl-3 pr-4 text-left">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">Taa</td>
      <td className="h-8 pl-3 pr-4 text-right">
        <ActionButtons />
      </td>
    </tr>
  );
};

export default StockItemRow;
