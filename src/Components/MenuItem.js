import React from 'react'
import { button } from '../Styles/stylesConstants'

const MenuItem = (props) => {
  return (
    <div className={button.secondary}><span>{props.icon}</span><span className="ml-2">{props.text}</span></div>
  )
}

export default MenuItem