import React from 'react';

const FaqPreviewModal = ({ previewData, closeModals }) => {
  if (!previewData) return null; // Check if previewData is null or undefined

  return (
    <div id="previewModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-left">Preview Banner</h2>
        <div className="text-left">
          <h3 className="text-lg font-bold">{previewData.question}</h3>
          <p className="text-gray-700 mt-2">{previewData.answer.join(', ')}</p>
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
  );
};

export default FaqPreviewModal;
