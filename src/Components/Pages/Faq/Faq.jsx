import React, { useState } from "react";
import FaqHeader from './FaqHeader';
import FaqForm from './FaqForm';
import FaqTable from './FaqTable';
import FaqEditDelete from './FaqEditDelete';
import FaqPreviewModal from './FaqPreviewModal';

const Faq = () => {
  const [banners] = useState([
    {
      question: "How Can This System Help Manage Inventory?",
      answer: [
        "Track all medicines and supplies in stock, categorized by name, batch, and expiry dates.",
        "Get low-stock alerts to ensure timely restocking.",
        "Maintain detailed logs for purchases, returns, and damages.",
      ],
    },
    {
      question: "Can I Track Medicine Expiry Dates?",
      answer: [
        "Yes, the system provides detailed tracking of expiry dates for all stocked medicines.",
        "Receive automated notifications for upcoming expirations to ensure timely action.",
        "Generate reports to identify and remove expired medicines from inventory.",
      ],
    },
    {
      question: "What Reports Can I Generate?",
      answer: [
        "Daily, weekly, and monthly sales reports for better business insights.",
        "Inventory usage reports to track high-demand medicines.",
        "Profit and loss statements to analyze business performance over time.",
      ],
    },
    {
      question: "How Does This System Handle Customer Records?",
      answer: [
        "Maintain a database of customer details, including contact information and prescription history.",
        "Easily retrieve past purchase records for customer inquiries.",
        "Streamline customer loyalty programs with automated points tracking.",
      ],
    },
    {
      question: "Is This System User-Friendly for My Staff?",
      answer: [
        "Yes, the system is designed with an intuitive interface that is easy to learn and use.",
        "Provide role-based access to ensure security and data privacy.",
        "Includes training documentation and support for quick onboarding.",
      ],
    },
  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    setEditModalVisible(true);  // This logic remains unchanged
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);  // This logic remains unchanged
  };

  const handlePreviewClick = (banner) => {
    setPreviewData(banner);  // Correctly set the preview data
  };

  const closeModals = () => {
    setEditModalVisible(false);
    setDeleteModalVisible(false);
    setPreviewData(null);  // Close all modals
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <FaqHeader />
        <FaqForm />
        <FaqTable
          banners={banners}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handlePreviewClick={handlePreviewClick}
        />
        <FaqEditDelete closeModals={closeModals} />
        <FaqPreviewModal previewData={previewData} closeModals={closeModals} />
      </div>
    </div>
  );
};

export default Faq;
