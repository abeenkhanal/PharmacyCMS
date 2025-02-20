import React, { useState } from "react";
import DiscoverHeader from './DiscoverHeader';
import DiscoverForm from './DiscoverForm';
import DiscoverTable from './DiscoverTable';
import DiscoverEditDelete from './DiscoverEditDelete';
import DiscoverPreviewModal from './DiscoverPreviewModal';

const Discover = () => {
  const [points, setPoints] = useState([
    "Track inventory with real-time updates",
    "Manage prescriptions and automate refills",
    "Generate detailed sales and business reports",
    "Provide seamless customer service",
  ]);
  
  const [previewPoint, setPreviewPoint] = useState(""); // State to store the point to preview

  const handleAddPoint = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  const handleEditClick = (point) => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = (point) => {
    document.getElementById("deleteModal").style.display = "flex";
  };

  const handlePreviewClick = (point) => {
    setPreviewPoint(point); // Set the point to preview
    document.getElementById("previewModal").style.display = "flex"; // Show the preview modal
  };

  const closeModals = () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <DiscoverHeader />
        <DiscoverForm handleAddPoint={handleAddPoint} />
        <DiscoverTable points={points} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handlePreviewClick={handlePreviewClick} />
        <DiscoverEditDelete closeModals={closeModals} />
        <DiscoverPreviewModal previewPoint={previewPoint} closeModals={closeModals} />
      </div>
    </div>
  );
};

export default Discover;
