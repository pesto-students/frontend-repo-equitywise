const PortfolioFooter = ({ noOfSharesTotal, dailyGainTotal, overallGainTotal, portfolioValueTotal }) => {
  return (
    <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly content-center items-center roboto-medium ">
      <div className="basis-3/8 roboto-medium text-sm border">Total Portfolio</div>
      <div className="basis-1/8 roboto-medium text-sm"></div>
      <div className="basis-1/8 roboto-medium text-sm">{noOfSharesTotal}</div>
      <div className="basis-1/8 roboto-medium text-sm">{}</div>
      <div className="basis-1/8 roboto-medium text-sm">{}</div>
      <div className="basis-1/8 roboto-medium text-sm">{dailyGainTotal}</div>
      <div className="basis-1/8 roboto-medium text-sm">{overallGainTotal}</div>
      <div className="basis-1/8 roboto-medium text-sm">{portfolioValueTotal}</div>
    </div>
  );
};

export default PortfolioFooter;
