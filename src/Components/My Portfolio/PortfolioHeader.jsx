export default function PortfolioHeader() {
  return (
    <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly content-center items-center roboto-medium ">
      <div className="basis-1/5 roboto-medium text-sm">Stock Name</div>
      <div className="basis-1/8 roboto-medium text-sm">Symbol</div>
      <div className="basis-1/8 roboto-medium text-sm">#Shares</div>
      <div className="basis-1/8 roboto-medium text-sm">Avg Cost</div>
      <div className="basis-1/8 roboto-medium text-sm">Market Price</div>
      <div className="basis-1/8 roboto-medium text-sm">Daily Gain</div>
      <div className="basis-1/8 roboto-medium text-sm">Overall Gain</div>
      <div className="basis-1/8 roboto-medium text-sm">Portfolio Value</div>
    </div>
  );
}
