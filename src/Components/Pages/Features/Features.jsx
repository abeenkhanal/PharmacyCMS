import React, { useState } from "react";
import FeaturesHeader from "./FeaturesHeader";
import FeaturesForm from "./FeaturesForm";
import FeaturesTable from "./FeaturesTable";
import FeaturesPreview from "./FeaturesPreview";
import FeaturesEditDelete from "./FeaturesEditDelete";

const Features = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <FeaturesHeader />
        <FeaturesForm />
        <FeaturesTable />
      </div>
      <FeaturesPreview />
      <FeaturesEditDelete />
    </div>
  );
};

export default Features;
