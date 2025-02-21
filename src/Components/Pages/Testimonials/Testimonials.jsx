// Testimonials.jsx
import React, { useState } from "react";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsForm from "./TestimonialsForm";
import TestimonialTable from "./TestimonialTable";
import TestimonialsPreviewModel from "./TestimonialsPreviewModel";
import TestimonialsEditDelete from "./TestimonialsEditDelete";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Company",
      feedback: "This is a testimonial.",
      },
    

  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handlePreviewClick = (testimonial) => {
    setPreviewData(testimonial);
  };

  const closeModals = () => {
    setEditModalVisible(false);
    setDeleteModalVisible(false);
    setPreviewData(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <TestimonialsHeader />
        <TestimonialsForm />
        <TestimonialTable
          testimonials={testimonials}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handlePreviewClick={handlePreviewClick}
        />
      </div>

      {/* Modals */}
   
   
      <TestimonialsPreviewModel previewData={previewData} closeModals={closeModals} />
    </div>
  );
};

export default Testimonials;
