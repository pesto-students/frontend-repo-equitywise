import SecondMenuBtn from "./SecondMenuBtn";

const MY_PORTFOLIO = "My Portfolio";
const INTRADAY_POSITIONS = "Intraday Positions";
const STOCK_FUNDAMENTALS = "Stock Fundamentals";
const MY_WISHLIST = "My Wishlist";
const PORTFOLIO_ANALYSIS = "Portfolio Analytics";

export default function SecondMenu() {

  function clickHandler(identifier) {
    if (identifier === MY_PORTFOLIO) {
      console.log(MY_PORTFOLIO);
    }
    if (identifier === INTRADAY_POSITIONS) {
      console.log(INTRADAY_POSITIONS);
    }
    if (identifier === STOCK_FUNDAMENTALS) {
      console.log(STOCK_FUNDAMENTALS);
    }
    if (identifier === MY_WISHLIST) {
      console.log(MY_WISHLIST);
    }
    if (identifier === PORTFOLIO_ANALYSIS) {
      console.log(PORTFOLIO_ANALYSIS);
    }
  }

  return (
    <div className={`flex flex-row flex-nowrap justify-evenly max-w-5xl`}>
      <SecondMenuBtn title={MY_PORTFOLIO} onClick={() => clickHandler(MY_PORTFOLIO)} />
      <SecondMenuBtn title={INTRADAY_POSITIONS} onClick={() => clickHandler(INTRADAY_POSITIONS)} />
      <SecondMenuBtn title={STOCK_FUNDAMENTALS} onClick={() => clickHandler(STOCK_FUNDAMENTALS)} />
      <SecondMenuBtn title={MY_WISHLIST} onClick={() => clickHandler(MY_WISHLIST)} />
      <SecondMenuBtn title={PORTFOLIO_ANALYSIS} onClick={() => clickHandler(PORTFOLIO_ANALYSIS)} />
    </div>
  );
}
