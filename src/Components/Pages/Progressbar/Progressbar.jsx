import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import ProgressbarHeader from "./ProgressbarHeader";
import ProgressbarForm from "./ProgressbarForm";
import ProgressbarTable from "./ProgressbarTable";
import ProgressbarPreviewModel from "./ProgressbarPreviewModel";

const Progressbar = () => {
  const [progressBars] = useState([
    { id: 1, number: "50+", label: "Pharmacies Onboarded" },
    { id: 2, number: "1K+", label: "Prescriptions Processed Daily" },
    { id: 3, number: "5+", label: "Years of Experience" },
    { id: 4, number: "100%", label: "Client Satisfaction" },
  ]);

  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = (id) => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = (id) => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (bar) => {
    setPreviewData(bar);
    document.getElementById("previewModal").style.display = "flex";
  };

  const closeModals = () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <ProgressbarHeader />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Progress Bar</h2>
          <ProgressbarForm />
        </div>
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md mt-8">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Progress Bars</h2>
          <ProgressbarTable
            progressBars={progressBars}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handlePreviewClick={handlePreviewClick}
          />
        </div>
      </div>

      {/* Preview Modal */}
      <ProgressbarPreviewModel previewData={previewData} closeModals={closeModals} />
    </div>
  );
};

export default Progressbar;
