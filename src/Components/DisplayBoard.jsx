import PortfolioHeader from "./My Portfolio/PortfolioHeader";
import PortfolioFooter from "./My Portfolio/PortfolioFooter";
import PortfolioItem from "./My Portfolio/PortfolioItem";

const DisplayBoard = ({ id }) => {
  let len = id.length;
  let firstDivWidth = `basis-2/${len} min-w-48`;
  let otherDivWidth = `basis-1/${len}`;
  return (
    <>
      <PortfolioHeader id={id} firstDivWidth={firstDivWidth} otherDivWidth={otherDivWidth} />
      <PortfolioItem id={id} />
      <PortfolioFooter id={id} firstDivWidth={firstDivWidth} otherDivWidth={otherDivWidth} />
    </>
  );
};

export default DisplayBoard;
