//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import SecondMenu from '../Components/SubMenu/SecondMenu';
//import { displayTablesPortfolio, stockAttributes } from '../Data/dataItems';
//import { FaEdit, FaTrashAlt } from 'react-icons/fa';

//const backendGetPortfolio = process.env.REACT_APP_BACKEND_GETPORTFOLIO_API_URL;
//const backendStockInsert = process.env.REACT_APP_BACKEND_STOCKINSERT_API_URL;
//const backendStockDelete = process.env.REACT_APP_BACKEND_STOCKDELETE_API_URL;
//const apiKeyFinnhub = process.env.REACT_APP_FINNHUB_API_KEY;

//const MyPortfolio = () => {
//  const [activeMenu, setActiveMenu] = useState(Object.keys(displayTablesPortfolio)[0]);
//  const [stocks, setStocks] = useState([]);
//  const [editingStock, setEditingStock] = useState(null);
//  const [newStock, setNewStock] = useState({
//    [stockAttributes.STOCK_SYMBOL]: '',
//    [stockAttributes.STOCK_NAME]: '',
//    [stockAttributes.NO_OF_SHARES]: 0,
//    [stockAttributes.AVG_COST]: 0,
//  });
//  const [showAddStockForm, setShowAddStockForm] = useState(false);
//  const [symbolSuggestions, setSymbolSuggestions] = useState([]);

//  const displayColumns = displayTablesPortfolio[activeMenu] || [];

//  useEffect(() => {
//    const fetchPortfolioStocks = async () => {
//      try {
//        const response = await axios.post(backendGetPortfolio, {
//          userId: 'test123@gmail.com',
//        });
//        console.log('Get Stocks Response:', response.data);

//        if (response.data && response.data.stocks) {
//          const fetchedStocks = response.data.stocks;
//          console.log('Fetched Stocks:', fetchedStocks);
//          setStocks(
//            fetchedStocks.map((stock) => ({
//              [stockAttributes.STOCK_NAME]: stock.name,
//              [stockAttributes.NO_OF_SHARES]: stock.shares,
//              [stockAttributes.AVG_COST]: stock.purchasePrice,
//              [stockAttributes.STOCK_SYMBOL]: stock.symbol,
//              [stockAttributes.MARKET_PRICE]: 0,
//              [stockAttributes.DAILY_GAIN]: 0,
//              [stockAttributes.OVERALL_GAIN]: 0,
//              [stockAttributes.TOTAL_VALUE]: 0,
//              [stockAttributes.DAY_LOW]: 0,
//              [stockAttributes.DAY_HIGH]: 0,
//              [stockAttributes.DAILY_GAIN_PERCENT]: 0,
//              [stockAttributes.PREVIOUS_DAY_CLOSE]: 0,
//              [stockAttributes.FIFTY_TWO_WEEK_HIGH]: 0,
//              [stockAttributes.FIFTY_TWO_WEEK_HIGH_DATE]: '',
//              [stockAttributes.FIFTY_TWO_WEEK_LOW]: 0,
//              [stockAttributes.FIFTY_TWO_WEEK_LOW_DATE]: '',
//            }))
//          );

//          fetchedStocks.forEach((stock) => fetchStockData(stock.symbol));
//        }

//        setShowAddStockForm(false);
//      } catch (error) {
//        console.log('Error getting stocks:', error);
//      }
//    };

//    fetchPortfolioStocks();

//    const fetchStockData = async (symbol) => {
//      try {
//        const response = await fetch(
//          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKeyFinnhub}`
//        );
//        const data = await response.json();
//        if (data) {
//          console.log(`DATA for ${symbol}:`, data);
//          setStocks((prevStocks) =>
//            prevStocks.map((stock) =>
//              stock[stockAttributes.STOCK_SYMBOL] === symbol
//                ? {
//                    ...stock,
//                    [stockAttributes.MARKET_PRICE]: data.c,
//                    [stockAttributes.DAILY_GAIN]: ((data.d / data.c) * 100).toFixed(2),
//                    [stockAttributes.OVERALL_GAIN]: (
//                      (data.c - stock[stockAttributes.AVG_COST]) *
//                      stock[stockAttributes.NO_OF_SHARES]
//                    ).toFixed(2),
//                    [stockAttributes.TOTAL_VALUE]: (data.c * stock[stockAttributes.NO_OF_SHARES]).toFixed(2),
//                    [stockAttributes.DAY_LOW]: data.l,
//                    [stockAttributes.DAY_HIGH]: data.h,
//                    [stockAttributes.DAILY_GAIN_PERCENT]: data.dp,
//                    [stockAttributes.PREVIOUS_DAY_CLOSE]: data.pc,
//                    [stockAttributes.FIFTY_TWO_WEEK_HIGH]: data["52WeekHigh"],
//                    [stockAttributes.FIFTY_TWO_WEEK_HIGH_DATE]: data["52WeekHighDate"],
//                    [stockAttributes.FIFTY_TWO_WEEK_LOW]: data["52WeekLow"],
//                    [stockAttributes.FIFTY_TWO_WEEK_LOW_DATE]: data["52WeekLowDate"],
//                  }
//                : stock
//            )
//          );
//        } else {
//          console.log('Error fetching data', data);
//        }
//      } catch (error) {
//        console.error('Error fetching data:', error);
//      }
//    };

//    const intervalId = setInterval(() => {
//      stocks.forEach((stock) => fetchStockData(stock[stockAttributes.STOCK_SYMBOL]));
//    }, 300000); // Fetch data every 5 minutes

//    return () => clearInterval(intervalId);
//  }, []);

//  const handleAddStock = async (e) => {
//    e.preventDefault();
//    try {
//      const response = await axios.post(`${backendStockInsert}?userId=test123@gmail.com`, {
//        symbol: newStock[stockAttributes.STOCK_SYMBOL],
//        name: newStock[stockAttributes.STOCK_NAME],
//        shares: newStock[stockAttributes.NO_OF_SHARES],
//        purchasePrice: newStock[stockAttributes.AVG_COST],
//      });
//      console.log('Add Stock Response:', response.data);
//      setStocks([...stocks, newStock]);
//      setNewStock({
//        [stockAttributes.STOCK_SYMBOL]: '',
//        [stockAttributes.STOCK_NAME]: '',
//        [stockAttributes.NO_OF_SHARES]: 0,
//        [stockAttributes.AVG_COST]: 0,
//      });
//      setShowAddStockForm(false);
//    } catch (error) {
//      console.error('Error adding stock:', error);
//    }
//  };

//  const handleDeleteStock = async (symbol) => {
//    try {
//      const response = await axios.delete(backendStockDelete, {
//        data: {
//          stockName: stocks.find((stock) => stock[stockAttributes.STOCK_SYMBOL] === symbol)[stockAttributes.STOCK_NAME],
//        },
//      });
//      console.log('Delete Stock Response:', response.data);
//      setStocks(stocks.filter((stock) => stock[stockAttributes.STOCK_SYMBOL] !== symbol));
//    } catch (error) {
//      console.error('Error deleting stock:', error);
//    }
//  };

//  const handleEditStock = (stock) => {
//    setEditingStock(stock);
//  };

//  const handleUpdateStock = (e) => {
//    e.preventDefault();
//    setStocks((stocks) =>
//      stocks.map((stock) =>
//        stock[stockAttributes.STOCK_SYMBOL] === editingStock[stockAttributes.STOCK_SYMBOL]
//          ? editingStock
//          : stock
//      )
//    );
//    setEditingStock(null);
//  };

//  const handleStockSymbolInputChange = async (e) => {
//    const userInput = e.target.value;
//    console.log('User Input:', userInput);
//    setNewStock({ ...newStock, [stockAttributes.STOCK_SYMBOL]: userInput });
//    if (userInput.length >= 2) {
//      try {
//        console.log('Making API Call');
//        const response = await axios.get(
//          `https://finnhub.io/api/v1/stock/symbol?exchange=US&q=${userInput}&token=${apiKeyFinnhub}`
//        );

//        const filteredSuggestions = response.data.filter(
//          (symbol) =>
//            symbol.symbol.startsWith(userInput.toUpperCase()) && symbol.type === 'Common Stock'
//        );

//        console.log('Filtered Symbol Suggestions:', filteredSuggestions);
//        setSymbolSuggestions(filteredSuggestions || []);
//      } catch (error) {
//        console.error('Error fetching symbol suggestions:', error);
//      }
//    } else {
//      console.log('User Input too short for API call');
//      setSymbolSuggestions([]);
//    }
//  };

//  const handleSymbolSelection = (symbol) => {
//    setNewStock({ ...newStock, [stockAttributes.STOCK_SYMBOL]: symbol });
//    setSymbolSuggestions([]);
//  };

//  const totals = stocks.reduce(
//    (acc, stock) => {
//      acc[stockAttributes.MARKET_PRICE] += parseFloat(stock[stockAttributes.MARKET_PRICE]) || 0;
//      acc[stockAttributes.DAILY_GAIN] += parseFloat(stock[stockAttributes.DAILY_GAIN]) || 0;
//      acc[stockAttributes.OVERALL_GAIN] += parseFloat(stock[stockAttributes.OVERALL_GAIN]) || 0;
//      acc[stockAttributes.TOTAL_VALUE] += parseFloat(stock[stockAttributes.TOTAL_VALUE]) || 0;
//      return acc;
//    },
//    {
//      [stockAttributes.MARKET_PRICE]: 0,
//      [stockAttributes.DAILY_GAIN]: 0,
//      [stockAttributes.OVERALL_GAIN]: 0,
//      [stockAttributes.TOTAL_VALUE]: 0,
//    }
//  );

//  return (
//    <div className="ml-4 mr-4">
//      <SecondMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuType="portfolio" />
//      <table className="w-full mb-4">
//        <thead className="w-full">
//          <tr className="w-full bg-slate-300">
//            {displayColumns.map((item) => (
//              <th key={item} className="h-10 pl-4 pr-4 border text-center">
//                {item}
//              </th>
//                           ))}
//                           <th className="h-10 pl-4 pr-4 border text-center">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {stocks.map((stock, index) => (
//                           <tr key={index}>
//                             {displayColumns.map((col) => (
//                               <td key={col} className="h-10 pl-4 pr-4 border text-center">
//                                 {stock[col]}
//                               </td>
//                             ))}
//                             <td className="h-10 pl-4 pr-4 border text-center">
//                               <button
//                                 onClick={() => handleEditStock(stock)}
//                                 className="text-blue-500 hover:text-blue-700 mr-2"
//                               >
//                                 <FaEdit />
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteStock(stock[stockAttributes.STOCK_SYMBOL])}
//                                 className="text-red-500 hover:text-red-700"
//                               >
//                                 <FaTrashAlt />
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                         {editingStock && (
//                           <tr>
//                             {displayColumns.map((col) => (
//                               <td key={col} className="h-10 pl-4 pr-4 border text-center">
//                                 <input
//                                   type="text"
//                                   value={editingStock[col]}
//                                   onChange={(e) =>
//                                     setEditingStock({ ...editingStock, [col]: e.target.value })
//                                   }
//                                   className="w-full text-center"
//                                 />
//                               </td>
//                             ))}
//                             <td className="h-10 pl-4 pr-4 border text-center">
//                               <button onClick={handleUpdateStock} className="text-green-500 hover:text-green-700">
//                                 Save
//                               </button>
//                               <button onClick={() => setEditingStock(null)} className="text-red-500 hover:text-red-700 ml-2">
//                                 Cancel
//                               </button>
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                       <tfoot>
//                         <tr>
//                           {displayColumns.map((col, index) => (
//                             <td key={index} className="h-10 pl-4 pr-4 border text-center">
//                               {totals[col] ? totals[col].toFixed(2) : ''}
//                             </td>
//                           ))}
//                           <td className="h-10 pl-4 pr-4 border text-center"></td>
//                         </tr>
//                       </tfoot>
//                     </table>
                     
//                     {showAddStockForm && (
//                       <form onSubmit={handleAddStock} className="mb-4">
//                         <div>
//                           <label className="block">Stock Symbol</label>
//                           <input
//                             type="text"
//                             value={newStock[stockAttributes.STOCK_SYMBOL]}
//                             onChange={handleStockSymbolInputChange}
//                             className="w-full border p-2 mb-2"
//                           />
//                           {symbolSuggestions.length > 0 && (
//                             <ul className="border p-2">
//                               {symbolSuggestions.map((suggestion, index) => (
//                                 <li
//                                   key={index}
//                                   onClick={() => handleSymbolSelection(suggestion.symbol)}
//                                   className="cursor-pointer hover:bg-gray-200"
//                                 >
//                                   {suggestion.symbol} - {suggestion.description}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                         <div>
//                           <label className="block">Stock Name</label>
//                           <input
//                             type="text"
//                             value={newStock[stockAttributes.STOCK_NAME]}
//                             onChange={(e) =>
//                               setNewStock({ ...newStock, [stockAttributes.STOCK_NAME]: e.target.value })
//                             }
//                             className="w-full border p-2 mb-2"
//                           />
//                         </div>
//                         <div>
//                           <label className="block">Number of Shares</label>
//                           <input
//                             type="number"
//                             value={newStock[stockAttributes.NO_OF_SHARES]}
//                             onChange={(e) =>
//                               setNewStock({ ...newStock, [stockAttributes.NO_OF_SHARES]: e.target.value })
//                             }
//                             className="w-full border p-2 mb-2"
//                           />
//                         </div>
//                         <div>
//                           <label className="block">Average Cost</label>
//                           <input
//                             type="number"
//                             value={newStock[stockAttributes.AVG_COST]}
//                             onChange={(e) =>
//                               setNewStock({ ...newStock, [stockAttributes.AVG_COST]: e.target.value })
//                             }
//                             className="w-full border p-2 mb-2"
//                           />
//                         </div>
//                         <button type="submit" className="bg-blue-500 text-white p-2">
//                           Add Stock
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => setShowAddStockForm(false)}
//                           className="ml-2 bg-red-500 text-white p-2"
//                         >
//                           Cancel
//                         </button>
//                       </form>
//                     )}
           
//                     <button onClick={() => setShowAddStockForm(true)} className="bg-green-500 text-white p-2 mb-4">
//                       Add New Stock
//                     </button>
//                   </div>
//                 );
//               };
           
//               export default MyPortfolio;
           






















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondMenu from '../Components/SubMenu/SecondMenu';
import { displayTablesPortfolio, stockAttributes } from '../Data/dataItems';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useUser } from '../context/UserContext';

const backendGetPortfolio = process.env.REACT_APP_BACKEND_GETPORTFOLIO_API_URL;

const MyPortfolio = () => {
  const [activeMenu, setActiveMenu] = useState(Object.keys(displayTablesPortfolio)[0]);
  const [stocks, setStocks] = useState([]);
  const [editingStock, setEditingStock] = useState(null);
  const [newStock, setNewStock] = useState({
    [stockAttributes.STOCK_SYMBOL]: '',
    [stockAttributes.STOCK_NAME]: '',
    [stockAttributes.NO_OF_SHARES]: 0,
    [stockAttributes.AVG_COST]: 0,
  });
  const [showAddStockForm, setShowAddStockForm] = useState(false);
  const [symbolSuggestions, setSymbolSuggestions] = useState([]);
  const apiKeyFinnhub = process.env.REACT_APP_FINNHUB_API_KEY;

  const displayColumns = displayTablesPortfolio[activeMenu] || [];

  const { username } = useUser();

  useEffect(() => {
    const fetchPortfolioStocks = async () => {
      try {
        debugger
        const response = await axios.post(`https://backend-repo-equitywise.onrender.com/GetPortfolio?userId=${username}`);
        console.log('Get Stocks Response:', response.data);

        if (response.data && response.data.stocks) {
          const fetchedStocks = response.data.stocks;
          console.log('Fetched Stocks:', fetchedStocks);
          setStocks(fetchedStocks.map(stock => ({
            [stockAttributes.STOCK_NAME]: stock.name,
            [stockAttributes.NO_OF_SHARES]: stock.shares,
            [stockAttributes.AVG_COST]: stock.purchasePrice,
            [stockAttributes.SYMBOL]: stock.symbol,
          })));

          fetchedStocks.forEach(stock => fetchStockData(stock.symbol));
        }

        setShowAddStockForm(false);
      } catch (error) {
        console.log('Error getting stocks:', error);
      }
    };

    fetchPortfolioStocks();


    const intervalId = setInterval(() => {
      stocks.forEach((stock) => fetchStockData(stock[stockAttributes.STOCK_SYMBOL]));
    }, 300000); // Fetch data every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  //const fetchStockData = async (symbol) => {
  //  try {
  //    debugger
  //    const response = await fetch(
  //      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKeyFinnhub}`
  //    );
  //    debugger
  //    const data = await response.json();
  //    if (data) {
  //      console.log(`DATA for ${symbol}:`, data);
  //      setStocks((prevStocks) =>
  //        prevStocks.map((stock) =>
  //          stock[stockAttributes.STOCK_SYMBOL] === symbol
  //            ? {
  //                ...stock,
  //                [stockAttributes.MARKET_PRICE]: data.c,
  //                [stockAttributes.DAILY_GAIN]: ((data.d / data.c) * 100).toFixed(2),
  //                [stockAttributes.OVERALL_GAIN]: (
  //                  (data.c - stock[stockAttributes.AVG_COST]) *
  //                  stock[stockAttributes.NO_OF_SHARES]
  //                ).toFixed(2),
  //                [stockAttributes.TOTAL_VALUE]: (data.c * stock[stockAttributes.NO_OF_SHARES]).toFixed(2),
  //                [stockAttributes.DAY_LOW]: data.l,
  //                [stockAttributes.DAY_HIGH]: data.h,
  //                [stockAttributes.DAILY_GAIN_PERCENT]: data.dp,
  //                [stockAttributes.PREVIOUS_DAY_CLOSE]: data.pc,
  //                [stockAttributes.FIFTY_TWO_WEEK_HIGH]: data["52WeekHigh"],
  //                [stockAttributes.FIFTY_TWO_WEEK_HIGH_DATE]: data["52WeekHighDate"],
  //                [stockAttributes.FIFTY_TWO_WEEK_LOW]: data["52WeekLow"],
  //                [stockAttributes.FIFTY_TWO_WEEK_LOW_DATE]: data["52WeekLowDate"],
  //              }
  //            : stock
  //        )
  //      );
  //    } else {
  //      console.log('Error fetching data', data);
  //    }
  //  } catch (error) {
  //    console.error('Error fetching data:', error);
  //  }
  //};

  const fetchStockData = async (symbol) => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKeyFinnhub}`
      );
      const data = response.data;
  debugger
      if (data) {
        console.log(`DATA for ${symbol}:`, data);
        debugger
        // Adjust calculations based on your specific requirements
        //const updatedStocks = stocks.map((stock) =>
        //  stock[stockAttributes.STOCK_SYMBOL] === symbol
        //    ? {
        //        ...stock,
        //        [stockAttributes.MARKET_PRICE]: data.c,
        //        [stockAttributes.DAILY_GAIN]: data.d.toFixed(2),
        //        [stockAttributes.OVERALL_GAIN]: (
        //          (data.c - stock[stockAttributes.AVG_COST]) *
        //          stock[stockAttributes.NO_OF_SHARES]
        //        ).toFixed(2),
        //        [stockAttributes.TOTAL_VALUE]: (data.c * stock[stockAttributes.NO_OF_SHARES]).toFixed(2),
        //        [stockAttributes.DAY_LOW]: data.l,
        //        [stockAttributes.DAY_HIGH]: data.h,
        //        [stockAttributes.DAILY_GAIN_PERCENT]: data.dp,
        //        [stockAttributes.PREVIOUS_DAY_CLOSE]: data.pc,
        //        //[stockAttributes.FIFTY_TWO_WEEK_HIGH]: data["52WeekHigh"],
        //        //[stockAttributes.FIFTY_TWO_WEEK_HIGH_DATE]: data["52WeekHighDate"],
        //        //[stockAttributes.FIFTY_TWO_WEEK_LOW]: data["52WeekLow"],
        //        //[stockAttributes.FIFTY_TWO_WEEK_LOW_DATE]: data["52WeekLowDate"],
        //      }
        //    : stock
        //);
        setStocks(prevStocks => prevStocks.map(stock => 
          stock[stockAttributes.SYMBOL] === symbol 
          ? { ...stock, [stockAttributes.MARKET_PRICE]: data.c, [stockAttributes.DAILY_GAIN]: data.d }
          : stock
        ));
        debugger
        //setStocks(updatedStocks);
      } else {
        console.log('Error fetching data', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


  const handleAddStock = (e) => {
    e.preventDefault();
    setStocks([...stocks, newStock]);
    setNewStock({
      [stockAttributes.STOCK_SYMBOL]: '',
      [stockAttributes.STOCK_NAME]: '',
      [stockAttributes.NO_OF_SHARES]: 0,
      [stockAttributes.AVG_COST]: 0,
    });
    setShowAddStockForm(false);
  };

  const handleDeleteStock = (symbol) => {
    setStocks(stocks.filter((stock) => stock[stockAttributes.STOCK_SYMBOL] !== symbol));
  };

  const handleEditStock = (stock) => {
    setEditingStock(stock);
  };

  const handleUpdateStock = (e) => {
    e.preventDefault();
    setStocks((stocks) =>
      stocks.map((stock) =>
        stock[stockAttributes.STOCK_SYMBOL] === editingStock[stockAttributes.STOCK_SYMBOL]
          ? editingStock
          : stock
      )
    );
    setEditingStock(null);
  };

  const handleStockSymbolInputChange = async (e) => {
    const userInput = e.target.value;
    console.log('User Input:', userInput);
    setNewStock({ ...newStock, [stockAttributes.STOCK_SYMBOL]: userInput });
    if (userInput.length >= 2) {
      try {
        console.log('Making API Call');
        const response = await axios.get(
          `https://finnhub.io/api/v1/stock/symbol?exchange=US&q=${userInput}&token=${apiKeyFinnhub}`
        );

        const filteredSuggestions = response.data.filter(
          (symbol) =>
            symbol.symbol.startsWith(userInput.toUpperCase()) && symbol.type === 'Common Stock'
        );

        console.log('Filtered Symbol Suggestions:', filteredSuggestions);
        setSymbolSuggestions(filteredSuggestions || []);
      } catch (error) {
        console.error('Error fetching symbol suggestions:', error);
      }
    } else {
      console.log('User Input too short for API call');
      setSymbolSuggestions([]);
    }
  };

  const handleSymbolSelection = (symbol) => {
    const selectedSuggestion = symbolSuggestions.find((suggestion) => suggestion.symbol === symbol);
    if (selectedSuggestion) {
      setNewStock({
        ...newStock,
        [stockAttributes.STOCK_SYMBOL]: symbol,
        [stockAttributes.STOCK_NAME]: selectedSuggestion.description,
      });
    }
    setSymbolSuggestions([]); // Clear suggestions after selection
  };

  const totals = stocks.reduce(
    (acc, stock) => {
      acc[stockAttributes.MARKET_PRICE] += parseFloat(stock[stockAttributes.MARKET_PRICE]) || 0;
      acc[stockAttributes.DAILY_GAIN] += parseFloat(stock[stockAttributes.DAILY_GAIN]) || 0;
      acc[stockAttributes.OVERALL_GAIN] += parseFloat(stock[stockAttributes.OVERALL_GAIN]) || 0;
      acc[stockAttributes.TOTAL_VALUE] += parseFloat(stock[stockAttributes.TOTAL_VALUE]) || 0;
      return acc;
    },
    {
      [stockAttributes.MARKET_PRICE]: 0,
      [stockAttributes.DAILY_GAIN]: 0,
      [stockAttributes.OVERALL_GAIN]: 0,
      [stockAttributes.TOTAL_VALUE]: 0,
    }
  );

  return (
    <div className="ml-4 mr-4">
      <SecondMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuType="portfolio" />
      <table className="w-full mb-4">
        <thead className="w-full">
          <tr className="w-full bg-slate-300">
            {displayColumns.map((item) => (
              <th key={item} className="h-10 pl-4 pr-4 border text-center">
                {item}
              </th>
            ))}
            <th className="h-10 pl-4 pr-4 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {stocks.map((scrip) => (
            <tr key={scrip[stockAttributes.STOCK_SYMBOL]} className="w-full">
              {displayColumns.map((val, index) => (
                <td
                  key={`${scrip[stockAttributes.STOCK_SYMBOL]}${val}${index}`}
                  className={`h-8 pl-3 pr-3 ${
                    val === stockAttributes.STOCK_NAME ? 'text-left' : ''
                  } ${val === stockAttributes.STOCK_SYMBOL ? 'text-center' : ''} ${
                    val === stockAttributes.NO_OF_SHARES ? 'text-right' : ''
                  } ${val === stockAttributes.AVG_COST ? 'text-right' : ''} ${
                    val === stockAttributes.MARKET_PRICE ? 'text-right' : ''} ${
                    val === stockAttributes.DAILY_GAIN ? 'text-right' : ''} ${
                    val === stockAttributes.OVERALL_GAIN ? 'text-right' : ''}
                    `}
                >
                  {scrip[val]}
                </td>
                              ))}
                              <td className="h-8 pl-3 pr-3 text-center">
                                <button
                                  onClick={() => handleEditStock(scrip)}
                                  className="mr-2 p-2 text-green-500 rounded"
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  onClick={() => handleDeleteStock(scrip[stockAttributes.STOCK_SYMBOL])}
                                  className="p-2 text-red-500 rounded"
                                >
                                  <FaTrashAlt />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mb-4 p-4 bg-gray-100 rounded">
                        <h2 className="text-xl font-bold mb-2">Summary</h2>
                        <table className="w-full mb-4">
                          <thead className="w-full">
                            <tr className="bg-slate-300">
                              <th className="h-10 pl-4 pr-4 border text-center">Total Market Price</th>
                              <th className="h-10 pl-4 pr-4 border text-center">Total Daily Gain (%)</th>
                              <th className="h-10 pl-4 pr-4 border text-center">Total Overall Gain</th>
                              <th className="h-10 pl-4 pr-4 border text-center">Total Portfolio Value</th>
                            </tr>
                          </thead>
                          <tbody className="w-full">
                            <tr className="w-full">
                              <td className="h-8 pl-3 pr-3 text-right">{totals[stockAttributes.MARKET_PRICE].toFixed(2)}</td>
                              <td className="h-8 pl-3 pr-3 text-right">{totals[stockAttributes.DAILY_GAIN].toFixed(2)}</td>
                              <td className="h-8 pl-3 pr-3 text-right">{totals[stockAttributes.OVERALL_GAIN].toFixed(2)}</td>
                              <td className="h-8 pl-3 pr-3 text-right">{totals[stockAttributes.TOTAL_VALUE].toFixed(2)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                
                      <div className="mb-4">
                        <button
                          onClick={() => setShowAddStockForm(!showAddStockForm)}
                          className="mb-2 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                          {showAddStockForm ? 'Cancel Add Stock' : 'Add Stock'}
                        </button>
                      </div>
                
                      {showAddStockForm && (
                        <form onSubmit={handleAddStock} className="mb-4">
                          <div className="mb-2 flex items-center">
                            <label htmlFor="stock-symbol" className="mr-10">
                              Stock Symbol
                            </label>
                            <input
                              id="stock-symbol"
                              type="text"
                              placeholder="Stock Symbol"
                              value={newStock[stockAttributes.STOCK_SYMBOL]}
                              onChange={handleStockSymbolInputChange}
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          {symbolSuggestions.length > 0 && (
                            <div className="mb-2">
                              <p>Suggestions:</p>
                              <ul>
                                {symbolSuggestions.map((symbol, index) => (
                                  <li key={index}>
                                    <button
                                      type="button"
                                      onClick={() => handleSymbolSelection(symbol.symbol)}
                                      className="text-blue-500"
                                    >
                                      {symbol.symbol} - {symbol.description}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="mb-2 flex items-center">
                            <label htmlFor="stock-name" className="mr-10">
                              Stock Name
                            </label>
                            <input
                              id="stock-name"
                              type="text"
                              placeholder="Stock Name"
                              value={newStock[stockAttributes.STOCK_NAME]}
                              onChange={(e) =>
                                setNewStock({ ...newStock, [stockAttributes.STOCK_NAME]: e.target.value })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <div className="mb-2 flex items-center">
                            <label htmlFor="no-of-shares" className="mr-8">
                              No. of Shares
                            </label>
                            <input
                              id="no-of-shares"
                              type="number"
                              placeholder="No. of Shares"
                              value={newStock[stockAttributes.NO_OF_SHARES]}
                              onChange={(e) =>
                                setNewStock({ ...newStock, [stockAttributes.NO_OF_SHARES]: parseInt(e.target.value) })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <div className="mb-2 flex items-center">
                            <label htmlFor="avg-cost" className="mr-8">
                              Average Cost
                            </label>
                            <input
                              id="avg-cost"
                              type="number"
                              placeholder="Average Cost"
                              value={newStock[stockAttributes.AVG_COST]}
                              onChange={(e) =>
                                setNewStock({ ...newStock, [stockAttributes.AVG_COST]: parseFloat(e.target.value) })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                            Add Stock
                          </button>
                        </form>
                      )}
                
                      {editingStock && (
                        <form onSubmit={handleUpdateStock} className="mb-4">
                          <div className="mb-2">
                            <label htmlFor="edit-stock-symbol" className="block mb-1">
                              Stock Symbol
                            </label>
                            <input
                              id="edit-stock-symbol"
                              type="text"
                              value={editingStock[stockAttributes.STOCK_SYMBOL]}
                              onChange={(e) =>
                                setEditingStock({ ...editingStock, [stockAttributes.STOCK_SYMBOL]: e.target.value })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor="edit-stock-name" className="block mb-1">
                              Stock Name
                            </label>
                            <input
                              id="edit-stock-name"
                              type="text"
                              value={editingStock[stockAttributes.STOCK_NAME]}
                              onChange={(e) =>
                                setEditingStock({ ...editingStock, [stockAttributes.STOCK_NAME]: e.target.value })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor="edit-no-of-shares" className="block mb-1">
                              No. of Shares
                            </label>
                            <input
                              id="edit-no-of-shares"
                              type="number"
                              value={editingStock[stockAttributes.NO_OF_SHARES]}
                              onChange={(e) =>
                                setEditingStock({ ...editingStock, [stockAttributes.NO_OF_SHARES]: parseInt(e.target.value) })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor="edit-avg-cost" className="block mb-1">
                              Average Cost
                            </label>
                            <input
                              id="edit-avg-cost"
                              type="number"
                              value={editingStock[stockAttributes.AVG_COST]}
                              onChange={(e) =>
                                setEditingStock({ ...editingStock, [stockAttributes.AVG_COST]: parseFloat(e.target.value) })
                              }
                              required
                              className="p-2 border rounded w-full"
                            />
                          </div>
                          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                            Update Stock
                          </button>
                        </form>
                      )}
                    </div>
                  );
                };
                
                export default MyPortfolio;
                