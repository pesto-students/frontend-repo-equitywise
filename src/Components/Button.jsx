export default function Button({btnText}) {
  return (
    <>
      <br />
      <button className={`w-32 h-12 bg-blue-600 text-white rounded ml-2 shadow-md roboto-regular`}>{btnText}</button>
    </>
  );
}
