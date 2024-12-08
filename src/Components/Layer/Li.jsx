import React from 'react'
import {  NavLink } from 'react-router-dom'

const Li = ({liText,children, className,href}) => {
  return (
    <li className="group">
    <NavLink className={`hover:text-primary transition-all duration-300 text-[#767676] text-[14px] font-bold ${className}`} to={href} 
    end
    style={({ isActive }) => ({
      color: isActive ? "#262626" : "#767676",
      
      
      
      
      
    })}  
    >{liText}</NavLink>

    {children}
     </li>
  )
}

export default Li