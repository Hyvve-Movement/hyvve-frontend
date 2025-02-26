import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ActiveCampaigns from '@/container/campaigns/ActiveCampaigns';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Campaigns = () => {
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
        <title>Hyvve | Campaigns</title>
        <meta
          name="description"
          content="Browse active data collection campaigns on Hive"
        />
      </Head>
      <Layout>
        <div className="ml-[250px]">
          <ActiveCampaigns />
        </div>
      </Layout>
    </>
  );
};

export default Campaigns;
