import React, { useState } from "react";
import HeroHeader from "./HeroHeader";
import HeroForm from "./HeroForm";
import HeroTable from "./HeroTable";
import HeroPreviewModal from "./HeroPreviewModal";
import HeroEditDeleteModal from "./HeroEditDeleteModal";

const Hero = () => {
  const banners = [
    {
      id: 1,
      title: "Optimize Your Pharmacy Operations",
      subtitle: "Welcome to PharmaEase, where we simplify pharmacy management with cutting-edge solutions.",
      image: "/background.jpg",
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
        <HeroHeader />
        <HeroForm />
        <HeroTable
          banners={banners}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handlePreviewClick={handlePreviewClick}
        />
      </div>
      <HeroEditDeleteModal closeModals={closeModals} />
      {previewData && <HeroPreviewModal previewData={previewData} closeModals={closeModals} />}
    </div>
  );
};

export default Hero;
