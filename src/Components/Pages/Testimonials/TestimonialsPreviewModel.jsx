// TestimonialsPreviewModel.jsx
import React from "react";

const TestimonialsPreviewModel = ({ previewData, closeModals }) => {
  if (!previewData) return null;
  
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-left">
          Preview Testimonial
        </h2>
        <div className="text-left">
          <img
            src={previewData.image}
            alt={previewData.name}
            className="h-20 w-20 rounded-full mb-4 object-cover"
          />
          <h3 className="text-lg font-bold text-left">{previewData.name}</h3>
          <p className="text-gray-700 text-left">{previewData.role}</p>
          <p className="text-gray-700 mt-4">{previewData.feedback}</p>
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
  );
};

export default TestimonialsPreviewModel;
