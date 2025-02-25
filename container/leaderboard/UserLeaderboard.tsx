import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  TrophyIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Avvvatars from 'avvvatars-react';

interface LeaderboardUser {
  rank: number;
  address: string;
  username: string;
  score: number;
  totalAmount: number;
  campaignsCount: number;
}

const mockCreators: LeaderboardUser[] = [
  {
    rank: 1,
    address: '0x1234...5678',
    username: 'DataMaster',
    score: 98,
    totalAmount: 15000,
    campaignsCount: 12,
  },
  {
    rank: 2,
    address: '0x2345...6789',
    username: 'CryptoWhiz',
    score: 95,
    totalAmount: 12000,
    campaignsCount: 10,
  },
  {
    rank: 3,
    address: '0x3456...7890',
    username: 'BlockExpert',
    score: 92,
    totalAmount: 10000,
    campaignsCount: 8,
  },
  {
    rank: 4,
    address: '0x4567...8901',
    username: 'DataPro',
    score: 88,
    totalAmount: 8000,
    campaignsCount: 6,
  },
  {
    rank: 5,
    address: '0x5678...9012',
    username: 'ChainMaster',
    score: 85,
    totalAmount: 7000,
    campaignsCount: 5,
  },
];

const mockContributors: LeaderboardUser[] = [
  {
    rank: 1,
    address: '0x8765...4321',
    username: 'DataHero',
    score: 95,
    totalAmount: 12000,
    campaignsCount: 45,
  },
  {
    rank: 2,
    address: '0x7654...3210',
    username: 'CryptoNinja',
    score: 92,
    totalAmount: 10000,
    campaignsCount: 40,
  },
  {
    rank: 3,
    address: '0x6543...2109',
    username: 'ChainWizard',
    score: 90,
    totalAmount: 9000,
    campaignsCount: 35,
  },
  {
    rank: 4,
    address: '0x5432...1098',
    username: 'DataKing',
    score: 87,
    totalAmount: 8000,
    campaignsCount: 30,
  },
  {
    rank: 5,
    address: '0x4321...0987',
    username: 'BlockMaster',
    score: 85,
    totalAmount: 7000,
    campaignsCount: 25,
  },
];

const UserLeaderboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderLeaderboardRow = (user: LeaderboardUser, index: number) => (
    <div
      key={user.address}
      className={`flex items-center justify-between p-4 ${
        index % 2 === 0 ? 'bg-[#f5f5fa0a]' : ''
      } rounded-xl transition-colors hover:bg-[#f5f5fa14]`}
    >
      {/* Rank and User Info */}
      <div className="flex items-center gap-4 flex-1">
        <div className="w-8 text-center">
          <span
            className={`font-bold ${
              user.rank <= 3 ? 'text-[#a855f7]' : 'text-[#f5f5faf4]'
            }`}
          >
            #{user.rank}
          </span>
        </div>
        <div className="relative">
          <Avvvatars value={user.address} size={40} style="shape" />
          {user.rank <= 3 && (
            <div className="absolute -top-1 -right-1">
              <TrophyIcon
                className={`w-4 h-4 ${
                  user.rank === 1
                    ? 'text-yellow-500'
                    : user.rank === 2
                    ? 'text-gray-400'
                    : 'text-orange-600'
                }`}
              />
            </div>
          )}
        </div>
        <div>
          <h3 className="font-medium text-[#f5f5faf4]">{user.username}</h3>
          <p className="text-sm text-[#f5f5fa7a]">{user.address}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-8">
        <div className="text-right">
          <p className="text-sm text-[#f5f5fa7a]">Reputation Score</p>
          <p className="font-medium text-[#f5f5faf4]">{user.score}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#f5f5fa7a]">Total Amount</p>
          <div className="flex items-center justify-end gap-1 font-medium text-[#f5f5faf4]">
            <CurrencyDollarIcon className="w-4 h-4 text-[#a855f7]" />
            <span>{user.totalAmount}</span>
            <span className="text-[#f5f5fa7a]">MOVE</span>
          </div>
        </div>
        <div className="text-right w-32">
          <p className="text-sm text-[#f5f5fa7a]">
            {selectedTab === 0 ? 'Campaigns' : 'Contributions'}
          </p>
          <p className="font-medium text-[#f5f5faf4]">{user.campaignsCount}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:max-w-[1100px] max-w-[1512px]  p-6 mt-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-[#f5f5fa7a]">Top performers in the Hive ecosystem</p>
      </div>

      {/* Stats Overview */}

      <Tab.Group onChange={setSelectedTab}>
        <Tab.List className="flex space-x-2 rounded-xl bg-[#0f0f17] p-1 mb-6">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-4 text-sm font-medium leading-5
              ${
                selected
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow'
                  : 'text-[#f5f5fa7a] hover:text-white hover:bg-[#f5f5fa14]'
              }
              `
            }
          >
            Campaign Creators
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${
                selected
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow'
                  : 'text-[#f5f5fa7a] hover:text-white hover:bg-[#f5f5fa14]'
              }
              `
            }
          >
            Contributors
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="space-y-2">
            {mockCreators.map((creator, index) =>
              renderLeaderboardRow(creator, index)
            )}
          </Tab.Panel>
          <Tab.Panel className="space-y-2">
            {mockContributors.map((contributor, index) =>
              renderLeaderboardRow(contributor, index)
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default UserLeaderboard;
