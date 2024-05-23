import { portfolioStocks } from "../../Data/dataItems";

export default function PortfolioItem({ id }) {
  return (
    <>
      {portfolioStocks.map((scrip) => {
        let index = portfolioStocks.indexOf(scrip);
        return (
          <div key={index} className={`w-8xl h-10  flex flex-row justify-evenly content-center items-center roboto-small text-sm border bg-slate-100`}>
            {id.map((item) => (
              <div key={`${index}${scrip}${item}`}>{scrip[item]}</div>
            ))}
          </div>
        );
      })}
    </>
  );
}
