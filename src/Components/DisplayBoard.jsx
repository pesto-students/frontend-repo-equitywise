import { displayTables, portfolioStocks } from "../Data/dataItems";

const DisplayBoard = ({ activeMenu }) => {
  return (
    <table className={`w-full`}>
      <thead className={`w-full`}>
        <tr className={`w-full bg-slate-300`}>
          {displayTables[activeMenu].map((item) => (
            <td key={item} className={`h-10 pl-4 pr-4 border text-center`}>
              {item}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className={`w-full`}>
        {portfolioStocks.map((scrip) => {
          return (
            <tr key={scrip.Symbol} className={`w-full`}>
              {displayTables[activeMenu].map((val, index) => {
                return (
                  <td
                    className={`h-8 pl-3 pr-3 ${val === "Stock Name" ? "text-left" : ""}${val === "Symbol" ? "text-center" : ""}${val === "#Shares" ? "text-right" : ""}${val === "Avg Cost" ? "text-right" : ""}${val === "Market Price" ? "text-right" : ""}${val === "Daily Gain" ? "text-right" : ""}${val === "Overall Gain" ? "text-right" : ""}${val === "Portfolio Value" ? "text-right" : ""}${val === "Last Price" ? "text-right" : ""}${val === "Change" ? "text-center" : ""}${
                      val === "Change%" ? "text-center" : ""
                    }${val === "Day High" ? "text-right" : ""}${val === "Day Low" ? "text-right" : ""}${val === "52W High" ? "text-right" : ""}${val === "52W Low" ? "text-right" : ""}${val === "EPS" ? "text-right" : ""}${val === "Forward PE" ? "text-right" : ""}${val === "Div/Share" ? "text-right" : ""}${val === "Div/Date" ? "text-right" : ""}`}
                    key={`${scrip.Symbol}${val}${index}`}
                  >
                    {scrip[val]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className={`w-full bg-slate-300`}>
          {displayTables[activeMenu].map((item2, index) => {
            return (
              <td key={`${item2.Symbol}${index}tfooter`} className={`h-8`}>
                {}
              </td>
            );
          })}
        </tr>
      </tfoot>
    </table>
  );
};

export default DisplayBoard;
