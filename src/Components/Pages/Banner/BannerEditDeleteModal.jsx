import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const BannerEditDeleteModal = ({ closeModals,id}) => {

  const [Loading, setLoading] = useState(false);


  const Deletedata = () => {
    try {
      setLoading(true)
      axios
        .delete(`http://192.168.1.128:3001/banner-section/${id}`)
        .then((res) => {
          // setDeletes();
          // setLoading(false)
          console.log("data", id);
        })
        .catch((err) => {
          console.log("data", err);
        });
    } catch (error) {
      console.log("datass", error);
    }
  };

  useEffect(() => {
    if (Loading == true) {
      const timeoutId = setTimeout(() => {
        toast.error("Data is deleted");
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [Loading]);








  return (
    <div>
      {/* Delete Modal */}
      <div
        id="deleteModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <ToastContainer />
        <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full text-center">
          <p className="text-lg font-medium mb-4">Are you sure you want to delete this banner?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={Deletedata}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              {Loading ? <FaSpinner className="animate-spin" /> : "Yes"}
            </button>
            <button
              onClick={()=> closeModals(null)}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        id="editModal"
        className="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 hidden"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Banner</h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter banner title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">Subtitle</label>
              <textarea
                placeholder="Enter banner subtitle"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={closeModals}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={closeModals}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerEditDeleteModal
