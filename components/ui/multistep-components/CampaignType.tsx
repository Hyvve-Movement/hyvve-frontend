import React, { useState } from 'react';
import { TypeSelector } from './step-components/TypeSelector';

interface PlanType {
  name: string;
  icon: React.ReactNode;
  description: string;
  isPremium?: boolean;
}

const CampaignType = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPremiumEnabled, setIsPremiumEnabled] = useState(true);

  const handleTypeChange = (type: PlanType) => {
    console.log('Selected type:', type);
  };

  // Test controls for debugging
  const toggleDisabled = () => setIsDisabled((prev) => !prev);
  const togglePremium = () => setIsPremiumEnabled((prev) => !prev);

  return (
    <div className="w-[898px] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-lg font-semibold text-center">
          What type of campaign would you like to create?
        </h1>
        <p className="text-gray-300 text-sm font-semibold mt-4">
          Select the type of campaign you want to create
        </p>

        
        {/* <div className="flex gap-4 mb-4">
          <button
            onClick={toggleDisabled}
            className="px-4 py-2 text-sm rounded-md bg-gray-700 text-white"
          >
            {isDisabled ? 'Enable' : 'Disable'} Selection
          </button>
          <button
            onClick={togglePremium}
            className="px-4 py-2 text-sm rounded-md bg-gray-700 text-white"
          >
            {isPremiumEnabled ? 'Disable' : 'Enable'} Premium
          </button>
        </div> */}

        <div className="flex justify-center gap-16 mt-9 ml-16">
          <TypeSelector
            disabled={isDisabled}
            premiumEnabled={isPremiumEnabled}
            onTypeChange={handleTypeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignType;
