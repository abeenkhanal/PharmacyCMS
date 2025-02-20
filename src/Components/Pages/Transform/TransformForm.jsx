const TransformForm = () => {
    return (
      <form className="space-y-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Add/Edit Point</label>
          <input
            type="text"
            placeholder="Enter point text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Add Point
        </button>
      </form>
    );
  };
  
  export default TransformForm;
  