import React from 'react'

export default function Stats() {
  return (
    <section className="stats md:py-10 py-6 px-4 lg:px-0 text-white mt-10">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap lg:gap-10 gap-y-12">
        <div className='w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl mt-5 font-semibold'>Join the <span className='text-neon-blue'>international</span> community of crypto traders</h2>
          <p className='mt-6 text-neutral-300 lg:max-w-xl'>Join the Global Crypto Movement on Coinflow. Our platform serves traders from around the globe, with support for multiple languages and seamless cross-border transactions.</p>
          <div className='flex gap-4 mt-8'>
            <div className='w-[120px]'>
              <p className='text-2xl font-bold'>$4B+</p>
              <p className='text-neutral-400'>transactions</p>
            </div>
            <div className='w-[120px]'>
              <p className='text-2xl font-bold'>1M</p>
              <p className='text-neutral-400'>traders</p>
            </div>
            <div className='w-[120px]'>
              <p className='text-2xl font-bold'>100+</p>
              <p className='text-neutral-400'>countries</p>
            </div>
          </div>
          <button className='mt-8 px-6 py-3 bg-cobalt-blue text-black font-medium shadow-lg rounded-lg hover:bg-neon-blue transition-all'>Join now</button>
        </div>
        <img src="https://ik.imagekit.io/0s9lwb2yr/Coinflow/Images/World_Map_o63prOPB8.svg?updatedAt=1679748042185" alt="World map" className='world-map w-full lg:w-1/2' />
      </div>
    </section>
  )
}
