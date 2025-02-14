import React, { useState } from "react";
import AboutHeader from "./AboutHeader";
import Aboutform from './Aboutform';
import AboutTable from './AboutTable';
import AboutEditdelete from './AboutEditdelete';
import AboutPreview from './AboutPreview';

const Aboutus = () => {
  const [banners, setBanners] = useState([]);
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
        <AboutHeader />
        <Aboutform />
        <AboutTable
          banners={banners}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handlePreviewClick={handlePreviewClick}
        />
      </div>
      <AboutEditdelete closeModals={closeModals} />
      {previewData && <AboutPreview previewData={previewData} closeModals={closeModals} />}
    </div>
  );
};

export default Aboutus;
