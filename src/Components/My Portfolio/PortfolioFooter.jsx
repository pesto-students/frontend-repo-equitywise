const PortfolioFooter = ({ id, firstDivWidth, otherDivWidth }) => {
  return (
    <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly items-center roboto-medium ">
      {id.map((item) => {
        let index = id.indexOf(item);
        return (
          <div key={item.index} className={`${index === 0 ? firstDivWidth : otherDivWidth} roboto-medium text-sm`}>
            {1000}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioFooter;
