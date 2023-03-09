import React from 'react'

const MenuItem = (props) => {
  return (
    <div className="flex w-[256px] h-[56px] py-4 pl-12"><span>{props.icon}</span><span className="ml-2">{props.text}</span></div>
  )
}

export default MenuItem