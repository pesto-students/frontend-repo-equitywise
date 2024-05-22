export default function PortfolioItem({ stockName, symbol, noOfShares, avgCost, marketPrice, dailyGain, overallGain, portfolioValue }) {
  return (
    <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly content-center items-center roboto-medium border ">
      <div className="basis-1/5 roboto-medium text-sm">{stockName}</div>
      <div className="basis-1/8 roboto-medium text-sm">{symbol}</div>
      <div className="basis-1/8 roboto-medium text-sm">{noOfShares}</div>
      <div className="basis-1/8 roboto-medium text-sm">{avgCost}</div>
      <div className="basis-1/8 roboto-medium text-sm">{marketPrice}</div>
      <div className="basis-1/8 roboto-medium text-sm">{dailyGain}</div>
      <div className="basis-1/8 roboto-medium text-sm">{overallGain}</div>
      {/* <div className="basis-1/8 roboto-medium text-sm">{portfolioValue}</div> */}
      <div className="basis-1/8 roboto-medium text-sm">{500}</div>
    </div>
  );
}
