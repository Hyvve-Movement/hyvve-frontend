import React, { useState } from 'react';
import ContributionsTable from '../table/ContributionsTable';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { HiSparkles } from 'react-icons/hi';
import BulkDecryptModal from '@/components/modals/BulkDecryptModal';
import toast from 'react-hot-toast';

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
  const [isBulkDecryptOpen, setIsBulkDecryptOpen] = useState(false);
  const [contributions, setContributions] = useState<any[]>([]); // We'll get this from ContributionsTable

  const handleExportClick = () => {
    if (contributions.length === 0) {
      toast('No contributions available to export', {
        icon: '⚠️',
      });
      return;
    }
    setIsBulkDecryptOpen(true);
  };

  return (
    <div className="w-[1100px]">
      <h2 className="text-white text-lg font-semibold tracking-[2px]">
        Campaign Contributions
      </h2>
      <div className="flex gap-2">
        <div className="relative">
          <button
            onClick={handleExportClick}
            className="gradient-border p-2 mt-4 text-xs font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <IoCloudDownloadOutline className="text-white" />
            Export data
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
              <HiSparkles className="w-3 h-3 text-white" />
              <span className="text-[10px] font-bold text-white">PREMIUM</span>
            </div>
          </button>
        </div>
      </div>
      <ContributionsTable onContributionsChange={setContributions} />

      <BulkDecryptModal
        isOpen={isBulkDecryptOpen}
        onClose={() => setIsBulkDecryptOpen(false)}
        contributions={contributions}
      />
    </div>
  );
};

export default Contributions;
