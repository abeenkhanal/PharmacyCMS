import React from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const WhyusEditDelete = ({ handleEditClick, handleDeleteClick }) => {
  return (
    <td className="p-4 border-b border-gray-200 text-center">
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={handleEditClick}
          className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
        >
          <IoPencil />
          Edit
        </button>
        <button
          onClick={handleDeleteClick}
          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition"
        >
          <IoTrash />
          Delete
        </button>
      </div>
    </td>
  );
};

export default WhyusEditDelete;
