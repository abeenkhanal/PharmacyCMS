import React, { useState } from "react";

import PharmacysolutionHeader from "./PharmacysolutionHeader";
import PharmacysolutionForm from "./PharmacysolutionForm";
import PharmacysolutionTable from "./PharmacysolutionTable";
import PharmacysolutionPreviewModel from "./PharmacysolutionPreviewModel";
import { FaClipboardList, FaFileInvoiceDollar, FaPrescriptionBottle } from "react-icons/fa";

const Pharmacysolution = () => {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const pharmacysolutionData = [
    {
      icon: <FaClipboardList className="text-blue-300 text-3xl" />,
      title: "Real-Time Inventory Management",
      description: "Keep track of stock levels and reorder seamlessly.",
    },
    {
      icon: <FaPrescriptionBottle className="text-blue-300 text-3xl" />,
      title: "Secure Prescription Tracking",
      description: "Ensure accuracy and confidentiality with our system.",
    },
    {
      icon: <FaFileInvoiceDollar className="text-blue-300 text-3xl" />,
      title: "Efficient Billing Systems",
      description: "Streamline your billing process with automated solutions.",
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
        <PharmacysolutionHeader />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Feature</h2>
          <PharmacysolutionForm />
        </div>
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Features</h2>
          <PharmacysolutionTable
            pharmacysolutionData={pharmacysolutionData}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handlePreviewClick={handlePreviewClick}
          />
        </div>
      </div>

      {selectedPreview && (
        <PharmacysolutionPreviewModel selectedPreview={selectedPreview} closePreview={closePreview} />
      )}
    </div>
  );
};

export default Pharmacysolution;
