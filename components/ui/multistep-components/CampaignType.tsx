import React, { useState } from 'react';
import { TypeSelector } from './step-components/TypeSelector';
import { useCampaign } from '@/context/CampaignContext';
import { HiOutlineDocument, HiOutlinePhotograph } from 'react-icons/hi';

interface PlanType {
  name: string;
  icon: React.ReactNode;
  description: string;
  isPremium?: boolean;
}

const campaignTypes: PlanType[] = [
  {
    name: 'Text',
    icon: <HiOutlineDocument className="w-6 h-6 text-white" />,
    description: 'Collect text-based data from your community',
    isPremium: false,
  },
  {
    name: 'Image',
    icon: <HiOutlinePhotograph className="w-6 h-6 text-white" />,
    description: 'Collect image-based data from your community',
    isPremium: true,
  },
];

const CampaignType = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPremiumEnabled, setIsPremiumEnabled] = useState(true);
  const { updateCampaignType, errors, campaignData } = useCampaign();

  const handleTypeChange = (type: PlanType) => {
    updateCampaignType(type);
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

        {errors.type && (
          <p className="text-red-500 text-sm mt-2">{errors.type}</p>
        )}

        {/* Uncomment for testing premium features */}
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
            types={campaignTypes}
            selectedType={campaignData.type}
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
