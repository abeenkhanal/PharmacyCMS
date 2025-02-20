import React, { useState } from "react";
import RevolutionizeHeader from "./RevolutionizeHeader";
import RevolutionizeForm from "./RevolutionizeForm";
import RevolutionizeTable from "./RevolutionizeTable";
import RevolutionizePreview from "./RevolutionizePreview";
import { FiBox, FiClipboard, FiDollarSign } from 'react-icons/fi';

const Revolutionize = () => {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const revolutionizeData = [
    {
      id: 1,
      icon: <FiBox className="text-blue-600 text-3xl" />,
      title: "Inventory Management",
      description: "Keep track of stock levels and streamline order processes with ease.",
    },
    {
      id: 2,
      icon: <FiClipboard className="text-blue-600 text-3xl" />,
      title: "Prescription Tracking",
      description: "Efficiently manage prescriptions and ensure timely refills for your customers.",
    },
    {
      id: 3,
      icon: <FiDollarSign className="text-blue-600 text-3xl" />,
      title: "Billing Solutions",
      description: "Automate billing processes to reduce errors and save time.",
    },
  ];

  const handlePreviewClick = (data) => {
    setSelectedPreview(data);
  };

  const closePreview = () => {
    setSelectedPreview(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <RevolutionizeHeader />
        <RevolutionizeForm />
        <RevolutionizeTable 
          revolutionizeData={revolutionizeData} 
          handlePreviewClick={handlePreviewClick}
        />
        {selectedPreview && (
          <RevolutionizePreview 
            selectedPreview={selectedPreview} 
            closePreview={closePreview}
          />
        )}
      </div>
    </div>
  );
};

export default Revolutionize;
