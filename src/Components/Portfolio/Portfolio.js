import React, { useState } from "react";
// import { displayTablesPortfolio, portfolioStocks, menuItemsPortfolio, stockAttributes } from "../../Data/dataItems";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { shrishyle } from "../../Data/classes";
import MenuTabs from "./MenuTabs";
import TableHeader from "./TableHeader";
import StockItemRow from "./StockItemRow";

export default function Portfolio() {
  return (
    <>
      <MenuTabs />
      <table className="w-full mb-4">
        <TableHeader />
        <tbody className={`w-full`}>
          <StockItemRow />
        </tbody>
      </table>
    </>
  );
}
