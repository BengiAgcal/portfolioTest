import React from 'react'

const UOList = ({bold, text}) => {
  return (
    <li className='small-text text-sm md:text-base lg:text-xl whitespace-break-spaces list-disc pb-1'>
        <span className='font-semibold'>{bold} </span>
        <span className='font-thin'>{text}</span>
    </li>
  )
}

export default UOList