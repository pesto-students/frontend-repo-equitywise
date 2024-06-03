import React, { useState } from "react";
// import { displayTablesPortfolio, portfolioStocks, menuItemsPortfolio, stockAttributes } from "../../Data/dataItems";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { shrishyle } from "../../Data/classes";

export default function PortfolioDashboard2() {
  return (
    <>
      <div className={`flex flex-row`}>
        <div className={`bg-slate-100 h-8 px-4 border`}>My Portfolio</div>
        <div className={`bg-slate-100 h-8 px-4 border`}>Intraday Positions</div>
        <div className={`bg-slate-100 h-8 px-4 border`}>Stock Fundamentals</div>
        <div className={`bg-slate-100 h-8 px-4 border`}>Portfolio Analytics</div>
      </div>
      {/* <table className="w-full mb-4">
        <thead className="w-full">
          <tr className="w-full bg-slate-300">
            {displayTablesPortfolio[menuItemsPortfolio.MY_PORTFOLIO].map((item) => (
              <td key={item} className="h-10 pl-4 pr-4 border text-center">
                {item}
              </td>
            ))}
            <td className="h-10 pl-4 pr-4 border text-center">Actions</td>
          </tr>
        </thead>
        <tbody className="w-full">
          {stocks.map((scrip) => (
            <tr key={scrip[stockAttributes.SYMBOL]} className="w-full">
              {displayTablesPortfolio[menuItemsPortfolio.MY_PORTFOLIO].map((val, index) => (
                <td
                  key={`${scrip[stockAttributes.SYMBOL]}${val}${index}`}
                  className={`h-8 pl-3 pr-3 ${val === stockAttributes.STOCK_NAME ? "text-left" : ""} ${val === stockAttributes.SYMBOL ? "text-center" : ""} ${val === stockAttributes.NO_OF_SHARES ? "text-right" : ""} ${val === stockAttributes.AVG_COST ? "text-right" : ""} ${val === stockAttributes.MARKET_PRICE ? "text-right" : ""} ${val === stockAttributes.DAILY_GAIN ? "text-right" : ""} ${val === stockAttributes.OVERALL_GAIN ? "text-right" : ""} ${
                    val === stockAttributes.PORTFOLIO_VALUE ? "text-right" : ""
                  }`}
                >
                  {scrip[val]}
                </td>
              ))}
              <td className="h-8 pl-3 pr-3 text-center">
                <button onClick={() => handleEditStock(scrip)} className="mr-2 p-2 text-yellow-500 rounded">
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteStock(scrip[stockAttributes.SYMBOL])} className="p-2 text-red-500 rounded">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="w-full bg-slate-300">
            <td className="h-8 pl-4 pr-4 border text-center font-bold" colSpan={3}>
              Totals
            </td>
            {displayTablesPortfolio[menuItemsPortfolio.MY_PORTFOLIO].slice(3).map((item, index) => (
              <td key={`${item}-total`} className="h-8 pl-4 pr-4 border text-right font-bold">
                {typeof totals[item] === "number" ? totals[item].toFixed(2) : ""}
              </td>
            ))}
            <td className="h-8 pl-4 pr-4 border text-center"></td>
          </tr>
        </tfoot>
      </table> */}
      <table className="w-full mb-4">
        <thead className={`w-full`}>
          <tr className={`w-full bg-slate-300`}>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Stock Name</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}># Shares</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Ave Cost</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Market Price</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Daily Gain</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Overall Gain</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Portfolio Value</td>
            <td className={`h-10 pl-4 pr-4 border text-center`}>Actions</td>
          </tr>
        </thead>
        <tbody className={`w-full`}>
          {shrishyle.portfolio.list.map((item) => (
            <td>{item.name}</td>
          ))}
        </tbody>
      </table>
    </>
  );
}
