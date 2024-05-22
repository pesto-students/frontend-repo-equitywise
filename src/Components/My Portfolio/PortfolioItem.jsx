export default function PortfolioItem({ stockName, symbol, noOfShares, avgCost, marketPrice, dailyGain, overallGain, portfolioValue }) {
  return (
    <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly content-center items-center roboto-medium border ">
      <div className="basis-1/5 roboto-medium text-sm">{stockName}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{symbol}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{noOfShares}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{avgCost}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{marketPrice}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{dailyGain}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{overallGain}200</div>
      <div className="basis-1/8 roboto-medium text-sm">{portfolioValue}200</div>
    </div>
  );
}
