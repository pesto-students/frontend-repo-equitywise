import PortfolioFooter from "../My Portfolio/PortfolioFooter";

const DisplayBoard = ({ id }) => {
  let len = id.length;
  let firstDivWidth = `basis-2/${len}`;
  let otherDivWidth = `basis-1/${len}`;
  return (
    <>
      {/* Heading Display Begins... */}
      <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly content-center items-center roboto-medium ">
        {id.map((item) => {
          let index = id.indexOf(item);
          return (
            <div key={item.index} className={`${index === 0 ? firstDivWidth : otherDivWidth} roboto-medium text-sm`}>
              {item}
            </div>
          );
        })}
      </div>
      {/* ...Heading Display Ends */}
      {/* {Table Body Begins...} */}
      <div className={`w-8xl h-10  flex flex-row justify-evenly content-center items-center roboto-medium border bg-slate-100`}></div>
      <div className={`w-8xl h-10  flex flex-row justify-evenly content-center items-center roboto-medium border bg-slate-100`}></div>
      <div className={`w-8xl h-10  flex flex-row justify-evenly content-center items-center roboto-medium border bg-slate-100`}></div>
      <div className={`w-8xl h-10  flex flex-row justify-evenly content-center items-center roboto-medium border bg-slate-100`}></div>
      {/* ...Table Body Ends */}
      {/* Table Footer Begins... */}
      <div className="w-8xl h-10 bg-slate-300 flex flex-row justify-evenly content-center items-center border roboto-medium ">
        {id.map((item) => {
          let index = id.indexOf(item);
          return (
            <div key={item.index} className={`${index === 0 ? firstDivWidth : otherDivWidth} roboto-medium text-sm`}>
              {1000}
            </div>
          );
        })}
      </div>
      {/* ...Table Footer Ends */}
    </>
  );
};

export default DisplayBoard;
