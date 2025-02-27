import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import CampaignMultiStep from '@/container/create-campaign/CampaignMultiStep';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const CreateCampaign = () => {
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
        <title>Hyvve | Create Campaign</title>
        <meta
          name="description"
          content="Create a new data collection campaign on Hive"
        />
      </Head>
      <Layout>
        <div className="">
          <CampaignMultiStep />
        </div>
      </Layout>
    </>
  );
};

export default CreateCampaign;
