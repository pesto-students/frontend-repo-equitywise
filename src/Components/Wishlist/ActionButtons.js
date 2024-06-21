import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function handleEditStock() {
  // body
}

function handleDeleteStock() {
  // body
}

const ActionButtons = () => {
  return (
    <>
      <button onClick={() => handleEditStock()} className="mr-2 p-2 text-yellow-500 rounded">
        <FaEdit />
      </button>

      <button onClick={() => handleDeleteStock()} className="p-2 text-red-500 rounded">
        <FaTrashAlt />
      </button>
    </>
  );
};

export default ActionButtons;
