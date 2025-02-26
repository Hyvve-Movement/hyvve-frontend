import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import UserLeaderboard from '@/container/leaderboard/UserLeaderboard';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Leaderboard = () => {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connected) {
      router.push('/login');
    }
  }, [connected, router]);

  if (!connected) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Hyvve | Leaderboard</title>
        <meta
          name="description"
          content="View top contributors on the Hive platform"
        />
      </Head>
      <Layout>
        <div className="ml-[250px]">
          <UserLeaderboard />
        </div>
      </Layout>
    </>
  );
};

export default Leaderboard;
