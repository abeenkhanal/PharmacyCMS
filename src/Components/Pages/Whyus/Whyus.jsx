import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import WhyusHeader from "./WhyusHeader";
import WhyusForm from "./WhyusForm";
import WhyusTable from "./WhyusTable";
import WhyusPreviewModel from "./WhyusPreviewModel";
import { FaBoxes, FaChartLine, FaHeadset, FaLock, FaPrescriptionBottle, FaUserMd } from "react-icons/fa";

const Whyus = () => {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const revolutionizeData = [
    {
      id: 1,
      icon: <FaBoxes className="text-blue-600 text-3xl" />,
      title: "Inventory Management",
      description: "Easily track and manage medicine stocks with real-time updates and low-stock alerts.",
    },
    {
      id: 2,
      icon: <FaPrescriptionBottle className="text-blue-600 text-3xl" />,
      title: "Prescription Tracking",
      description: "Ensure seamless prescription fulfillment with automated tracking and reminders.",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Analytics Dashboard",
      description: "Gain insights into your pharmacy’s performance with detailed sales and inventory reports.",
    },
    {
      id: 4,
      icon: <FaUserMd className="text-blue-600 text-3xl" />,
      title: "Patient Management",
      description: "Keep track of patient profiles, prescriptions, and medical history in one place.",
    },
    {
      id: 5,
      icon: <FaLock className="text-blue-600 text-3xl" />,
      title: "Secure Data Storage",
      description: "Protect sensitive information with our secure and compliant data storage solutions.",
    },
    {
      id: 6,
      icon: <FaHeadset className="text-blue-600 text-3xl" />,
      title: "24/7 Support",
      description: "Get round-the-clock technical support for uninterrupted operations.",
    },
  ];

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (data) => {
    setSelectedPreview(data);
    document.getElementById("previewModal").style.display = "flex";
  };

  const closePreview = () => {
    document.getElementById("previewModal").style.display = "none";
    setSelectedPreview(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <WhyusHeader />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Feature</h2>
          <WhyusForm />
        </div>
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Features</h2>
          <WhyusTable
            revolutionizeData={revolutionizeData}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handlePreviewClick={handlePreviewClick}
          />
        </div>
      </div>

      {selectedPreview && (
        <WhyusPreviewModel selectedPreview={selectedPreview} closePreview={closePreview} />
      )}
    </div>
  );
};

export default Whyus;
