import React from "react";
import VisionEditDelete from "./VisionEditDelete";
import { IoEye } from "react-icons/io5";

const VisionTable = ({ banners, handleEditClick, handleDeleteClick, handlePreviewClick }) => {
  return (
    <div className="md:w-11/12 mx-auto">
      <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 font-semibold">
            <th className="p-4 text-left border-b border-gray-200">Title</th>
            <th className="p-4 text-left border-b border-gray-200">Description</th>
            <th className="p-4 text-left border-b border-gray-200">Image</th>
            <th className="p-4 text-center border-b border-gray-200">Actions</th>
            <th className="p-4 text-center border-b border-gray-200">Preview</th>
          </tr>
        </thead>
        <tbody>
          {banners.map((banner) => (
            <tr key={banner.id} className="hover:bg-gray-50 transition">
              <td className="p-4 border-b border-gray-200">{banner.title}</td>
              <td className="p-4 border-b border-gray-200">{banner.subtitle}</td>
              <td className="p-4 border-b border-gray-200">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-20 w-20 rounded object-cover"
                />
              </td>
              <VisionEditDelete
                handleEditClick={() => handleEditClick(banner.id)}
                handleDeleteClick={() => handleDeleteClick(banner.id)}
              />
              <td className="p-4 text-center border-b border-gray-200">
                <button
                  onClick={() => handlePreviewClick(banner)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition"
                >
                  <IoEye />
                  Preview
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisionTable;
