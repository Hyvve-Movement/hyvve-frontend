import React from 'react';
import TopContributors from '@/components/ui/TopContributors';
import dynamic from 'next/dynamic';

const MyCampaigns = dynamic(() => import('@/components/ui/MyCampaigns'), {
  ssr: false,
});

const HomeHeader = dynamic(() => import('@/components/ui/HomeHeader'), {
  ssr: false,
});

const UserHome = () => {
  return (
    <div className="">
      <HomeHeader />
      <MyCampaigns />
      <TopContributors />
    </div>
  );
};

export default UserHome;
