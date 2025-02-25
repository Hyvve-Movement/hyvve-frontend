import React from 'react';
import Avvvatars from 'avvvatars-react';
import { HiOutlineShieldCheck, HiExternalLink } from 'react-icons/hi';

interface ProfileBannerProps {
  walletAddress: string;
  username: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  walletAddress,
  username,
}) => {
  return (
    <div className="h-48 bg-gradient-to-r from-[#6366f1] to-[#a855f7] relative mb-24">
      <div className="absolute -bottom-16 left-8 flex items-end gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-2xl bg-[#0f0f17] p-1">
            <Avvvatars value={walletAddress} style="shape" size={120} />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[#0f0f17] flex items-center justify-center border-2 border-[#6366f1]">
            <HiOutlineShieldCheck className="w-5 h-5 text-[#6366f1]" />
          </div>
        </div>
        <div className="mb-4 flex items-center gap-3">
          <h1 className="text-2xl font-bold">{username}</h1>
          <button
            onClick={() =>
              window.open(
                `https://etherscan.io/address/${walletAddress}`,
                '_blank'
              )
            }
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            {walletAddress}
            <HiExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
