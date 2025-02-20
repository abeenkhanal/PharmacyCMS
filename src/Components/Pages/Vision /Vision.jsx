import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import VisionHeader from "./VisionHeader";
import VisionForm from "./VisionForm";
import VisionTable from "./VisionTable";
import VisionPreviewModel from "./VisionPreviewModel";

const Vision = () => {
  const banners = [
    {
      id: 1,
      title: "Our Vision",
      subtitle:
        "To revolutionize the pharmacy industry by delivering seamless, secure, and scalable solutions that enhance inventory management, prescription tracking, and patient care.",
      image:
        "https://images.pexels.com/photos/18809/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Our Mission",
      subtitle:
        "Our mission is to streamline pharmacy operations with advanced CRM tools, enabling real-time inventory updates, automated prescription fulfillment, and robust analytics.",
      image:
        "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = (id) => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = (id) => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (banner) => {
    setPreviewData(banner);
    document.getElementById("previewModal").style.display = "flex";
  };

  const closeModals = () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
    setPreviewData(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <VisionHeader />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
          <VisionForm />
        </div>
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Data</h2>
          <VisionTable
            banners={banners}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handlePreviewClick={handlePreviewClick}
          />
        </div>
      </div>

      {previewData && (
        <VisionPreviewModel previewData={previewData} closeModals={closeModals} />
      )}
    </div>
  );
};

export default Vision;
