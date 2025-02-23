import React from 'react';
import OverviewCard from './OverviewCard';
import SparklineCard from './SparklineCard';

const HomeHeader = () => {
  // Generate 30 days of sparse campaign data
  const dummyData = [
    12, 15, 10, 25, 18, 22, 16, 35, 28, 42, 38, 45, 30, 55, 48, 65, 58, 72, 63,
    85, 76, 92, 88, 105, 95, 120, 108, 145, 165, 214,
  ].map((value) => value + Math.floor(Math.random() * 20 - 10));

  return (
    <>
      <div className="lg:max-w-[1100px] max-w-[1512px] relative mt-[70px]">
        <div className="relative z-10">
          <div className="text-white pt-5">
            <h1 className="text-[18px] tracking-[2px] font-extrabold text-white/80">
              Account Overview
            </h1>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-6">
            <SparklineCard title="Campaign Stats" data={dummyData} />
            <OverviewCard title="Total Amount Spent on Campaigns" amount={10} />
            <OverviewCard title="Total Number of Campaigns" amount={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
