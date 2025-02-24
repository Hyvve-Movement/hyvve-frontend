import React from 'react';
import ContributionsTable from '../table/ContributionsTable';
import { IoCloudDownloadOutline } from 'react-icons/io5';

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

interface ContributionsProps {
  campaign: Campaign;
}

const Contributions: React.FC<ContributionsProps> = ({ campaign }) => {
  return (
    <div className="w-[1100px]">
      <h2 className="text-white text-lg font-semibold tracking-[2px]">
        Campaign Contributions
      </h2>
      <div className="flex  gap-2">
        <button className="gradient-border p-2 mt-4 text-xs  font-semibold flex items-center gap-2">
          <IoCloudDownloadOutline className="text-white" />
          Export data as CSV
        </button>
        {/* <p className="text-gray-300 text-sm font-semibold">
          Total contributions: 100
        </p>
        <p className="text-gray-300 text-sm font-semibold">
          Total contributions: 100
        </p> */}
      </div>
      <ContributionsTable />
    </div>
  );
};

export default Contributions;
