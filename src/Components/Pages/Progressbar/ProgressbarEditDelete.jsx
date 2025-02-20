import React from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const ProgressbarEditDelete = ({ handleEditClick, handleDeleteClick }) => {
  return (
    <td className="p-4 flex gap-2 justify-center border-gray-200">
      <button
        onClick={handleEditClick}
        className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
      >
        <IoPencil /> Edit
      </button>
      <button
        onClick={handleDeleteClick}
        className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition"
      >
        <IoTrash /> Delete
      </button>
    </td>
  );
};

export default ProgressbarEditDelete;
