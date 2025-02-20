import React from 'react';
import { IoPencil, IoTrash, IoEye } from 'react-icons/io5';

const FaqTable = ({ banners, handleEditClick, handleDeleteClick, handlePreviewClick }) => (
  <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
    <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Data</h2>
    <div className="md:w-11/12 mx-auto">
      <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-700 font-semibold">
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Subtitle</th>
            <th className="p-4 text-center">Actions</th>
            <th className="p-4 text-center">Preview</th>
          </tr>
        </thead>
        <tbody>
          {banners.map((banner, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 transition">
              <td className="p-4">{banner.question}</td>
              <td className="p-4">{banner.answer.join(', ')}</td>
              <td className="p-4 text-center">
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
              <td className="p-4 text-center">
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
);

export default FaqTable;
