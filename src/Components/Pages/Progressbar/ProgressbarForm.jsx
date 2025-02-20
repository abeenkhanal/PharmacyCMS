import React from 'react'

const ProgressbarForm = () => {
  return (
    <div>
        <form className="space-y-6">
      <div>
        <label className="block text-gray-600 font-medium mb-1">Number</label>
        <input
          type="text"
          name="number"
          placeholder="Enter number (e.g., 50+)"
          className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-1">Label</label>
        <input
          type="text"
          name="label"
          placeholder="Enter label (e.g., Pharmacies Onboarded)"
          className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
  )
}

export default ProgressbarForm
