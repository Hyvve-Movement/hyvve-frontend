import React from 'react'
import Layout from '@/components/layout/Layout'
import dynamic from 'next/dynamic'

const UserProfile = dynamic(() => import('../container/profile/UserProfile'), {
  ssr: false,
})

const Profile = () => {
  return (
    <Layout>
      <div className="ml-[250px]">
        <UserProfile />
      </div>
    </Layout>
  );
}

export default Profile