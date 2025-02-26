import React from 'react';
import Layout from '@/components/layout/Layout';
import UserLeaderboard from '@/container/leaderboard/UserLeaderboard';

const Leaderboard = () => {
  return (
    <Layout>
      <div className="ml-[250px]">
        <UserLeaderboard />
      </div>
    </Layout>
  );
};

export default Leaderboard;
