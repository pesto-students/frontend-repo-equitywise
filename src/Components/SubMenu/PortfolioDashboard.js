import React, { useState } from "react";
import { displayTablesPortfolio, portfolioStocks, menuItemsPortfolio, stockAttributes } from "../../Data/dataItems";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { shrishyle } from "../../Data/classes";

const calculateTotals = (stocks) => {
  const totals = {
    [stockAttributes.MARKET_PRICE]: 0,
    [stockAttributes.DAILY_GAIN]: 0,
    [stockAttributes.OVERALL_GAIN]: 0,
    [stockAttributes.PORTFOLIO_VALUE]: 0,
  };

  stocks.forEach((stock) => {
    totals[stockAttributes.MARKET_PRICE] += stock[stockAttributes.MARKET_PRICE] || 0;
    totals[stockAttributes.DAILY_GAIN] += stock[stockAttributes.DAILY_GAIN] || 0;
    totals[stockAttributes.OVERALL_GAIN] += stock[stockAttributes.OVERALL_GAIN] || 0;
    totals[stockAttributes.PORTFOLIO_VALUE] += stock[stockAttributes.PORTFOLIO_VALUE] || 0;
  });

  return totals;
};

const PortfolioDashboard2 = () => {
  const [stocks, setStocks] = useState(portfolioStocks);
  const [editingStock, setEditingStock] = useState(null);
  const [newStock, setNewStock] = useState({
    [stockAttributes.STOCK_NAME]: "",
    [stockAttributes.SYMBOL]: "",
    [stockAttributes.NO_OF_SHARES]: 0,
    [stockAttributes.AVG_COST]: 0,
    [stockAttributes.MARKET_PRICE]: 0,
    [stockAttributes.DAILY_GAIN]: 0,
  });
  const [showAddStockForm, setShowAddStockForm] = useState(false);

  const totals = calculateTotals(stocks);

  const handleAddStock = (e) => {
    e.preventDefault();
    setStocks([...stocks, newStock]);
    setNewStock({
      [stockAttributes.STOCK_NAME]: "",
      [stockAttributes.SYMBOL]: "",
      [stockAttributes.NO_OF_SHARES]: 0,
      [stockAttributes.AVG_COST]: 0,
      [stockAttributes.MARKET_PRICE]: 0,
      [stockAttributes.DAILY_GAIN]: 0,
    });
    setShowAddStockForm(false);
  };

  const handleDeleteStock = (symbol) => {
    setStocks(stocks.filter((stock) => stock[stockAttributes.SYMBOL] !== symbol));
  };

  const handleEditStock = (stock) => {
    setEditingStock(stock);
  };

  const handleUpdateStock = (e) => {
    e.preventDefault();
    setStocks(stocks.map((stock) => (stock[stockAttributes.SYMBOL] === editingStock[stockAttributes.SYMBOL] ? editingStock : stock)));
    setEditingStock(null);
  };

  return (
    <div>
      <table className="w-full mb-4">
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
      </table>

      <button onClick={() => setShowAddStockForm(!showAddStockForm)} className="p-1 bg-green-500 text-white rounded mb-4">
        + Add New Stock
      </button>

      {/* Add New Stock form */}
      {showAddStockForm && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Add New Stock</h2>
          <form onSubmit={handleAddStock} className="mb-4">
            <div className="flex flex-wrap">
              {Object.entries(newStock).map(([key, value]) => (
                <div key={key} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
                  <label className="block mb-1">{key}</label>
                  <input type={key.includes("Shares") || key.includes("Cost") || key.includes("Price") || key.includes("Gain") || key.includes("Value") ? "number" : "text"} value={value} onChange={(e) => setNewStock({ ...newStock, [key]: e.target.value })} placeholder={key} className="p-2 border rounded w-full" />
                </div>
              ))}
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Add Stock
            </button>
          </form>
        </div>
      )}

      {editingStock && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Edit Stock</h2>
          <form onSubmit={handleUpdateStock} className="mb-4">
            <div className="flex flex-wrap">
              {Object.entries(editingStock).map(([key, value]) => (
                <div key={key} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
                  <label className="block mb-1">{key}</label>
                  <input type={key.includes("Shares") || key.includes("Cost") || key.includes("Price") || key.includes("Gain") || key.includes("Value") ? "number" : "text"} value={value} onChange={(e) => setEditingStock({ ...editingStock, [key]: e.target.value })} placeholder={key} className="p-2 border rounded w-full" />
                </div>
              ))}
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Update Stock
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PortfolioDashboard2;
