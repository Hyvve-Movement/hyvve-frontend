import React from 'react';
import Avvvatars from 'avvvatars-react';

const TopContributors = () => {
  return (
    <div className="radial-gradient-border border border-gray-800 rounded-xl p-6 w-[370px] h-[130px]">
      <div className="inner-content">
        <div className="flex items-center gap-3 mt-6">
          <Avvvatars value="ghost" style="character" size={70} />
          <div className="flex flex-col">
            <span className="text-white text-xs">0x456...858</span>
            <span className="text-white text-lg">45 Contributions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
