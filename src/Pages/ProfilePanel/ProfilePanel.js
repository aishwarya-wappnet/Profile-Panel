import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

const ProfilePanel = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default ProfilePanel