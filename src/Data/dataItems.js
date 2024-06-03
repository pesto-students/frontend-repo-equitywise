// src/Data/dataItems.js
export const stockAttributes = {
  STOCK_NAME: 'Stock Name',
  SYMBOL: 'Symbol',
  NO_OF_SHARES: 'No. of Shares',
  AVG_COST: 'Avg Cost',
  MARKET_PRICE: 'Market Price',
  DAILY_GAIN: 'Daily Gain',
  OVERALL_GAIN: 'Overall Gain',
  PORTFOLIO_VALUE: 'Portfolio Value',
};

export const menuItemsPortfolio = {
  MY_PORTFOLIO: 'My Portfolio',
  INTRADAY_POSITIONS: 'Intraday Positions',
  STOCK_FUNDAMENTALS: 'Stock Fundamentals',
};

export const menuItemsWishlist = {
  MY_WISHLIST: 'My Wishlist',
  INTRADAY_POSITIONS: 'Intraday Positions',
  STOCK_FUNDAMENTALS: 'Stock Fundamentals',
};

export const displayTablesPortfolio = {
  'My Portfolio': [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.NO_OF_SHARES,
    stockAttributes.AVG_COST,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN,
    stockAttributes.OVERALL_GAIN,
    stockAttributes.PORTFOLIO_VALUE,
  ],
  'Intraday Positions': [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.NO_OF_SHARES,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN,
  ],
  'Stock Fundamentals': [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.MARKET_PRICE,
  ],
};

export const displayTablesWishlist = {
  'My Wishlist': [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.NO_OF_SHARES,
    stockAttributes.AVG_COST,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN,
  ],
  'Intraday Positions': [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.NO_OF_SHARES,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN,
  ],
  'Stock Fundamentals': [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.MARKET_PRICE,
  ],
};

export const portfolioStocks = [
  {
    [stockAttributes.STOCK_NAME]: 'ABC Corp',
    [stockAttributes.SYMBOL]: 'ABC',
    [stockAttributes.NO_OF_SHARES]: 100,
    [stockAttributes.AVG_COST]: 150,
    [stockAttributes.MARKET_PRICE]: 155,
    [stockAttributes.DAILY_GAIN]: 5,
    [stockAttributes.OVERALL_GAIN]: 500,
    [stockAttributes.PORTFOLIO_VALUE]: 15500,
  },
  // Add more stock data here
];

export const wishlistStocks = [
  {
    [stockAttributes.STOCK_NAME]: 'XYZ Corp',
    [stockAttributes.SYMBOL]: 'XYZ',
    [stockAttributes.NO_OF_SHARES]: 50,
    [stockAttributes.AVG_COST]: 200,
    [stockAttributes.MARKET_PRICE]: 210,
    [stockAttributes.DAILY_GAIN]: 10,
  },
  // Add more wishlist stock data here
];





//// Define menu items for the portfolio
//let menuItemsPortfolio = {
//  MY_PORTFOLIO: "My Portfolio",
//  INTRADAY_POSITIONS: "Intraday Positions",
//  STOCK_FUNDAMENTALS: "Stock Fundamentals",
//  PORTFOLIO_ANALYSIS: "Portfolio Analytics",
//};

//// Define menu items for the wishlist
//let menuItemsWishlist = {
//  MY_WISHLIST: "My Wishlist",
//  INTRADAY_POSITIONS: "Intraday Positions",
//  STOCK_FUNDAMENTALS: "Stock Fundamentals",
//};

//// Define stock attributes
//let stockAttributes = {
//  STOCK_NAME: "Stock Name",
//  SYMBOL: "Symbol",
//  NO_OF_SHARES: "#Shares",
//  AVG_COST: "Avg Cost",
//  MARKET_PRICE: "Market Price",
//  DAILY_GAIN: "Daily Gain",
//  OVERALL_GAIN: "Overall Gain",
//  PORTFOLIO_VALUE: "Portfolio Value",
//  LAST_PRICE: "Last Price",
//  CHANGE: "Change",
//  CHANGE_PERCENTAGE: "Change%",
//  DAY_HIGH: "Day High",
//  DAY_LOW: "Day Low",
//  FIFTY_TWO_WEEK_HIGH: "52W High",
//  FIFTY_TWO_WEEK_LOW: "52W Low",
//  EPS: "EPS",
//  FORWARD_PE: "Forward PE",
//  DIV_PER_SHARE: "Div/Share",
//  DIV_DATE: "Div/Date",
//};

//// Define display tables for the portfolio
//let displayTablesPortfolio = {
//  [menuItemsPortfolio.MY_PORTFOLIO]: [
//    stockAttributes.STOCK_NAME,
//    stockAttributes.SYMBOL,
//    stockAttributes.NO_OF_SHARES,
//    stockAttributes.AVG_COST,
//    stockAttributes.MARKET_PRICE,
//    stockAttributes.DAILY_GAIN,
//    stockAttributes.OVERALL_GAIN,
//    stockAttributes.PORTFOLIO_VALUE,
//  ],
//  [menuItemsPortfolio.INTRADAY_POSITIONS]: [
//    stockAttributes.STOCK_NAME,
//    stockAttributes.SYMBOL,
//    stockAttributes.LAST_PRICE,
//    stockAttributes.CHANGE,
//    stockAttributes.CHANGE_PERCENTAGE,
//    stockAttributes.DAY_HIGH,
//    stockAttributes.DAY_LOW,
//    stockAttributes.FIFTY_TWO_WEEK_HIGH,
//    stockAttributes.FIFTY_TWO_WEEK_LOW,
//  ],
//  [menuItemsPortfolio.STOCK_FUNDAMENTALS]: [
//    stockAttributes.STOCK_NAME,
//    stockAttributes.SYMBOL,
//    stockAttributes.LAST_PRICE,
//    stockAttributes.EPS,
//    stockAttributes.FORWARD_PE,
//    stockAttributes.DIV_PER_SHARE,
//    stockAttributes.DIV_DATE,
//  ],
//};

//// Define display tables for the wishlist
//let displayTablesWishlist = {
//  [menuItemsWishlist.MY_WISHLIST]: [
//    stockAttributes.STOCK_NAME,
//    stockAttributes.SYMBOL,
//    stockAttributes.NO_OF_SHARES,
//    stockAttributes.AVG_COST,
//    stockAttributes.MARKET_PRICE,
//    stockAttributes.DAILY_GAIN,
//    stockAttributes.OVERALL_GAIN,
//    stockAttributes.PORTFOLIO_VALUE,
//  ],
//  [menuItemsWishlist.INTRADAY_POSITIONS]: [
//    stockAttributes.STOCK_NAME,
//    stockAttributes.SYMBOL,
//    stockAttributes.LAST_PRICE,
//    stockAttributes.CHANGE,
//    stockAttributes.CHANGE_PERCENTAGE,
//    stockAttributes.DAY_HIGH,
//    stockAttributes.DAY_LOW,
//    stockAttributes.FIFTY_TWO_WEEK_HIGH,
//    stockAttributes.FIFTY_TWO_WEEK_LOW,
//  ],
//  [menuItemsWishlist.STOCK_FUNDAMENTALS]: [
//    stockAttributes.STOCK_NAME,
//    stockAttributes.SYMBOL,
//    stockAttributes.LAST_PRICE,
//    stockAttributes.EPS,
//    stockAttributes.FORWARD_PE,
//    stockAttributes.DIV_PER_SHARE,
//    stockAttributes.DIV_DATE,
//  ],
//};

//// Function to calculate Overall Gain and Portfolio Value
//function calculateStockValues(stocks) {
//  return stocks.map(stock => {
//    stock[stockAttributes.OVERALL_GAIN] = (stock[stockAttributes.MARKET_PRICE] - stock[stockAttributes.AVG_COST]) * stock[stockAttributes.NO_OF_SHARES];
//    stock[stockAttributes.PORTFOLIO_VALUE] = stock[stockAttributes.MARKET_PRICE] * stock[stockAttributes.NO_OF_SHARES];
//    return stock;
//  });
//}

//// Define initial portfolio stocks
//let portfolioStocks = [
//  {
//    [stockAttributes.STOCK_NAME]: "Tata Motors",
//    [stockAttributes.SYMBOL]: "TMR",
//    [stockAttributes.NO_OF_SHARES]: 500,
//    [stockAttributes.AVG_COST]: 20000,
//    [stockAttributes.MARKET_PRICE]: 220000,
//    [stockAttributes.DAILY_GAIN]: 500,
//    [stockAttributes.OVERALL_GAIN]: 0, // This will be calculated
//    [stockAttributes.PORTFOLIO_VALUE]: 0, // This will be calculated
//    [stockAttributes.LAST_PRICE]: 550,
//    [stockAttributes.CHANGE]: 2,
//    [stockAttributes.CHANGE_PERCENTAGE]: 25,
//    [stockAttributes.DAY_HIGH]: 5500,
//    [stockAttributes.DAY_LOW]: 2200,
//    [stockAttributes.FIFTY_TWO_WEEK_HIGH]: 7000,
//    [stockAttributes.FIFTY_TWO_WEEK_LOW]: 2000,
//    [stockAttributes.EPS]: 5,
//    [stockAttributes.FORWARD_PE]: 22,
//    [stockAttributes.DIV_PER_SHARE]: 32,
//    [stockAttributes.DIV_DATE]: "22-May-2024",
//  },
//  {
//    [stockAttributes.STOCK_NAME]: "ICICI Bank",
//    [stockAttributes.SYMBOL]: "ICB",
//    [stockAttributes.NO_OF_SHARES]: 500,
//    [stockAttributes.AVG_COST]: 20000,
//    [stockAttributes.MARKET_PRICE]: 220000,
//    [stockAttributes.DAILY_GAIN]: 500,
//    [stockAttributes.OVERALL_GAIN]: 0, // This will be calculated
//    [stockAttributes.PORTFOLIO_VALUE]: 0, // This will be calculated
//    [stockAttributes.LAST_PRICE]: 550,
//    [stockAttributes.CHANGE]: 2,
//    [stockAttributes.CHANGE_PERCENTAGE]: 25,
//    [stockAttributes.DAY_HIGH]: 5500,
//    [stockAttributes.DAY_LOW]: 2200,
//    [stockAttributes.FIFTY_TWO_WEEK_HIGH]: 7000,
//    [stockAttributes.FIFTY_TWO_WEEK_LOW]: 2000,
//    [stockAttributes.EPS]: 5,
//    [stockAttributes.FORWARD_PE]: 22,
//    [stockAttributes.DIV_PER_SHARE]: 32,
//    [stockAttributes.DIV_DATE]: "22-May-2024",
//  },
//  {
//    [stockAttributes.STOCK_NAME]: "HDFC Bank",
//    [stockAttributes.SYMBOL]: "HDB",
//    [stockAttributes.NO_OF_SHARES]: 500,
//    [stockAttributes.AVG_COST]: 20000,
//    [stockAttributes.MARKET_PRICE]: 220000,
//    [stockAttributes.DAILY_GAIN]: 500,
//    [stockAttributes.OVERALL_GAIN]: 0, // This will be calculated
//    [stockAttributes.PORTFOLIO_VALUE]: 0, // This will be calculated
//    [stockAttributes.LAST_PRICE]: 550,
//    [stockAttributes.CHANGE]: 2,
//    [stockAttributes.CHANGE_PERCENTAGE]: 25,
//    [stockAttributes.DAY_HIGH]: 5500,
//    [stockAttributes.DAY_LOW]: 2200,
//    [stockAttributes.FIFTY_TWO_WEEK_HIGH]: 7000,
//    [stockAttributes.FIFTY_TWO_WEEK_LOW]: 2000,
//    [stockAttributes.EPS]: 5,
//    [stockAttributes.FORWARD_PE]: 22,
//    [stockAttributes.DIV_PER_SHARE]: 32,
//    [stockAttributes.DIV_DATE]: "22-May-2024",
//  },
//  {
//    [stockAttributes.STOCK_NAME]: "Union Bank",
//    [stockAttributes.SYMBOL]: "UNB",
//    [stockAttributes.NO_OF_SHARES]: 500,
//    [stockAttributes.AVG_COST]: 20000,
//    [stockAttributes.MARKET_PRICE]: 220000,
//    [stockAttributes.DAILY_GAIN]: 500,
//    [stockAttributes.OVERALL_GAIN]: 0, // This will be calculated
//    [stockAttributes.PORTFOLIO_VALUE]: 0, // This will be calculated
//    [stockAttributes.LAST_PRICE]: 550,
//    [stockAttributes.CHANGE]: 2,
//    [stockAttributes.CHANGE_PERCENTAGE]: 25,
//    [stockAttributes.DAY_HIGH]: 5500,
//    [stockAttributes.DAY_LOW]: 2200,
//    [stockAttributes.FIFTY_TWO_WEEK_HIGH]: 7000,
//    [stockAttributes.FIFTY_TWO_WEEK_LOW]: 2000,
//    [stockAttributes.EPS]: 5,
//    [stockAttributes.FORWARD_PE]: 22,
//    [stockAttributes.DIV_PER_SHARE]: 32,
//    [stockAttributes.DIV_DATE]: "22-May-2024",
//  },
//];

//// Define initial wishlist stocks
//let wishlistStocks = [
//  {
//    [stockAttributes.STOCK_NAME]: "Mahindra Motors",
//    [stockAttributes.SYMBOL]: "MM",
//    [stockAttributes.NO_OF_SHARES]: 400,
//    [stockAttributes.AVG_COST]: 10000,
//    [stockAttributes.MARKET_PRICE]: 110000,
//    [stockAttributes.DAILY_GAIN]: 300,
//    [stockAttributes.OVERALL_GAIN]: 0, // This will be calculated
//    [stockAttributes.PORTFOLIO_VALUE]: 0, // This will be calculated
//    [stockAttributes.LAST_PRICE]: 550,
//    [stockAttributes.CHANGE]: 2,
//    [stockAttributes.CHANGE_PERCENTAGE]: 25,
//    [stockAttributes.DAY_HIGH]: 5500,
//    [stockAttributes.DAY_LOW]: 2200,
//    [stockAttributes.FIFTY_TWO_WEEK_HIGH]: 7000,
//    [stockAttributes.FIFTY_TWO_WEEK_LOW]: 2000,
//    [stockAttributes.EPS]: 5,
//    [stockAttributes.FORWARD_PE]: 22,
//    [stockAttributes.DIV_PER_SHARE]: 32,
//    [stockAttributes.DIV_DATE]: "22-May-2024",
//  },
//  // Add other wishlist stocks here
//];

//// Calculate Overall Gain and Portfolio Value for portfolio and wishlist stocks
//portfolioStocks = calculateStockValues(portfolioStocks);
//wishlistStocks = calculateStockValues(wishlistStocks);

//export {
//  menuItemsPortfolio,
//  menuItemsWishlist,
//  stockAttributes,
//  displayTablesPortfolio,
//  displayTablesWishlist,
//  portfolioStocks,
//  wishlistStocks,
//};