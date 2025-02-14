import React, { useState } from 'react';
import axios from 'axios';

const AboutEditdelete = ({ closeModals, bannerId }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/delete-banner/${bannerId}`);
      if (response.status === 200) {
        alert('Banner deleted successfully');
        closeModals(); 
      }
    } catch (error) {
      console.error('Error deleting banner:', error);
      alert('Failed to delete banner');
    }
  };

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.put(`/api/edit-banner/${bannerId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Banner updated successfully');
        closeModals(); 
      }
    } catch (error) {
      console.error('Error editing banner:', error);
      alert('Failed to update banner');
    }
  };

  return (
    <div>
      {/* Delete Modal */}
      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this banner?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Yes
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Banner</h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter banner title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Subtitle</label>
              <textarea
                placeholder="Enter banner subtitle"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Image</label>
              <input
                type="file"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={closeModals}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
              Cancel
            </button>
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditdelete;
