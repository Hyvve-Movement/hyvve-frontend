import React from 'react';
import Layout from '@/components/layout/Layout';
import UserHome from '@/container/home/UserHome';

const Home = () => {
  return (
    <>
      <Layout>
        <div className="ml-[250px]">
          <UserHome />
        </div>
      </Layout>
    </>
  );
};

export default Home;
