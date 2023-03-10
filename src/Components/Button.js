import React from 'react'
import { button } from '../Styles/stylesConstants'

const Button = (props) => {
    const width = props.width;
  return (
    <button className={`w-[${width}] ${button.primary}`}>
        {props.content}
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg> */}
    </button>
  ) 
}

export default Button