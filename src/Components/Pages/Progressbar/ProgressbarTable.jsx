import React from "react";
import ProgressbarEditDelete from "./ProgressbarEditDelete";
import { IoEye } from "react-icons/io5";

const ProgressbarTable = ({ progressBars, handleEditClick, handleDeleteClick, handlePreviewClick }) => {
  return (
    <div className="md:w-11/12 mx-auto">
      <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-semibold">
            <th className="p-4 text-left border-b border-gray-200">Number</th>
            <th className="p-4 text-left border-b border-gray-200">Label</th>
            <th className="p-4 text-center border-b border-gray-200">Actions</th>
            <th className="p-4 text-center border-b border-gray-200">Preview</th>
          </tr>
        </thead>
        <tbody>
          {progressBars.map((bar) => (
            <tr key={bar.id} className="hover:bg-gray-50 transition">
              <td className="p-4 border-gray-200">{bar.number}</td>
              <td className="p-4 border-gray-200">{bar.label}</td>
              <ProgressbarEditDelete
                handleEditClick={() => handleEditClick(bar.id)}
                handleDeleteClick={() => handleDeleteClick(bar.id)}
              />
              <td className="p-4 text-center">
                <button
                  onClick={() => handlePreviewClick(bar)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition"
                >
                  <IoEye /> Preview
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressbarTable;
