import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  HiTrendingUp,
  HiUserGroup,
  HiClock,
  HiChartBar,
  HiShieldCheck,
  HiChartPie,
  HiCurrencyDollar,
  HiDocumentText,
} from 'react-icons/hi';

interface Campaign {
  campaign_id: string;
  campaign_type: string;
  created_at: string;
  creator_wallet_address: string;
  current_contributions: number;
  data_requirements: string;
  description: string;
  expiration: number;
  is_active: boolean;
  max_data_count: number;
  metadata_uri: string;
  min_data_count: number;
  onchain_campaign_id: string;
  platform_fee: number;
  quality_criteria: string;
  title: string;
  total_budget: number;
  transaction_hash: string;
  unit_price: number;
}

interface AnalyticsProps {
  campaign: Campaign;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  trend?: number;
  color: string;
}

// Dummy data for demonstration
const submissionData = [
  { date: 'Mon', submissions: 45, reputation: 856 },
  { date: 'Tue', submissions: 52, reputation: 872 },
  { date: 'Wed', submissions: 38, reputation: 834 },
  { date: 'Thu', submissions: 65, reputation: 892 },
  { date: 'Fri', submissions: 48, reputation: 868 },
  { date: 'Sat', submissions: 55, reputation: 878 },
  { date: 'Sun', submissions: 42, reputation: 845 },
];

const qualityData = [
  { name: 'High Quality', value: 65, color: '#6366f1' },
  { name: 'Medium Quality', value: 25, color: '#a855f7' },
  { name: 'Low Quality', value: 10, color: '#f5f5fa14' },
];

const Analytics: React.FC<AnalyticsProps> = ({ campaign }) => {
  const totalSubmissions = submissionData.reduce(
    (acc, curr) => acc + curr.submissions,
    0
  );
  const avgReputation = Math.round(
    submissionData.reduce((acc, curr) => acc + curr.reputation, 0) /
      submissionData.length
  );

  const StatCard = ({
    icon: Icon,
    label,
    value,
    trend,
    color,
  }: StatCardProps) => (
    <div className="rounded-xl p-4 border border-[#f5f5fa14]">
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${color}`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-[#f5f5fa7a] text-sm">{label}</p>
          <div className="flex items-center gap-2">
            <span className="text-[#f5f5faf4] text-xl font-semibold">
              {value}
            </span>
            {trend && (
              <span
                className={`text-xs ${
                  trend >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {trend > 0 ? '+' : ''}
                {trend}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 py-6 pr-6">
      {/* Header Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          icon={HiDocumentText}
          label="Total Submissions"
          value={totalSubmissions}
          trend={12.5}
          color="bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        />
        <StatCard
          icon={HiShieldCheck}
          label="Avg. Reputation"
          value={avgReputation}
          trend={5.2}
          color="bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        />
        <StatCard
          icon={HiUserGroup}
          label="Unique Contributors"
          value="156"
          trend={8.1}
          color="bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        />
        <StatCard
          icon={HiCurrencyDollar}
          label="Avg. Cost/Submission"
          value="45 MOVE"
          trend={-2.3}
          color="bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        />
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Submission & Reputation Trend Chart */}
        <div className="col-span-2 rounded-xl p-6 border border-[#f5f5fa14]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <HiChartBar className="w-5 h-5 text-[#a855f7]" />
              <h3 className="text-[#f5f5faf4] text-lg font-semibold">
                Submission & Reputation Trend
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#6366f1]" />
                <span className="text-[#f5f5fa7a] text-sm">Submissions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#a855f7]" />
                <span className="text-[#f5f5fa7a] text-sm">Reputation</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={submissionData}>
                <defs>
                  <linearGradient
                    id="colorSubmissions"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorReputation"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5fa14" />
                <XAxis dataKey="date" stroke="#f5f5fa7a" />
                <YAxis yAxisId="left" stroke="#f5f5fa7a" />
                <YAxis yAxisId="right" orientation="right" stroke="#f5f5fa7a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #f5f5fa14',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="submissions"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorSubmissions)"
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="reputation"
                  stroke="#a855f7"
                  fillOpacity={1}
                  fill="url(#colorReputation)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reputation Distribution */}
        <div className="rounded-xl p-6 border border-[#f5f5fa14]">
          <div className="flex items-center gap-2 mb-6">
            <HiChartPie className="w-5 h-5 text-[#a855f7]" />
            <h3 className="text-[#f5f5faf4] text-lg font-semibold">
              Reputation Distribution
            </h3>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={qualityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {qualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #f5f5fa14',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {qualityData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[#f5f5fa7a] text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 gap-6">
        {/* Time Distribution */}
        <div className="rounded-xl p-6 border border-[#f5f5fa14]">
          <div className="flex items-center gap-2 mb-4">
            <HiClock className="w-5 h-5 text-[#a855f7]" />
            <h3 className="text-[#f5f5faf4] text-lg font-semibold">
              Peak Activity Hours
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { time: '9:00 AM - 12:00 PM', percentage: 35 },
              { time: '12:00 PM - 3:00 PM', percentage: 45 },
              { time: '3:00 PM - 6:00 PM', percentage: 20 },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-[#f5f5fa7a]">{item.time}</span>
                  <span className="text-[#f5f5faf4]">{item.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#f5f5fa14] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Contributors */}
        <div className="rounded-xl p-6 border border-[#f5f5fa14]">
          <div className="flex items-center gap-2 mb-4">
            <HiTrendingUp className="w-5 h-5 text-[#a855f7]" />
            <h3 className="text-[#f5f5faf4] text-lg font-semibold">
              Top Contributors
            </h3>
          </div>
          <div className="space-y-4">
            {[
              { address: '0x456...858', submissions: 45, reputation: 925 },
              { address: '0x123...456', submissions: 38, reputation: 878 },
              { address: '0x789...012', submissions: 32, reputation: 812 },
            ].map((contributor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f5f5fa14] flex items-center justify-center">
                    <span className="text-[#f5f5faf4] text-sm">
                      #{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#f5f5faf4] text-sm">
                      {contributor.address}
                    </p>
                    <p className="text-[#f5f5fa7a] text-xs">
                      {contributor.submissions} submissions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f5f5faf4] text-sm">
                    {contributor.reputation}
                  </span>
                  <HiShieldCheck
                    className={`w-4 h-4 ${
                      contributor.reputation >= 900
                        ? 'text-yellow-500'
                        : 'text-[#a855f7]'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
