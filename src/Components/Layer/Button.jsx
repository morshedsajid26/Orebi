import React from 'react'

const Button = ({className,ButtonText,href}) => {
  return (
    <button className={`py-4 w-1/2 border-[2px] border-[black] font-DM font-bold text-[14px] hover:bg-black hover:text-white transition-all duration-500 ${className}   `} to={href} >{ButtonText}
    </button>
  )
}

export default Button