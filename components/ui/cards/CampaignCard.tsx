import React from 'react';
import Avvvatars from 'avvvatars-react';
import Link from 'next/link';

interface CampaignCardProps {
  id: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ id }) => {
  return (
    <Link
      href={`/detailed-campaign/${id}`}
      className="radial-gradient-border border border-gray-800 rounded-xl p-6 w-[370px] h-[260px] cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div>
        <div className="inner-content">
          <div className="flex items-center gap-3">
            <Avvvatars value="tim@apple.com" style="shape" size={50} />
            <div>
              <h2 className="text-white text-sm">Campaign Name</h2>
            </div>
            <span className="absolute top-0 right-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-xs p-1 px-3 rounded-md rounded-bl-[20px] rounded-l-none rounded-tr-[20px]">
              New
            </span>
          </div>

          <div>
            <ul className="flex items-center gap-2 text-xs mt-3">
              <li className="bg-[#21262d] p-1 px-3 rounded-md">Data</li>
              <li className="bg-[#21262d] p-1 px-3 rounded-md">
                AI Verification
              </li>
              <li className="bg-[#21262d] p-1 px-3 rounded-md">
                Data Verification
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 ml-2">
            <div className="border-r border-b border-gray-800">
              <p className="text-gray-400 text-xs">Total Contributions</p>
              <p className="text-white font-medium mt-1">6</p>
            </div>
            <div className="border-b pb-2 border-gray-800 pl-9">
              <p className="text-gray-400 text-xs">Campaign Budget</p>
              <p className="text-white font-medium mt-1">20 MOVE</p>
            </div>
            <div className="border-r  border-gray-800">
              <p className="text-gray-400 text-xs">Min Data Count</p>
              <p className="text-white font-medium mt-1">Undisclosed</p>
            </div>
            <div className="pl-9">
              <p className="text-gray-400 text-xs">Expiration Date</p>
              <p className="text-white font-medium mt-1">Feb 20, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
