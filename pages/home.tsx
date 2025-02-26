import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import UserHome from '@/container/home/UserHome';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';

const Home = () => {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connected) {
      router.push('/login');
    }
  }, [connected, router]);

  return (
    <>
      <Layout>
        <div className={connected ? 'ml-[250px]' : ''}>
          {connected ? <UserHome /> : null}
        </div>
      </Layout>
    </>
  );
};

export default Home;
