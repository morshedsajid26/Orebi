import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({liText,children, className,href}) => {
  return (
    <li className="group">
    <Link className={`hover:text-primary transition-all duration-300 text-[#767676] text-[14px] font-bold ${className}`} to={href} >{liText}</Link>

    {children}
     </li>
  )
}

export default Li