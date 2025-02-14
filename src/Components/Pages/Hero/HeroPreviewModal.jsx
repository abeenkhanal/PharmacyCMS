import React from 'react'

const HeroPreviewModal = ({previewData, closeModals}) => {
  return (
    <div
    id="previewModal"
    className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex"
  >
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      <div className="text-left">
        <h3 className="text-lg font-bold">{previewData.title}</h3>
        <p className="text-gray-700 mt-2">{previewData.subtitle}</p>
        <img
          src={previewData.image}
          alt={previewData.title}
          className="mt-4 rounded-lg w-full object-cover"
        />
      </div>
      <div className="flex justify-start gap-4 mt-4">
        <button
          onClick={closeModals}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  )
}

export default HeroPreviewModal
