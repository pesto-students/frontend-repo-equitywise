let menuItems = {
  MY_PORTFOLIO: "My Portfolio",
  INTRADAY_POSITIONS: "Intraday Positions",
  STOCK_FUNDAMENTALS: "Stock Fundamentals",
  MY_WISHLIST: "My Wishlist",
  PORTFOLIO_ANALYSIS: "Portfolio Analytics",
};

let displayTables = {
  [menuItems.MY_PORTFOLIO]: ["Stock Name", "Symbol", "#Shares", "Ave Cost", "Market Price", "Daily Gain", "Overall Gain", "Portfolio Value"],
  [menuItems.INTRADAY_POSITIONS]: ["Stock Name", "Symbol", "Last Price", "Change", "Change %", "Day High", "Day Low", "52w High", "52w Low"],
  [menuItems.STOCK_FUNDAMENTALS]: ["Stock Name", "Symbol", "Last Price", "EPS", "Forward PE", "Div/Share", "Div/Date"],
  [menuItems.MY_WISHLIST]: ["Stock Name", "Symbol", "EPS", "Forward PE", "Div/Share", "Day High", "Day Low", "Div Date"],
};

export { menuItems, displayTables };
