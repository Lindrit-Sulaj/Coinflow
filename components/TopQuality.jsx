import React from 'react'

export default function TopQuality({ title, icon, text }) {
  return (
    <div className=' p-6 rounded-2xl flex flex-col bg-eerie-black hover:bg-eerie-hover cursor-pointer'>
      <h5 className='flex gap-3 items-center mb-4'>
        <div className='w-9 h-9 bg-jet rounded-md flex items-center justify-center'>
          <i className={`${icon} text-lg`}></i>
        </div>
        <span className='text-xl font-medium'>{title}</span>
      </h5>
      <p className='mb-3'>{text}</p>
      {/* <hr className='w-3/4 border-none h-[3px] mt-auto rounded-xl bg-cobalt-blue' /> */}
    </div>
  )
}
