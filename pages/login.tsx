import React, { useEffect } from 'react';
import LoginComponent from '@/container/Login';
import Head from 'next/head';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useRouter } from 'next/router';

const Login = () => {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      router.push('/home');
    }
  }, [connected, router]);

  return (
    <>
      <Head>
        <title>Hyvve | Login</title>
        <meta
          name="description"
          content="Connect your wallet to access the Hive platform"
        />
      </Head>
      <LoginComponent />
    </>
  );
};

export default Login;
