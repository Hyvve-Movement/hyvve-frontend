import React, { useState } from 'react';
import Overview from './tabs-content/Overview';
import Contributions from './tabs-content/Contributions';
import Analytics from './tabs-content/Analytics';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
            <span className=" bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-1 px-2 rounded-md rounded-bl-[20px] rounded-l-none rounded-tr-[20px] py-1 text-xs font-semibold">
              (premium only)
            </span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div>
            <Overview />
          </div>
        )}
        {activeTab === 'contributions' && (
          <div>
            <Contributions />
          </div>
        )}
        {activeTab === 'analytics' && (
          <div>
            <Analytics />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
