import React from 'react';

interface OverviewCardProps {
  title: string;
  amount?: number;
  loading?: boolean;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  amount,
  loading = false,
}) => {
  return (
    <div className="radial-gradient-border border border-gray-800 rounded-xl p-6 max-w-md min-w-[250px] h-[100px]">
      <div className="inner-content">
        <h3 className="text-[#f5f5fa7a] text-sm">{title}</h3>
        <div className="mt-2">
          {loading ? (
            <div className="h-8 w-16 bg-[#f5f5fa14] rounded animate-shimmer" />
          ) : (
            <p className="text-[#f5f5faf4] text-2xl font-semibold">
              {amount || 0}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
