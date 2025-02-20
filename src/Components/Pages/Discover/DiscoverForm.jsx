import React, { useState } from 'react';

const DiscoverForm = ({ handleAddPoint }) => {
  const [point, setPoint] = useState('');

  const handleChange = (e) => {
    setPoint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (point) {
      handleAddPoint(point);
      setPoint('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Edit Points</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Add/Edit Point</label>
          <input
            type="text"
            value={point}
            onChange={handleChange}
            placeholder="Enter point text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
          Add Point
        </button>
      </form>
    </div>
  );
};

export default DiscoverForm;
