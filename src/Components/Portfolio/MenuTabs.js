export default function MenuTabs() {
  return (
    <>
      <div className={`flex flex-row`}>
        <div className={`bg-slate-100 h-8 px-4 border`}>My Portfolio</div>
        <div className={`bg-slate-100 h-8 px-4 border`}>Intraday Positions</div>
        <div className={`bg-slate-100 h-8 px-4 border`}>Stock Fundamentals</div>
        <div className={`bg-slate-100 h-8 px-4 border`}>Portfolio Analytics</div>
      </div>
    </>
  );
}
