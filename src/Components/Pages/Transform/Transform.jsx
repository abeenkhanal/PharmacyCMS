import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import TransformHeader from "./TransformHeader";
import TransformForm from "./TransformForm";
import TransformTable from "./TransformTable";
import TransformPreviewModel from "./TransformPreviewModel";

const Transform = () => {
  const [points] = useState([
    "Real-time inventory management with low-stock alerts.",
    "Automated prescription tracking for seamless workflows.",
    "Comprehensive analytics to drive better decision-making.",
    "HIPAA-compliant data storage for security and trust.",
    "Built-in patient management to enhance customer satisfaction",
  ]);

  const [previewPoint, setPreviewPoint] = useState("");

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (point) => {
    setPreviewPoint(point);
    document.getElementById("previewModal").style.display = "flex";
  };

  const closeModals = () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <TransformHeader />
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Edit Points</h2>
          <TransformForm />
        </div>
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Points</h2>
          <TransformTable
            points={points}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handlePreviewClick={handlePreviewClick}
          />
        </div>
      </div>

      {/* Preview Modal */}
      <TransformPreviewModel previewPoint={previewPoint} closeModals={closeModals} />
    </div>
  );
};

export default Transform;
