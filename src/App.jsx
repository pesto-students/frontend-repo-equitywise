import SecondMenu from "./Components/SecondMenu";
import ThirdMenu from "./Components/ThirdMenu";
import PortfolioHeader from "./Components/My Portfolio/PortfolioHeader";
import PortfolioItem from "./Components/My Portfolio/PortfolioItem";
import { menuItems } from "./Data/dataItems";
import "./App.css";

function App() {
  function clickhandler(event) {
    if (event.target.textContent === menuItems.MY_PORTFOLIO) {
      console.log(menuItems.MY_PORTFOLIO);
    }
    if (event.target.textContent === menuItems.INTRADAY_POSITIONS) {
      console.log(menuItems.INTRADAY_POSITIONS);
    }
    if (event.target.textContent === menuItems.STOCK_FUNDAMENTALS) {
      console.log(menuItems.STOCK_FUNDAMENTALS);
    }
    if (event.target.textContent === menuItems.MY_WISHLIST) {
      console.log(menuItems.MY_WISHLIST);
    }
    if (event.target.textContent === menuItems.PORTFOLIO_ANALYSIS) {
      console.log(menuItems.PORTFOLIO_ANALYSIS);
    }
  }
  return (
    <>
      <SecondMenu click={clickhandler} />
      <ThirdMenu />
      <PortfolioHeader />
      <PortfolioItem />
    </>
  );
}

export default App;
