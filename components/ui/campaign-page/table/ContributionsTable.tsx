import React, { useState } from 'react';
import ContributionsTableRow from './ContributionsTableRow';
import { HiFilter, HiSearch, HiChevronDown } from 'react-icons/hi';

interface Creator {
  avatar: string;
  name: string;
  address: string;
  reputation: number;
}

interface Contribution {
  id: number;
  creator: Creator;
  verificationStatus: 'Verified' | 'Pending' | 'Rejected';
  verifierReputation: number;
  qualityScore: number;
  rewardStatus: 'Paid' | 'Pending' | 'Failed';
  dataUrl: string;
  submittedAt: string;
  rewardAmount: number;
}

const dummyData: Contribution[] = [
  {
    id: 1,
    creator: {
      avatar:
        'https://pbs.twimg.com/profile_images/1744477796301496320/z7AIB7_W_400x400.jpg',
      name: 'Movement Bardock',
      address: '0x456...858',
      reputation: 925,
    },
    verificationStatus: 'Verified',
    verifierReputation: 98,
    qualityScore: 95,
    rewardStatus: 'Paid',
    dataUrl: 'https://data.example.com/1',
    submittedAt: '2024-02-15T10:30:00Z',
    rewardAmount: 50,
  },
  {
    id: 2,
    creator: {
      avatar:
        'https://pbs.twimg.com/profile_images/1744477796301496320/z7AIB7_W_400x400.jpg',
      name: 'John Doe',
      address: '0x123...456',
      reputation: 878,
    },
    verificationStatus: 'Pending',
    verifierReputation: 85,
    qualityScore: 88,
    rewardStatus: 'Pending',
    dataUrl: 'https://data.example.com/2',
    submittedAt: '2024-02-15T09:15:00Z',
    rewardAmount: 50,
  },
  {
    id: 3,
    creator: {
      avatar:
        'https://pbs.twimg.com/profile_images/1744477796301496320/z7AIB7_W_400x400.jpg',
      name: 'Alice Smith',
      address: '0x789...012',
      reputation: 812,
    },
    verificationStatus: 'Rejected',
    verifierReputation: 92,
    qualityScore: 75,
    rewardStatus: 'Failed',
    dataUrl: 'https://data.example.com/3',
    submittedAt: '2024-02-15T08:45:00Z',
    rewardAmount: 50,
  },
];

const ContributionsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredData = dummyData.filter((contribution) => {
    const matchesSearch =
      contribution.creator.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      contribution.creator.address
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' ||
      contribution.verificationStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-4 mt-5">
      {/* Table */}
      <div className=" rounded-xl border border-[#f5f5fa14] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#f5f5fa14]">
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                Contributor
              </th>
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                Status
              </th>
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                <div className="flex items-center gap-1">
                  <span>Verifier Rep.</span>
                  <HiFilter className="w-3 h-3" />
                </div>
              </th>
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                <div className="flex items-center gap-1">
                  <span>Quality</span>
                  <HiFilter className="w-3 h-3" />
                </div>
              </th>
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                Reward
              </th>
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                Submitted
              </th>
              <th className="text-left py-4 px-6 text-[#87858F] text-xs font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f5f5fa14]">
            {filteredData.map((contribution: Contribution) => (
              <ContributionsTableRow
                key={contribution.id}
                contribution={contribution}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-8">
          <p className="text-[#f5f5fa7a] text-sm">
            No contributions found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default ContributionsTable;
