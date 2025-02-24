import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CampaignCard from '@/components/ui/cards/CampaignCard';
import { HiOutlineCollection, HiOutlineRefresh } from 'react-icons/hi';

interface Campaign {
  campaign_id: string;
  creator_wallet_address: string;
  current_contributions: number;
  description: string;
  expiration: number;
  is_active: boolean;
  max_data_count: number;
  onchain_campaign_id: string;
  title: string;
  total_budget: number;
  unit_price: number;
}

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const ActiveCampaigns = () => {
  const {
    data: campaigns,
    isLoading,
    refetch,
  } = useQuery<Campaign[]>({
    queryKey: ['activeCampaigns'],
    queryFn: async () => {
      const response = await fetch(
        `${baseUrl}/campaigns/active`
      );
      const data = await response.json();
      return data;
    },
  });

  return (
    <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[40px]">
      {/* Header Section */}
      <div className="max-w-[1512px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className='mt-10'> 
            <h1 className="text-2xl font-bold">
              Active Campaigns
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Discover and participate in ongoing data collection campaigns
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 px-4 py-3  text-gray-800 border-b-2 border-[#a855f7] font-medium">
              <HiOutlineCollection className="w-5 h-5" />
              All
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-4 border-[#6366f1] border-t-transparent animate-spin" />
              <p className="mt-4 text-gray-400">Loading campaigns...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!campaigns || campaigns.length === 0) && (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <HiOutlineCollection className="w-16 h-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-300">
              No Active Campaigns
            </h3>
            <p className="text-gray-400 mt-2 max-w-md">
              There are currently no active campaigns. Check back later or
              create a new campaign.
            </p>
          </div>
        )}

        {/* Campaign Grid */}
        {!isLoading && campaigns && campaigns.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.campaign_id} campaign={campaign} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveCampaigns;
