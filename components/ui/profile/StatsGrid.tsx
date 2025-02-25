import React from 'react';
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineClipboardCheck,
} from 'react-icons/hi';
import StatCard from './StatCard';

interface ProfileStats {
  campaignsCreated: number;
  campaignsEarnings: number;
  contributionsMade: number;
  contributionsEarnings: number;
  reputationScore: number;
}

interface StatsGridProps {
  stats: ProfileStats;
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <StatCard
        icon={<HiOutlineDocumentText className="w-6 h-6 text-[#6366f1]" />}
        label="Campaigns Created"
        value={stats.campaignsCreated}
        subValue="Active campaigns: 5"
      />
      <StatCard
        icon={<HiOutlineCurrencyDollar className="w-6 h-6 text-[#22c55e]" />}
        label="Amount Earned from Campaigns"
        value={stats.campaignsEarnings}
      />
      <StatCard
        icon={<HiOutlineClipboardCheck className="w-6 h-6 text-[#a855f7]" />}
        label="Contributions Made"
        value={stats.contributionsMade}
        subValue="Accepted: 42 (93%)"
      />
      <StatCard
        icon={<HiOutlineCurrencyDollar className="w-6 h-6 text-[#22c55e]" />}
        label="Amount Earned from Contributions"
        value={stats.contributionsEarnings}
      />
      <StatCard
        icon={<HiOutlineChartBar className="w-6 h-6 text-[#6366f1]" />}
        label="Reputation Score"
        value={stats.reputationScore}
        subValue="Top 5% of contributors"
      />
      <StatCard
        icon={<HiOutlineUserGroup className="w-6 h-6 text-[#a855f7]" />}
        label="Community Impact"
        value="High"
        subValue="Trusted community member"
      />
    </div>
  );
};

export default StatsGrid;
