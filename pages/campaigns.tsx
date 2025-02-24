import React from 'react'
import Layout from '@/components/layout/Layout'
import ActiveCampaigns from '@/container/campaigns/ActiveCampaigns'

const Campaigns = () => {
  return (
    <Layout>
      <div className="ml-[250px]">
        <ActiveCampaigns />
      </div>
    </Layout>
  )
}

export default Campaigns