export default function ThirdMenu() {
  return (
    <div className="max-w-8xl w-8xl h-10 bg-slate-100 flex flex-row justify-evenly content-center items-center">
      <button className={`w-35 h-2 bg-white text-blue-800 text-sm items-baseline roboto mb-3`}>Add Stock</button>
      <button className={`w-35 h-2 bg-white text-blue-800 text-sm items-baseline roboto mb-3`}>Bulk Edit</button>
      <input type="text" className="w-60 h-7 border rounded-full border-blue-800" />
    </div>
  );
}
