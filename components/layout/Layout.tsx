import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic';
import SubscriptionModal from '../modals/SubscriptionModal';
import { useSubscription } from '@/context/SubscriptionContext';
import { HiSparkles, HiOutlineStar } from 'react-icons/hi';

const WalletSelector = dynamic(() => import('@/helpers/WalletSelector'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const { isSubscribed, isLoading, subscriptionStatus, refreshSubscription } =
    useSubscription();

  // Refresh subscription status when modal closes
  useEffect(() => {
    if (!isSubscriptionModalOpen) {
      refreshSubscription();
    }
  }, [isSubscriptionModalOpen, refreshSubscription]);

  // Calculate days remaining until subscription expires
  const getDaysRemaining = () => {
    if (!subscriptionStatus?.endTime) return null;

    const endDate = new Date(subscriptionStatus.endTime);
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div>
      <Sidebar />
      <div className="flex items-center gap-2 justify-end absolute top-6 right-10 ">
        <button className="border border-gray-800 rounded-lg text-sm p-2 px-4 flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/1744477796301496320/z7AIB7_W_400x400.jpg"
            alt=""
            className="w-[28px] h-[28px] p-1 rounded-2xl"
          />
          Movement Bardock
        </button>
        {isLoading ? (
          <button className="bg-[#f5f5fa0a] rounded-lg text-sm p-2 px-4 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-[#a855f7] border-t-transparent rounded-full animate-spin mr-1" />
            Loading...
          </button>
        ) : isSubscribed ? (
          <button
            // onClick={() => setIsSubscriptionModalOpen(true)}
            className="relative group overflow-hidden bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 hover:from-[#6366f1]/30 hover:to-[#a855f7]/30 rounded-lg text-sm p-2 px-4 transition-all duration-300 border border-[#a855f7]/30"
          >
            {/* Animated background effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#6366f1]/0 via-[#a855f7]/20 to-[#6366f1]/0 -translate-x-full animate-shimmer"></span>

            <div className="flex items-center gap-2 relative z-10">
              <div className="relative">
                <HiSparkles className="h-4 w-4 text-[#a855f7]" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
                </span>
              </div>
              <span className="font-medium">Premium</span>
              {getDaysRemaining() !== null && getDaysRemaining() < 7 && (
                <span className="ml-1 text-xs bg-[#f5f5fa14] px-1.5 py-0.5 rounded">
                  {getDaysRemaining()}d
                </span>
              )}
            </div>
          </button>
        ) : (
          <button
            onClick={() => setIsSubscriptionModalOpen(true)}
            className="relative overflow-hidden bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg text-sm p-2 px-4 hover:shadow-lg hover:shadow-[#a855f7]/20 transition-all duration-300 group"
          >
            {/* Animated shine effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            <div className="flex items-center gap-2 relative z-10">
              <HiOutlineStar className="h-4 w-4" />
              <span className="font-medium">Upgrade to Premium</span>
            </div>
          </button>
        )}
        <WalletSelector />
      </div>
      {children}

      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </div>
  );
};

export default Layout;
