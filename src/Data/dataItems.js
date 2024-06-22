// src/data/dataItems.js

export const stockAttributes = {
  STOCK_NAME: 'Stock Name',
  SYMBOL: 'Symbol',
  NO_OF_SHARES: 'No. of Shares',
  AVG_COST: 'Avg Cost',
  MARKET_PRICE: 'Market Price',
  DAILY_GAIN: 'Daily Gain',
  DAILY_GAIN_PERCENT: 'Daily Gain %',
  OVERALL_GAIN: 'Overall Gain',
  TOTAL_VALUE: 'Total Value',
  DAY_LOW: 'Day\'s Low',
  DAY_HIGH: 'Day\'s High',
  PREVIOUS_DAY_CLOSE: 'Prev Close',
  FIFTY_TWO_WEEK_LOW: '52w Low',
  FIFTY_TWO_WEEK_LOW_DATE: '52w Low On',
  FIFTY_TWO_WEEK_HIGH: '52w High',
  FIFTY_TWO_WEEK_HIGH_DATE: '52w High On',
  MARKET_CAP: 'Market Cap',
  PE_ANNUAL: 'Annual PE',
  CR_ANNUAL: 'Annual Current Ratio',
  EPS_ANNUAL: 'Annual EPS',
  EBITDA_PER_SHARE_TTM: 'EBITDA per Share',
  DIVIDEND_PER_SHARE_ANNUAL: 'Annual Dividend',
  REL_PRICE_SP500_4W: 'Rel Price S&P 4w',
};

export const portfolioStocks = [
  {
    'Stock Name': 'ABC Corp',
    'Symbol': 'ABC',
    'No. of Shares': 100,
    'Avg Cost': 150,
    'Market Price': 160,
    'Daily Gain': 2,
    'Overall Gain': 1000,
    'Total Value': 16000,
  },
  // Add more stocks as needed
];

export const wishlistStocks = [
  {
    'Stock Name': 'XYZ Corp',
    'Symbol': 'XYZ',
    'No. of Shares': 10,
    'Avg Cost': 100,
    'Market Price': 110,
    'Daily Gain': 2,
    'Overall Gain': 1000,
    'Total Value': 16000,
  },
  // Add more stocks as needed
];

export const menuItemsPortfolio = {
  PORTFOLIO_POSITIONS: 'Portfolio Positions',
  PORTFOLIO_INTRADAY: 'Portfolio Intraday',
  PORTFOLIO_FUNDAMENTALS: 'Portfolio Fundamentals',
};

export const menuItemsWishlist = {
  WISHLIST_POSITIONS: 'Wishlist Positions',
  WISHLIST_INTRADAY: 'Wishlist Intraday',
  WISHLIST_FUNDAMENTALS: 'Wishlist Fundamentals',
};

export const displayTablesPortfolio = {
  [menuItemsPortfolio.PORTFOLIO_POSITIONS]: [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.NO_OF_SHARES,
    stockAttributes.AVG_COST,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN,
    stockAttributes.DAILY_GAIN_PERCENT,
    stockAttributes.OVERALL_GAIN,
    stockAttributes.TOTAL_VALUE,
    'Actions',
  ],
  [menuItemsPortfolio.PORTFOLIO_INTRADAY]: [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN_PERCENT,
    stockAttributes.PREVIOUS_DAY_CLOSE,
    stockAttributes.DAY_LOW,
    stockAttributes.DAY_HIGH,
    stockAttributes.FIFTY_TWO_WEEK_LOW,
    stockAttributes.FIFTY_TWO_WEEK_LOW_DATE,
    stockAttributes.FIFTY_TWO_WEEK_HIGH,
    stockAttributes.FIFTY_TWO_WEEK_HIGH_DATE,
  ],
  [menuItemsPortfolio.PORTFOLIO_FUNDAMENTALS]: [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.MARKET_CAP,
    stockAttributes.PE_ANNUAL,
    stockAttributes.CR_ANNUAL,
    stockAttributes.EBITDA_PER_SHARE_TTM,
    stockAttributes.DIVIDEND_PER_SHARE_ANNUAL,
    stockAttributes.REL_PRICE_SP500_4W,
  ],
};

export const displayTablesWishlist = {
  [menuItemsWishlist.WISHLIST_POSITIONS]: [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.NO_OF_SHARES,
    stockAttributes.AVG_COST,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN,
    stockAttributes.DAILY_GAIN_PERCENT,
    stockAttributes.OVERALL_GAIN,
    stockAttributes.TOTAL_VALUE,
    'Actions',
  ],
  [menuItemsWishlist.WISHLIST_INTRADAY]: [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.MARKET_PRICE,
    stockAttributes.DAILY_GAIN_PERCENT,
    stockAttributes.PREVIOUS_DAY_CLOSE,
    stockAttributes.DAY_LOW,
    stockAttributes.DAY_HIGH,
    stockAttributes.FIFTY_TWO_WEEK_LOW,
    stockAttributes.FIFTY_TWO_WEEK_LOW_DATE,
    stockAttributes.FIFTY_TWO_WEEK_HIGH,
    stockAttributes.FIFTY_TWO_WEEK_HIGH_DATE,
  ],
  [menuItemsWishlist.WISHLIST_FUNDAMENTALS]: [
    stockAttributes.STOCK_NAME,
    stockAttributes.SYMBOL,
    stockAttributes.MARKET_CAP,
    stockAttributes.PE_ANNUAL,
    stockAttributes.CR_ANNUAL,
    stockAttributes.EBITDA_PER_SHARE_TTM,
    stockAttributes.DIVIDEND_PER_SHARE_ANNUAL,
    stockAttributes.REL_PRICE_SP500_4W,
  ],
};