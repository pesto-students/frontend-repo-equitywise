import { useState } from "react";
import SecondMenu from "./Components/SecondMenu";
import ThirdMenu from "./Components/ThirdMenu";
import DisplayBoard from "./Components/DisplayBoard";
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
    <div className="flex flex-col align-middle justify-center mx-auto my-auto max-w-screen-lg">
      <SecondMenu id={displayTables[display]} click={clickhandler} />
      <ThirdMenu />
      <DisplayBoard id={displayTables[display]} />
    </div>
  );
}

export default App;
