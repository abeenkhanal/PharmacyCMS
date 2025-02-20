// TestimonialTable.jsx
import React from "react";
import { IoPencil, IoTrash } from "react-icons/io5";

const TestimonialTable = ({ testimonials, handleEditClick, handleDeleteClick, handlePreviewClick }) => {
  return (
    <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
      <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Testimonials</h2>
      <div className="md:w-11/12 mx-auto">
        <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="p-4 text-left border-b border-gray-200">Image</th>
              <th className="p-4 text-left border-b border-gray-200">Testimonial</th>
              <th className="p-4 text-left border-b border-gray-200">Name</th>
              <th className="p-4 text-left border-b border-gray-200">Role</th>
              <th className="p-4 text-center border-b border-gray-200">Actions</th>
              <th className="p-4 text-center border-b border-gray-200">Preview</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial, index) => (
              <tr key={index} className="hover:bg-gray-50 transition border-b border-gray-200">
                <td className="p-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-4">{testimonial.feedback}</td>
                <td className="p-4">{testimonial.name}</td>
                <td className="p-4">{testimonial.role}</td>
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
                    onClick={() => handlePreviewClick(testimonial)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition"
                  >
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
};

export default TestimonialTable;
