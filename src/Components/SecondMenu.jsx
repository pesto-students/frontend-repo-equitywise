import SecondMenuBtn from "./SecondMenuBtn";
import { menuItems } from "../Data/dataItems";

export default function SecondMenu({ click, id }) {
  return (
    <>
      <div onClick={click} className={`flex flex-row flex-nowrap justify-evenly max-w-8xl border`}>
        <SecondMenuBtn  id={id} title={menuItems.MY_PORTFOLIO} />
        <SecondMenuBtn  id={id} title={menuItems.INTRADAY_POSITIONS} />
        <SecondMenuBtn  id={id} title={menuItems.STOCK_FUNDAMENTALS} />
        <SecondMenuBtn  id={id} title={menuItems.MY_WISHLIST} />
        <SecondMenuBtn  id={id} title={menuItems.PORTFOLIO_ANALYSIS} />
      </div>
      <div className="max-w-8xl w-8xl h-3 bg-blue-800"></div>
    </>
  );
}
