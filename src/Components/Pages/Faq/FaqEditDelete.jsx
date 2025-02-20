import React from 'react';

const DiscoverEditDelete = ({ closeModals }) => (
  <>
    {/* Edit Modal */}
    <div id="editModal" className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Edit Banner</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Banner Title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Subtitle</label>
            <input
              type="text"
              placeholder="Banner Subtitle"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={closeModals} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
            Cancel
          </button>
          <button onClick={closeModals} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>

    {/* Delete Modal */}
    <div id="deleteModal" className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
      <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full">
        <p className="text-lg text-center font-medium mb-4">Are you sure you want to delete this banner?</p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={closeModals} className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Yes
          </button>
          <button onClick={closeModals} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </>
);

export default DiscoverEditDelete;
