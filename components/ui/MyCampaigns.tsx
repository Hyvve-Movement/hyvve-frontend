import React from 'react';
import CampaignCard from './cards/CampaignCard';
import { useQuery } from '@tanstack/react-query';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

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

const MyCampaigns = () => {
  const { account } = useWallet();

  const { data: campaigns, isLoading } = useQuery<Campaign[]>({
    queryKey: ['myCampaigns', account?.address],
    queryFn: async () => {
      if (!account?.address) return [];
      const response = await fetch(
        `https://hive-backend-production-eb93.up.railway.app/campaigns/${account.address}/campaigns/created`
      );
      const data = await response.json();
      console.log('My campaigns:', data);
      return data;
    },
    enabled: !!account?.address,
  });

  if (!account?.address) {
    return (
      <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[40px]">
        <h1 className="text-[18px] tracking-[2px] font-extrabold text-white/80">
          My Campaigns
        </h1>
        <p className="text-white/60 mt-6">
          Please connect your wallet to view your campaigns.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[40px]">
        <h1 className="text-[18px] tracking-[2px] font-extrabold text-white/80">
          My Campaigns
        </h1>
        <p className="text-white/60 mt-6">No campaigns found.</p>
      </div>
    );
  }

  return (
    <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[40px]">
      <h1 className="text-[18px] tracking-[2px] font-extrabold text-white/80">
        My Campaigns
      </h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.campaign_id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default MyCampaigns;
