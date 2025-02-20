import React from 'react';
import JoditEditor from "jodit-react";

const FaqForm = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
    <form className="space-y-6">
      <div>
        <label className="block text-gray-600 font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-1">Description</label>
        <JoditEditor />
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

export default FaqForm;
