// const apiKey = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg";
// const query = "alembic";

// fetch(`https://finnhub.io/api/v1/search?q=${query}&token=${apiKey}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data));
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });



// -----------------------------------------------------------------------------------------------

// import axios from "axios";
// const API_KEY = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg";

// let StockData;

// async function getBSEStockQuote(symbol) {
//   try {
//     const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}.BSE&token=${API_KEY}`);
//     if (response.data === 0) {
//       throw new Error("Recieved invalid Data");
//     }
//     const stockData = await JSON.stringify(response.data);
//     StockData = stockData;
//     console.log(StockData);
//     return stockData;
//   } catch (error) {
//     console.error("Error fetching stock data:", error);
//     return null;
//   }
// }

// getBSEStockQuote("533573");

// -----------------------------------------------------------------------------------------------

// import { finnhub } from "finnhub";
// const finnhub = require("finnhub");

// const api_key = finnhub.ApiClient.instance.authentications["api_key"];
// api_key.apiKey = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg";
// const finnhubClient = new finnhub.DefaultApi();

// finnhubClient.symbolSearch("alembic", (error, data, response) => {
//   console.log(data);
// });

// -----------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------

// const apiKey = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg";
// const query = "alembic";

// let func = async () => {
//   try {
//     let res = await fetch(`https://finnhub.io/api/v1/search?q=${query}&token=${apiKey}`);
//     if (!res.ok) {
//       throw new Error("Network response was not ok " + res.statusText);
//     }
//     let searchResults = await JSON.stringify(res.data);
//     console.log(searchResults);
//   } catch (error) {
//     console.error("Error fetching stock data:", error);
//     return null;
//   }
// };

// func();

// -----------------------------------------------------------------------------------------------

// const apiKey = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg";
// const query = "alembic";
// fetch(`https://finnhub.io/api/v1/search?q=${query}&token=${apiKey}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     document.getElementById("result").textContent = JSON.stringify(data, null, 2);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//     document.getElementById("result").textContent = "Error: " + error.message;
//   });

// let result = {
//   count: 22,
//   result: [
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "ATGE", symbol: "ATGE", type: "Common Stock" },
//     { description: "GLOBAL X GENOMICS & BIOTECHN", displaySymbol: "GNOM", symbol: "GNOM", type: "ETP" },
//     { description: "ALEMBIC LTD", displaySymbol: "506235.BO", symbol: "506235.BO", type: "Common Stock" },
//     { description: "ALEMBIC LTD", displaySymbol: "ALEMBICLTD.NS", symbol: "ALEMBICLTD.NS", type: "Common Stock" },
//     { description: "MACROMILL EMBRAIN CO LTD", displaySymbol: "169330.KQ", symbol: "169330.KQ", type: "Common Stock" },
//     { description: "GLOBAL X TES COLOMBIA COP", displaySymbol: "GXTESCOL.BC", symbol: "GXTESCOL.BC", type: "ETP" },
//     { description: "AMDI GLB EM BD MAR IBX INC", displaySymbol: "LYQS.SG", symbol: "LYQS.SG", type: "ETP" },
//     { description: "AMDI GLB EM BD MAR IBX INC", displaySymbol: "LEMBL.TU", symbol: "LEMBL.TU", type: "ETP" },
//     { description: "AMDI GLB EM BD MAR IBX INC", displaySymbol: "LEMB.L", symbol: "LEMB.L", type: "ETP" },
//     { description: "AMDI GLB EM BD MAR IBX INC", displaySymbol: "EMKTB.MI", symbol: "EMKTB.MI", type: "ETP" },
//     { description: "ALEMBIC PHARMACEUTICALS LTD", displaySymbol: "533573.BO", symbol: "533573.BO", type: "Common Stock" },
//     { description: "ALEMBIC PHARMACEUTICALS LTD", displaySymbol: "APLLTD.NS", symbol: "APLLTD.NS", type: "Common Stock" },
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "DVY.BE", symbol: "DVY.BE", type: "Common Stock" },
//     { description: "GLOBAL X GENOMICS & BIOTECHN", displaySymbol: "BGNO39.SA", symbol: "BGNO39.SA", type: "ETP" },
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "DVY.TG", symbol: "DVY.TG", type: "Common Stock" },
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "DVY.DU", symbol: "DVY.DU", type: "Common Stock" },
//     { description: "MEDICALSYSTEM BIOTECHNOLOG-A", displaySymbol: "300439.SZ", symbol: "300439.SZ", type: "Common Stock" },
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "DVY.F", symbol: "DVY.F", type: "Common Stock" },
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "DVY.SW", symbol: "DVY.SW", type: "Common Stock" },
//     { description: "GLOBAL X GENOMICS & BIOTECHN", displaySymbol: "GX0D.BE", symbol: "GX0D.BE", type: "ETP" },
//     { description: "GLOBAL X GENOMICS & BIOTECHN", displaySymbol: "GNOM.MX", symbol: "GNOM.MX", type: "ETP" },
//     { description: "ADTALEM GLOBAL EDUCATION INC", displaySymbol: "DVY.HA", symbol: "DVY.HA", type: "Common Stock" },
//   ],
// };
