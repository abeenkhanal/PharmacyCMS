import React from 'react'
import { IoEye } from "react-icons/io5";
import RevolutionizeEditDelete from './RevolutionizeEditDelete';

const RevolutionizeTable = ({ revolutionizeData, handlePreviewClick }) => {
  return (
    <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
      <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Features</h2>
      <div className="md:w-11/12 mx-auto">
        <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="p-4 text-left border-b border-gray-200">Icon</th>
              <th className="p-4 text-left border-b border-gray-200">Title</th>
              <th className="p-4 text-left border-b border-gray-200">Description</th>
              <th className="p-4 text-center border-b border-gray-200">Actions</th>
              <th className="p-4 text-center border-b border-gray-200">Preview</th>
            </tr>
          </thead>
          <tbody>
            {revolutionizeData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="p-4 border-b border-gray-200 text-center">{data.icon}</td>
                <td className="p-4 border-b border-gray-200">{data.title}</td>
                <td className="p-4 border-b border-gray-200">{data.description}</td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <RevolutionizeEditDelete />
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <button
                    onClick={() => handlePreviewClick(data)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition">
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

export default RevolutionizeTable
