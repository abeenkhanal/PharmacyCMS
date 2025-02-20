import React from "react";

const ConnectPreviewModal = ({ selectedPreview, closePreview }) => {
  if (!selectedPreview) return null;

  return (
    <div
      id="previewModal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-left">
          {selectedPreview.title}
        </h2>
        <div className="text-center mb-4">{selectedPreview.icon}</div>
        <p className="text-gray-600 text-left">{selectedPreview.description}</p>
        <div className="text-left mt-4">
          <button
            onClick={closePreview}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectPreviewModal;
