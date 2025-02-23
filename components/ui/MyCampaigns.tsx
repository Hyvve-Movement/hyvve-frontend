import React from 'react';
import CampaignCard from './cards/CampaignCard';

const MyCampaigns = () => {
  return (
    <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[40px]">
      <h1 className="text-[18px] tracking-[2px] font-extrabold text-white/80">
        My Campaigns
      </h1>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <CampaignCard id="1" />
        <CampaignCard id="2" />
        <CampaignCard id="3" />
      </div>
    </div>
  );
};

export default MyCampaigns;
