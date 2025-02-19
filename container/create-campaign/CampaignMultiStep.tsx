import React, { useState } from 'react';
import ProgressBar from '@/components/ui/ProgressBar';

const steps = [
  { label: 'Basic Info', description: 'Campaign details and objectives' },
  { label: 'Rewards', description: 'Set up campaign rewards' },
  { label: 'Review', description: 'Review and launch campaign' },
  { label: 'Launch', description: 'Launch campaign' },
  { label: 'Success', description: 'Campaign launched successfully' },
];

const CampaignMultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ProgressBar steps={steps} currentStep={currentStep} />

      {/* Step content will go here */}
      <div className="mt-8">
        {currentStep === 0 && <div>Basic Info Step</div>}
        {currentStep === 1 && <div>Rewards Step</div>}
        {currentStep === 2 && <div>Review Step</div>}
        {currentStep === 3 && <div>Launch Step</div>}
        {currentStep === 4 && <div>Success Step</div>}
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
          }
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md disabled:opacity-50"
        >
          {currentStep === steps.length - 1 ? 'Launch Campaign' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default CampaignMultiStep;
