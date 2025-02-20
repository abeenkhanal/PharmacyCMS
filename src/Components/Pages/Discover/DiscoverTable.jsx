import React from 'react';
import { FaEye } from "react-icons/fa";
import { IoTrash, IoPencil } from "react-icons/io5";

const DiscoverTable = ({ points, handleEditClick, handleDeleteClick, handlePreviewClick }) => (
  <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
    <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Points</h2>
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
              <td className="p-4 flex gap-2 justify-center">
                <button
                  onClick={handleEditClick}
                  className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition">
                  <IoPencil />
                  Edit
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition">
                  <IoTrash />
                  Delete
                </button>
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => handlePreviewClick(point)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition">
                  <FaEye />
                  Preview
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DiscoverTable;
