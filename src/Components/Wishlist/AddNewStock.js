import React from "react";
import { useState } from "react";

const AddNewStock = () => {
  const [displaySearchStockForm, setDisplaySearchStockForm] = useState(false);

  function handleSearchStockFormDisplay() {
    setDisplaySearchStockForm((prevState) => !prevState);
    console.log("hell");
  }

  function handleSearchInput(searchInputText) {
    // FrontEnd Code for searching comapny using company name
    const apiKey = "cpibh8hr01qpf0qhejg0cpibh8hr01qpf0qhejgg";
    const query = searchInputText;

    fetch(`https://finnhub.io/api/v1/search?q=${query}&token=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  return (
    <div>
      <button className="p-1 bg-green-500 text-white rounded mb-4" onClick={handleSearchStockFormDisplay}>
        + Add New Stock
      </button>
      {displaySearchStockForm && (
        <div className="mb-4">
          <form className="mb-4" onSubmit={``}>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
                <label className="block mb-1">Search Stock</label>
                <input
                  type="text"
                  className={"p-2 border rounded w-full"}
                  placeholder={"enter stock name"}
                  onChange={(e) => {
                    handleSearchInput(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNewStock;
