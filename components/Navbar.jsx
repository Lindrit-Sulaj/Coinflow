import React from 'react'

export default function Navbar() {
  return (
    <nav className='absolute top-0 h-[75px] border-solid border-b-[1px] border-b-jet w-full'>
      <div className='container h-full mx-auto flex items-center justify-between text-white'>
        <label className="logo text-xl font-semibold">
          coin
          <span className='text-blue-300'>flow</span>
        </label>
        <ul className='flex gap-6'>
          <li><a href="#" className='bg-jet px-4 py-[10px] rounded-full text-neutral-100'>Discover</a></li>
          <li><a href="#" className='text-neutral-300'>Company</a></li>
          <li><a href="#" className='text-neutral-300'>Learn</a></li>
          <li><a href="#" className='text-neutral-300'>Support</a></li>
        </ul>
        <button className='bg-cobalt-blue px-4 py-2 rounded-full font-medium flex items-center gap-2'>
          Launch app
          <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
        </button>
      </div>
    </nav>
  )
}
