import React from 'react';
import Avvvatars from 'avvvatars-react';
import {
  HiOutlineInformationCircle,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineClock,
  HiShieldCheck,
  HiArrowRight,
} from 'react-icons/hi';
import PaymentBreakdown from '../../cards/PaymentBreakdown';

interface CampaignStats {
  totalSubmissions: number;
  avgQualityScore: number;
  activeContributors: number;
  timeRemaining: string;
}

const campaignStats: CampaignStats = {
  totalSubmissions: 156,
  avgQualityScore: 92,
  activeContributors: 24,
  timeRemaining: '5 days',
};

const Overview = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avvvatars value="John Doe" size={64} style="shape" />
              <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#0f0f17] border-2 border-[#6366f1]">
                <HiShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[#f5f5faf4] text-xl font-semibold">
                  John Doe
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white">
                  Campaign Owner
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#f5f5fa7a] text-sm">0x123...456</span>
                <span className="text-purple-400 text-sm">878 reputation</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HiOutlineTag className="w-5 h-5 text-[#a855f7]" />
              <h1 className="text-[#f5f5faf4] text-2xl font-bold">
                Health and Wellness Data Collection
              </h1>
            </div>
            <div className="flex items-center gap-4 text-[#f5f5fa7a] text-sm">
              <div className="flex items-center gap-1">
                <HiOutlineCalendar className="w-4 h-4" />
                <span>Created Feb 15, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineClock className="w-4 h-4" />
                <span>Ends in {campaignStats.timeRemaining}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-6">
        {/* Campaign Details */}
        <div className="col-span-2 space-y-6">
          {/* Description */}
          <div className="rounded-xl border border-[#f5f5fa14] p-6 radial-gradient-border">
            <div className="inner-content">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineInformationCircle className="w-5 h-5 text-[#a855f7]" />
                <h3 className="text-[#f5f5faf4] text-lg font-semibold">
                  Campaign Details
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-[#f5f5faf4] leading-relaxed">
                  We are collecting comprehensive health and wellness data to
                  improve our understanding of community well-being. This
                  campaign focuses on gathering detailed information about daily
                  activities, nutrition, and general health metrics.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#f5f5fa14]">
                  <div>
                    <h4 className="text-[#f5f5fa7a] text-sm mb-2">
                      Requirements
                    </h4>
                    <ul className="space-y-2 text-[#f5f5faf4] text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                        Daily activity logs (min. 7 days)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                        Nutritional information
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                        Health metrics (optional)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#f5f5fa7a] text-sm mb-2">
                      Quality Criteria
                    </h4>
                    <ul className="space-y-2 text-[#f5f5faf4] text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                        Complete daily records
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                        Accurate timestamps
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                        Detailed descriptions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div>
          <PaymentBreakdown
            totalBudget={5000}
            contributorsCount={24}
            submissionsCount={156}
            remainingBudget={3200}
            currency="MOVE"
          />
        </div>
      </div>
      <button className="flex text-sm items-center gap-2 px-6 py-3 rounded-xl gradient-border text-white font-semibold hover:opacity-90 transition-opacity">
        Submit Data
        <HiArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Overview;
