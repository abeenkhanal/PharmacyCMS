// TestimonialsForm.jsx
import React from "react";
import JoditEditor from "jodit-react";

const TestimonialsForm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Testimonial</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Client Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter client name"
            className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Position</label>
          <input
            type="text"
            name="position"
            placeholder="Enter position"
            className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Testimonial</label>
          <JoditEditor />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
          />
        </div>
        <div className="text-left">
          <button
            type="button"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialsForm;
