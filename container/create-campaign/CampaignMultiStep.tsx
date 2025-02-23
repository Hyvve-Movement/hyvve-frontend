import React, { useState } from 'react';
import ProgressBar from '@/components/ui/ProgressBar';
import CampaignType from '@/components/ui/multistep-components/CampaignType';
import CampaignDetails from '@/components/ui/multistep-components/CampaignDetails';
import CampaignRewards from '@/components/ui/multistep-components/CampaignRewards';
import CampaignReview from '@/components/ui/multistep-components/CampaignReview';

const steps = [
  { label: 'Campaign Type', description: '' },
  { label: 'Campaign Details', description: '' },
  { label: 'Campaign Rewards', description: '' },
  { label: 'Review', description: '' },
  { label: 'Launch', description: '' },
];

const CampaignMultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-[898px] 2xl:max-w-[1100px] mx-auto p-6">
      {/* Progress Bar Container */}
      <div className="flex justify-center">
        <ProgressBar steps={steps} currentStep={currentStep} />
      </div>

      {/* Step Content Container */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-3xl">
          {currentStep === 0 && <CampaignType />}
          {currentStep === 1 && <CampaignDetails />}
          {currentStep === 2 && <CampaignRewards />}
          {currentStep === 3 && <CampaignReview />}
          {currentStep === 4 && <div>Launch Step</div>}
          {currentStep === 5 && <div>Success Step</div>}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-3xl flex justify-between">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="px-6 py-3 text-sm text-[#f5f5faf4] border border-[#f5f5fa14] rounded-xl disabled:opacity-50 hover:bg-[#f5f5fa08] transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            disabled={currentStep === steps.length - 1}
            className="px-6 py-3 text-sm text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {currentStep === steps.length - 1 ? 'Launch Campaign' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignMultiStep;
