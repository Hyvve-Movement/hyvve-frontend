import React from 'react';
import TopContributorsCard from './cards/TopContributorsCard';

const TopContributors = () => {
  return (
    <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[40px]">
      <h1 className="text-[18px] tracking-[2px] font-extrabold text-white/80">
        Top Contributors
      </h1>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <TopContributorsCard />
        <TopContributorsCard />
        <TopContributorsCard />
      </div>
    </div>
  );
};

export default TopContributors;
