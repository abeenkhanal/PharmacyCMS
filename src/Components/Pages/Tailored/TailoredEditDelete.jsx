import React from "react";

const TailoredEditDelete = ({ closeModals }) => {
  return (
    <div
    id="editModal"
    className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
  >
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Feature</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter feature title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Description</label>
          <textarea
            placeholder="Enter feature description"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </form>
      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={closeModals}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        <button
          onClick={closeModals}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
  );
};

export default TailoredEditDelete;
