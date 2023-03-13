import React from 'react'
import GeneralProfile from './GeneralProfile'
import Profile from './Profile'
import Notification from './Notification'

const CompleteProfile = () => {
  return (
    <div className="flex mt-[22px] max-lg:flex-col">
        <GeneralProfile/>
        <Profile/>
        <Notification/>
    </div>
  )
}

export default CompleteProfile