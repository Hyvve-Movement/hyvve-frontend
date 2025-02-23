import React from 'react';
import ContributionsTable from '../table/ContributionsTable';
import { IoCloudDownloadOutline } from "react-icons/io5";

const Contributions = () => {
  return (
    <div className="w-[1100px]">
      <h2 className="text-white text-lg font-semibold tracking-[2px]">
        Campaign Contributions
      </h2>
      <div className="flex  gap-2">
        <button className="gradient-border p-2 mt-4 text-xs  font-semibold flex items-center gap-2">
          <IoCloudDownloadOutline className="text-white" />
          Export data as CSV
        </button>
        {/* <p className="text-gray-300 text-sm font-semibold">
          Total contributions: 100
        </p>
        <p className="text-gray-300 text-sm font-semibold">
          Total contributions: 100
        </p> */}
      </div>
      <ContributionsTable />
    </div>
  );
};

export default Contributions