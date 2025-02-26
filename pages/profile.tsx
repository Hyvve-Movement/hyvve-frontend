import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const UserProfile = dynamic(() => import('../container/profile/UserProfile'), {
  ssr: false,
});

const Profile = () => {
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
        <title>Hyvve | Profile</title>
        <meta name="description" content="View and manage your Hive profile" />
      </Head>
      <Layout>
        <div className="ml-[250px]">
          <UserProfile />
        </div>
      </Layout>
    </>
  );
};

export default Profile;
