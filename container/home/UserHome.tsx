import React from 'react'
import HomeHeader from '@/components/ui/HomeHeader'
import MyCampaigns from '@/components/ui/MyCampaigns'
import TopContributors from '@/components/ui/TopContributors'

const UserHome = () => {
  return (
    <div className="">
      <HomeHeader />
      <MyCampaigns />
      <TopContributors />
    </div>
  )
}

export default UserHome