export default function SecondMenuBtn({ title, activeMenu }) {
  return <button className={`w-35 h-7 bg-white  text-sm rounded items-baseline ${title === activeMenu ? "text-green-500" : "text-blue-800"} roboto-medium  `}>{title}</button>;
}
