import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import CompleteProfile from '../../Components/ProfileDetails/CompleteProfile'

const ProfilePanel = () => {
  return (
    <div className="flex lg:flex-row items-center max-lg:flex-col">
      <Sidebar/>
      <div className="flex flex-col lg:w-full ">
        <Navbar/>
        <CompleteProfile/>
      </div>
    </div>
  )
}

export default ProfilePanel