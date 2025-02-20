import React from "react";
import TransformEditDelete from "./TransformEditDelete";
import { IoEye } from "react-icons/io5";

const TransformTable = ({ points, handleEditClick, handleDeleteClick, handlePreviewClick }) => {
  return (
    <div className="md:w-11/12 mx-auto">
      <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-semibold">
            <th className="p-4 text-left border-b border-gray-200">Point</th>
            <th className="p-4 text-center border-b border-gray-200">Actions</th>
            <th className="p-4 text-center border-b border-gray-200">Preview</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point, index) => (
            <tr key={index} className="hover:bg-gray-50 transition border-b border-gray-200">
              <td className="p-4">{point}</td>
              <TransformEditDelete
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
              <td className="p-4 text-center">
                <button
                  onClick={() => handlePreviewClick(point)}
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

export default TransformTable;
