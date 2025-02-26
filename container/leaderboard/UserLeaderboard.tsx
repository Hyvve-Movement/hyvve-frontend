import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  TrophyIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  FireIcon,
  ArrowTrendingUpIcon,
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

  // Trophy colors for top positions
  const getRankStyles = (rank: number) => {
    if (rank === 1) {
      return {
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/30',
        icon: 'text-yellow-400',
      };
    } else if (rank === 2) {
      return {
        color: 'text-gray-300',
        bg: 'bg-gray-300/10',
        border: 'border-gray-300/30',
        icon: 'text-gray-300',
      };
    } else if (rank === 3) {
      return {
        color: 'text-amber-600',
        bg: 'bg-amber-600/10',
        border: 'border-amber-600/30',
        icon: 'text-amber-600',
      };
    }
    return {
      color: 'text-white/70',
      bg: 'bg-transparent',
      border: 'border-transparent',
      icon: 'text-white/50',
    };
  };

  const renderLeaderboardRow = (user: LeaderboardUser, index: number) => {
    const styles = getRankStyles(user.rank);
    const isTopThree = user.rank <= 3;

    return (
      <div
        key={user.address}
        className={`flex items-center justify-between p-4 ${
          isTopThree
            ? `border border-[#f5f5fa14] bg-[#f5f5fa08]`
            : index % 2 === 0
            ? 'bg-[#f5f5fa05]'
            : 'bg-transparent'
        } rounded-xl transition-all hover:bg-[#f5f5fa0a] hover:border-[#f5f5fa29] group`}
      >
        {/* Rank and User Info */}
        <div className="flex items-center gap-4 flex-1">
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full ${
              isTopThree
                ? `${styles.bg} border ${styles.border}`
                : 'bg-[#f5f5fa0a] border-[#f5f5fa14]'
            }`}
          >
            <span className={`text-base font-bold ${styles.color}`}>
              {user.rank}
            </span>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <Avvvatars value={user.address} size={48} style="shape" />
            </div>
            {isTopThree && (
              <div className="absolute -top-1 -right-1 p-1 bg-[#0f0f17] rounded-full border border-[#f5f5fa14]">
                <TrophyIcon className={`w-3.5 h-3.5 ${styles.icon}`} />
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-[#f5f5faf4] transition-colors group-hover:text-white">
              {user.username}
            </h3>
            <p className="text-sm text-[#f5f5fa7a]">{user.address}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="text-right">
            <p className="text-sm text-[#f5f5fa7a] mb-1 flex items-center justify-end gap-1">
              <ChartBarIcon className="w-4 h-4 text-[#6366f1]" />
              <span>Score</span>
            </p>
            <p className="font-medium text-[#f5f5faf4]">{user.score}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-[#f5f5fa7a] mb-1 flex items-center justify-end gap-1">
              <CurrencyDollarIcon className="w-4 h-4 text-[#22c55e]" />
              <span>Earnings</span>
            </p>
            <div className="flex items-center justify-end gap-1 font-medium">
              <span className="text-[#f5f5faf4]">
                {user.totalAmount.toLocaleString()}
              </span>
              <span className="text-[#f5f5fa7a]">MOVE</span>
            </div>
          </div>

          <div className="text-right min-w-[100px]">
            <p className="text-sm text-[#f5f5fa7a] mb-1 flex items-center justify-end gap-1">
              {selectedTab === 0 ? (
                <>
                  <FireIcon className="w-4 h-4 text-[#a855f7]" />
                  <span>Campaigns</span>
                </>
              ) : (
                <>
                  <ArrowTrendingUpIcon className="w-4 h-4 text-[#a855f7]" />
                  <span>Contributions</span>
                </>
              )}
            </p>
            <p className="font-medium text-[#f5f5faf4]">
              {user.campaignsCount}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 mt-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-[#f5f5fa7a] max-w-2xl">
          Recognizing top performers in the Hive ecosystem. Climb the ranks by
          creating valuable campaigns and contributing to projects.
        </p>
      </div>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#f5f5fa0a] rounded-xl p-4 border border-[#f5f5fa14] hover:border-[#f5f5fa29] transition-all group">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#f5f5fa7a] text-sm mb-1">
                Total Participants
              </p>
              <p className="text-2xl font-bold text-white">2,543</p>
              <p className="text-xs text-[#f5f5fa7a] mt-1">
                Active this week: 743
              </p>
            </div>
            <div className="p-3 bg-[#f5f5fa0a] rounded-lg">
              <UserGroupIcon className="w-6 h-6 text-[#6366f1]" />
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5fa0a] rounded-xl p-4 border border-[#f5f5fa14] hover:border-[#f5f5fa29] transition-all group">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#f5f5fa7a] text-sm mb-1">
                Earnings Distributed
              </p>
              <p className="text-2xl font-bold text-white">456,789</p>
              <p className="text-xs text-[#f5f5fa7a] mt-1">MOVE tokens</p>
            </div>
            <div className="p-3 bg-[#f5f5fa0a] rounded-lg">
              <CurrencyDollarIcon className="w-6 h-6 text-[#22c55e]" />
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5fa0a] rounded-xl p-4 border border-[#f5f5fa14] hover:border-[#f5f5fa29] transition-all group">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#f5f5fa7a] text-sm mb-1">Active Campaigns</p>
              <p className="text-2xl font-bold text-white">152</p>
              <p className="text-xs text-[#f5f5fa7a] mt-1">
                New this month: 34
              </p>
            </div>
            <div className="p-3 bg-[#f5f5fa0a] rounded-lg">
              <FireIcon className="w-6 h-6 text-[#a855f7]" />
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5fa0a] rounded-xl p-4 border border-[#f5f5fa14] hover:border-[#f5f5fa29] transition-all group">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#f5f5fa7a] text-sm mb-1">
                Completed Contributions
              </p>
              <p className="text-2xl font-bold text-white">3,298</p>
              <p className="text-xs text-[#f5f5fa7a] mt-1">This week: 248</p>
            </div>
            <div className="p-3 bg-[#f5f5fa0a] rounded-lg">
              <ArrowTrendingUpIcon className="w-6 h-6 text-[#f97316]" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <Tab.Group onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#0f0f17] p-1 mb-6">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all
              ${
                selected
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow'
                  : 'text-[#f5f5fa7a] hover:text-white hover:bg-[#f5f5fa14]'
              }
              `
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FireIcon className="w-5 h-5" />
              <span>Campaign Creators</span>
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all
              ${
                selected
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow'
                  : 'text-[#f5f5fa7a] hover:text-white hover:bg-[#f5f5fa14]'
              }
              `
            }
          >
            <div className="flex items-center justify-center gap-2">
              <ArrowTrendingUpIcon className="w-5 h-5" />
              <span>Contributors</span>
            </div>
          </Tab>
        </Tab.List>

        {/* Top 3 Champions Banner */}
        <div className="bg-[#f5f5fa0a] rounded-xl p-4 mb-6 border border-[#f5f5fa14]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              {selectedTab === 0 ? 'Top Campaign Creators' : 'Top Contributors'}
            </h2>
            <div className="flex -space-x-3">
              {(selectedTab === 0 ? mockCreators : mockContributors)
                .slice(0, 3)
                .map((user) => (
                  <div
                    key={user.address}
                    className={`relative rounded-full border-2 ${
                      getRankStyles(user.rank).border
                    }`}
                  >
                    <Avvvatars value={user.address} size={36} style="shape" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#0f0f17] rounded-full flex items-center justify-center border border-[#f5f5fa14]">
                      <span
                        className={`text-xs font-bold ${
                          getRankStyles(user.rank).icon
                        }`}
                      >
                        {user.rank}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

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
