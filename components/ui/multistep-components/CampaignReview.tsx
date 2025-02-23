import React from 'react';
import {
  HiOutlineDocument,
  HiOutlineCash,
  HiOutlineCalendar,
  HiOutlinePhotograph,
  HiOutlineClipboardCheck,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiInformationCircle,
} from 'react-icons/hi';

// Dummy data for demonstration
const campaignData = {
  type: 'Text',
  title: 'Community Feedback Collection',
  description:
    'Gathering user feedback on the new platform features and user experience.',
  requirements:
    'Detailed feedback with specific examples and use cases. Minimum 100 words per submission.',
  qualityCriteria:
    'Must be constructive, specific, and actionable feedback. No generic responses.',
  expirationDate: '2024-05-01',
  rewards: {
    unitPrice: '50',
    totalBudget: '5000',
    minDataCount: '50',
    maxDataCount: '100',
  },
};

const CampaignReview = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="space-y-8 ml-24">
        {/* Campaign Type Section */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl opacity-75 blur"></div>
          <div className="relative p-6 bg-[#0f0f17] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                {campaignData.type === 'Text' ? (
                  <HiOutlineDocument className="w-6 h-6 text-white" />
                ) : (
                  <HiOutlinePhotograph className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f5faf4]">
                  {campaignData.type} Campaign
                </h3>
                <p className="text-sm text-[#f5f5fa7a]">Data Collection Type</p>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Details Section */}
        <div className="bg-[#f5f5fa08] rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineClipboardCheck className="w-5 h-5 text-[#a855f7]" />
            <h3 className="text-lg font-semibold text-[#f5f5faf4]">
              Campaign Details
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#f5f5fa7a]">Title</span>
              <p className="text-[#f5f5faf4] font-medium">
                {campaignData.title}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#f5f5fa7a]">Description</span>
              <p className="text-[#f5f5faf4]">{campaignData.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#f5f5fa7a]">Requirements</span>
                <p className="text-[#f5f5faf4]">{campaignData.requirements}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#f5f5fa7a]">
                  Quality Criteria
                </span>
                <p className="text-[#f5f5faf4]">
                  {campaignData.qualityCriteria}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <HiOutlineCalendar className="w-5 h-5 text-[#a855f7]" />
              <span className="text-[#f5f5faf4]">
                Expires: {campaignData.expirationDate}
              </span>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-[#f5f5fa08] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <HiOutlineCash className="w-5 h-5 text-[#a855f7]" />
            <h3 className="text-lg font-semibold text-[#f5f5faf4]">
              Rewards & Limits
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#f5f5fa7a]">
                  Reward per Submission
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[#f5f5faf4] font-medium text-lg">
                    {campaignData.rewards.unitPrice}
                  </span>
                  <span className="text-[#f5f5fa7a]">MOVE</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#f5f5fa7a]">Total Budget</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#f5f5faf4] font-medium text-lg">
                    {campaignData.rewards.totalBudget}
                  </span>
                  <span className="text-[#f5f5fa7a]">MOVE</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#f5f5fa7a]">
                  Submission Range
                </span>
                <div className="flex items-center gap-2">
                  <HiOutlineChartBar className="w-5 h-5 text-[#a855f7]" />
                  <span className="text-[#f5f5faf4]">
                    {campaignData.rewards.minDataCount} -{' '}
                    {campaignData.rewards.maxDataCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Summary Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineCurrencyDollar className="w-5 h-5 text-[#a855f7]" />
            <h3 className="text-lg font-semibold text-[#f5f5faf4]">
              Fee Summary
            </h3>
          </div>

          <div className="bg-[#f5f5fa08] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#f5f5fa14]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#f5f5fa7a] uppercase tracking-wider">
                    Fee Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#f5f5fa7a] uppercase tracking-wider">
                    Rate
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-[#f5f5fa7a] uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5f5fa14]">
                <tr>
                  <td className="px-6 py-4 text-sm text-[#f5f5faf4]">
                    Platform Fee
                  </td>
                  <td className="px-6 py-4 text-sm text-[#f5f5fa7a]">2.5%</td>
                  <td className="px-6 py-4 text-right text-sm text-[#f5f5faf4]">
                    125 MOVE
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-[#f5f5faf4]">
                    Network Fee
                  </td>
                  <td className="px-6 py-4 text-sm text-[#f5f5fa7a]">1%</td>
                  <td className="px-6 py-4 text-right text-sm text-[#f5f5faf4]">
                    50 MOVE
                  </td>
                </tr>
                <tr className="bg-[#f5f5fa14]">
                  <td className="px-6 py-4 text-sm font-medium text-[#f5f5faf4]">
                    Total Fees
                  </td>
                  <td className="px-6 py-4 text-sm text-[#f5f5fa7a]">3.5%</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-[#f5f5faf4]">
                    175 MOVE
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <HiInformationCircle className="w-4 h-4 text-[#f5f5fa7a]" />
            <p className="text-xs text-[#f5f5fa7a]">
              Fees are deducted from the total budget when the campaign starts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignReview;
