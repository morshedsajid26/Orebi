import React from 'react'

const TitleHeader = ({headerText,className}) => {
  return (
    <h2 className={`text-primary font-DM text-[39px] font-bold capitalize ${className}`}>{headerText}</h2>
  )
}

export default TitleHeader