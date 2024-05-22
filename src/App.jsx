import { useState } from "react";
import SecondMenu from "./Components/SecondMenu";
import ThirdMenu from "./Components/ThirdMenu";
// import PortfolioHeader from "./Components/My Portfolio/PortfolioHeader";
// import PortfolioItem from "./Components/My Portfolio/PortfolioItem";
// import PortfolioFooter from "./Components/My Portfolio/PortfolioFooter";
import DisplayBoard from "./Components/DisplayBoard/DisplayBoard";
import { menuItems, displayTables } from "./Data/dataItems";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(menuItems.MY_PORTFOLIO);

  function clickhandler(event) {
    if (event.target.textContent === menuItems.MY_PORTFOLIO) {
      setDisplay(menuItems.MY_PORTFOLIO);
    }
    if (event.target.textContent === menuItems.INTRADAY_POSITIONS) {
      setDisplay(menuItems.INTRADAY_POSITIONS);
    }
    if (event.target.textContent === menuItems.STOCK_FUNDAMENTALS) {
      setDisplay(menuItems.STOCK_FUNDAMENTALS);
    }
    if (event.target.textContent === menuItems.MY_WISHLIST) {
      setDisplay(menuItems.MY_WISHLIST);
    }
    if (event.target.textContent === menuItems.PORTFOLIO_ANALYSIS) {
      setDisplay(menuItems.PORTFOLIO_ANALYSIS);
    }
  }
  return (
    <>
      <SecondMenu click={clickhandler} />
      <ThirdMenu />
      {/* <PortfolioHeader />
      <PortfolioItem />
      <PortfolioFooter /> */}
      <DisplayBoard id={displayTables[display]} />
    </>
  );
}

export default App;
