import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="flex items-center gap-2 justify-end absolute top-6 right-10 ">
        <button className="border border-gray-800 rounded-lg text-sm p-2 px-4 flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/1744477796301496320/z7AIB7_W_400x400.jpg"
            alt=""
            className="w-[28px] h-[28px] p-1  rounded-2xl"
          />
          Movement Bardock
        </button>
        <button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg text-sm p-2 px-4">
          Activate subscription
        </button>
        <button className="gradient-border text-sm p-2">Connect Wallet</button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
