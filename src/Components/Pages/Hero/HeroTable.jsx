import { IoPencil, IoTrash, IoEye } from "react-icons/io5";
import React from 'react'

const HeroTable = ({ banners, handleEditClick, handleDeleteClick, handlePreviewClick }) => {
  return (
    <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
    <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Data</h2>
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
              <td className="p-4 border-b border-gray-200 text-center">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => handleEditClick(banner.id)}
                    className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition"
                  >
                    <IoPencil />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(banner.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition"
                  >
                    <IoTrash />
                    Delete
                  </button>
                </div>
              </td>
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
  </div>
  )
}

export default HeroTable
