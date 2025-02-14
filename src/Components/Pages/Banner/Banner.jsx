import React, { useState } from "react";
import BannerHeader from "./BannerHeader";
import BannerForm from "./BannerForm";
import BannerTable from "./BannerTable";
import BannerPreviewModal from "./BannerPreviewModal";
import BannerEditDeleteModal from "./BannerEditDeleteModal";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Experience Pharmacy Management System in Action",
      subtitle: "Discover how PharmaEase can transform your pharmacy operations. Click below to view a demo and see the benefits firsthand.",
    },
  ];

  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    document.getElementById("editModal").style.display = "flex";
  };

  const handleDeleteClick = () => {
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
        <BannerHeader />
        <BannerForm />
        <BannerTable
          banners={banners}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handlePreviewClick={handlePreviewClick}
        />
      </div>
      <BannerEditDeleteModal closeModals={closeModals} />
      {previewData && (
        <BannerPreviewModal previewData={previewData} closeModals={closeModals} />
      )}
    </div>
  );
};

export default Banner;
