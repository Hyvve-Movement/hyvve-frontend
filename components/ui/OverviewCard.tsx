import React from 'react';

interface OverviewCardProps {
  amount: number;
  percentageChange?: number;
  comparisonPeriod?: string;
  title: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ amount, title }) => {
  return (
    <div className="radial-gradient-border border border-gray-800 rounded-xl p-6 max-w-md min-w-[250px] h-[100px]">
      <div className="inner-content">
        <h2 className="text-gray-300 text-sm mb-3">{title}</h2>
        <div className="text-white text-lg font-bold mb-3">
          {amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
          <span className="text-sm mb-1">MOVE</span>
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};

export default OverviewCard;
