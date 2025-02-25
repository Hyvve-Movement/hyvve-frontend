import React from 'react';
import {
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import ProfileBanner from '@/components/ui/profile/ProfileBanner';
import StatsGrid from '@/components/ui/profile/StatsGrid';
import BadgeGrid from '@/components/ui/profile/BadgeGrid';

const mockStats = {
  campaignsCreated: 12,
  campaignsEarnings: 25000,
  contributionsMade: 45,
  contributionsEarnings: 15000,
  reputationScore: 95,
};

const badges = [
  {
    id: 'early-adopter',
    name: 'Early Adopter',
    description: 'One of the first users on the platform',
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 'top-contributor',
    name: 'Top Contributor',
    description: 'Consistently high-quality contributions',
    icon: <HiOutlineChartBar className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'campaign-master',
    name: 'Campaign Master',
    description: 'Created multiple successful campaigns',
    icon: <HiOutlineDocumentText className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
];

const UserProfile = () => {
  const walletAddress = '0x1234...5678';
  const username = 'Ghost';

  return (
    <div className="lg:max-w-[1100px] max-w-[1512px] text-white mt-20">
      <ProfileBanner walletAddress={walletAddress} username={username} />

      <div className="max-w-7xl mx-auto px-8 pt-24">
        <StatsGrid stats={mockStats} />
        <BadgeGrid badges={badges} />
      </div>
    </div>
  );
};

export default UserProfile;
