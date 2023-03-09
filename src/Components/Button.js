import React from 'react'

const Button = (props) => {
    const width = props.width;
  return (
    <button className="w-[256px] h-[56px] bg-[#2E63F6] text-white flex rounded-lg py-4 pl-[52px] mx-6">
        {props.content}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    </button>
  ) 
}

export default Button