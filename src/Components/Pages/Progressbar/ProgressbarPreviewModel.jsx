import React from 'react'

const ProgressbarPreviewModel = ({ previewData, closeModals }) => {
  return (
    <div
    id="previewModal"
    className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
  >
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      {previewData && (
        <div className="space-y-4">
          <div className="text-lg font-medium">Number: {previewData.number}</div>
          <div className="text-lg font-medium">Label: {previewData.label}</div>
        </div>
      )}
      <div className="flex justify-start mt-4">
        <button
          onClick={closeModals}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProgressbarPreviewModel
