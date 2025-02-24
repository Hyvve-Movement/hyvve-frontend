import React, { useState, useEffect } from 'react';
import Overview from './tabs-content/Overview';
import Contributions from './tabs-content/Contributions';
import Analytics from './tabs-content/Analytics';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

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

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { account } = useWallet();
  const router = useRouter();
  const { id } = router.query;

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  const {
    data: campaignData,
    isLoading,
    isFetching,
  } = useQuery<Campaign>({
    queryKey: ['campaign', id],
    queryFn: async () => {
      if (!id) return null;
      const response = await fetch(`${baseUrl}/campaigns/${id}`);
      const data = await response.json();
      console.log('Campaign details:', data);
      return data;
    },
    enabled: !!id,
    staleTime: 0, // Consider data stale immediately
    cacheTime: 0, // Don't cache the data
    refetchOnWindowFocus: true, // Refetch when window regains focus
    refetchOnMount: true, // Refetch when component mounts
    refetchInterval: 5000, // Refetch every 5 seconds
  });

  const isOwner = account?.address === campaignData?.creator_wallet_address;

  useEffect(() => {
    if (
      !isOwner &&
      (activeTab === 'contributions' || activeTab === 'analytics')
    ) {
      setActiveTab('overview');
    }
  }, [isOwner, activeTab]);

  // Show loading only on initial load (when no data is available)
  if (isLoading && !campaignData) {
    return (
      <div className="w-full mt-[80px] flex justify-center">
        <div className="animate-pulse text-[#f5f5fa7a]">
          Loading campaign...
        </div>
      </div>
    );
  }

  if (!campaignData) {
    return (
      <div className="w-full mt-[80px] text-center text-[#f5f5fa7a]">
        Campaign not found
      </div>
    );
  }

  return (
    <div className="w-full mt-[80px]">
      {/* Tab Navigation */}
      <div className="border-b border-gray-800 mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 text-sm font-medium relative ${
              activeTab === 'overview'
                ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Overview
          </button>

          {isOwner && (
            <>
              <button
                onClick={() => setActiveTab('contributions')}
                className={`pb-4 text-sm font-medium relative ${
                  activeTab === 'contributions'
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Contributions
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`pb-4 text-sm font-medium relative ${
                  activeTab === 'analytics'
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Analytics{' '}
                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-1 px-2 rounded-md rounded-bl-[20px] rounded-l-none rounded-tr-[20px] py-1 text-xs font-semibold">
                  (premium only)
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div>
            <Overview campaign={campaignData} />
          </div>
        )}
        {isOwner && activeTab === 'contributions' && (
          <div>
            <Contributions campaign={campaignData} />
          </div>
        )}
        {isOwner && activeTab === 'analytics' && (
          <div>
            <Analytics campaign={campaignData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
