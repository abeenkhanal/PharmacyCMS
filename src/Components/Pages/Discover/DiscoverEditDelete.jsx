import React from 'react';

const DiscoverEditDelete = ({ closeModals }) => (
  <>
    {/* Edit Modal */}
    <div id="editModal" className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Point</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Point Text</label>
            <textarea
              rows="4"
              placeholder="Enter point text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <div className="flex justify-end gap-4 mt-4">
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
    <div id="deleteModal" className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
      <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
        <p className="text-lg font-medium mb-4">Are you sure you want to delete this point?</p>
        <div className="flex justify-center gap-4">
          <button onClick={closeModals} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
          <button onClick={closeModals} className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </>
);

export default DiscoverEditDelete;
