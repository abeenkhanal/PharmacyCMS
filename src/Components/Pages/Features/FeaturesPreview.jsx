import React from "react";

const FeaturesPreview = ({ previewData, closeModals }) => {
  return (
    previewData && (
      <div
        id="previewModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Preview </h2>
          <div className="text-left">
            <div className="mb-4 text-center">{previewData.icon}</div>
            <h3 className="text-lg font-bold">{previewData.title}</h3>
            <p className="text-gray-700 mt-2">{previewData.description}</p>
          </div>
          <div className="flex justify-start gap-4 mt-4">
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FeaturesPreview;
