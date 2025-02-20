const TransformPreviewModel = ({ previewPoint, closeModals }) => {
    return (
      <div
        id="previewModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Preview Point</h2>
          <p className="text-gray-700">{previewPoint}</p>
          <div className="flex justify-start mt-4">
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
  
  export default TransformPreviewModel;
  