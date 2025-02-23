import React from 'react';
import Avvvatars from 'avvvatars-react';
import { HiTrendingUp, HiStar, HiShieldCheck } from 'react-icons/hi';

interface ContributorStats {
  contributions: number;
  successRate: number;
  reputation: number;
}

const TopContributors = () => {
  // Dummy data
  const stats: ContributorStats = {
    contributions: 45,
    successRate: 50,
    reputation: 856,
  };

  // Function to determine reputation tier
  const getReputationTier = (
    score: number
  ): { label: string; color: string } => {
    if (score >= 900) return { label: 'Elite', color: 'text-yellow-500' };
    if (score >= 700) return { label: 'Expert', color: 'text-purple-400' };
    if (score >= 500) return { label: 'Advanced', color: 'text-blue-400' };
    if (score >= 300) return { label: 'Skilled', color: 'text-green-400' };
    return { label: 'Rising', color: 'text-gray-400' };
  };

  const reputationTier = getReputationTier(stats.reputation);

  return (
    <div className="radial-gradient-border border border-gray-800 rounded-xl p-6 w-[370px]">
      <div className="inner-content relative">
        {/* Rank Badge */}
        <div className="absolute -top-3 -right-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold text-sm">
            #1
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          {/* Avatar and Primary Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avvvatars value="ghost" style="character" size={70} />
              <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#0f0f17] border-2 border-[#6366f1]">
                <HiShieldCheck
                  className={`w-3.5 h-3.5 ${reputationTier.color}`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">
                  0x456...858
                </span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f5f5fa14]">
                  <HiStar className="w-3.5 h-3.5 text-yellow-500" />
                  <span className="text-[10px] text-[#f5f5fa7a]">
                    Top Contributor
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <HiTrendingUp className="w-4 h-4 text-[#a855f7]" />
                <span className="text-white text-lg font-semibold">
                  {stats.contributions} Contributions
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                <span className="text-[#f5f5fa7a] text-xs">Success Rate</span>
              </div>
              <span className="text-white text-sm font-medium">
                {stats.successRate}%
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-3.5 h-3.5 text-[#a855f7]" />
                <span className="text-[#f5f5fa7a] text-xs">Reputation Score</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white text-sm font-medium">
                  {stats.reputation}
                </span>
                <span className={`text-[10px] ${reputationTier.color}`}>
                  {reputationTier.label}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative pt-2">
            <div className="h-1.5 w-full bg-[#f5f5fa14] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                style={{ width: `${stats.successRate}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
