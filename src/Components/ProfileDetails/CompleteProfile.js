import React from 'react'
import GeneralProfile from './GeneralProfile'
import Profile from './Profile'
import Notification from './Notification'

const CompleteProfile = () => {
  return (
    <div className="flex flex-row mt-[22px]">
        <GeneralProfile/>
        <Profile/>
        <Notification/>
    </div>
  )
}

export default CompleteProfile