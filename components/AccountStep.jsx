import React from 'react'

export default function AccountStep({ title, text, image }) {
  return (
    <div className='flex gap-8 max-w-xl'>
      <img className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]' src={image} alt={title} />
      <div>
        <h3 className='text-xl mb-3'>{title}</h3>
        <p className='text-neutral-300'>{text}</p>
      </div>
    </div>
  )
}
