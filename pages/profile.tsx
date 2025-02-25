import React from 'react'
import Layout from '@/components/layout/Layout'
import UserProfile from '../container/profile/UserProfile'

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