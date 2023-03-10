import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import CompleteProfile from '../../Components/ProfileDetails/CompleteProfile'

const ProfilePanel = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center lg:flex-row overflow-hidden">
      <Sidebar/>
      <div className="flex flex-col lg:w-full">
        <Navbar/>
        <CompleteProfile/>
      </div>
    </div>
  )
}

export default ProfilePanel