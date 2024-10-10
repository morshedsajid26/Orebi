import React from 'react'

const Input = ({className,id,labelText, type, placeholder,children}) => {
  return (
    <div className={`border-b ${className}`}>
        <label className='font-DM font-bold text-[16px]' htmlFor={id}>{labelText}</label>
        <input id={id} className='font-DM text-[14px] w-full outline-none pt-2.5 pb-4' type={type} placeholder={placeholder} />

        {children}
    </div>
  )
}

export default Input