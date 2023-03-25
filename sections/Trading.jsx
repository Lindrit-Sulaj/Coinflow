import React from 'react';
import TopQuality from '@/components/TopQuality';
import { topQualities } from '@/utils/data';

export default function Trading() {
  return (
    <section className="bg-eerie-black pt-10 pb-6 md:pb-14 text-white">
      <div className="container mx-auto px-4 xl:px-0">
        <div className='flex flex-wrap lg:flex-nowrap gap-y-8 justify-between items-center w-full lg:gap-6'>
          <div className='w-full lg:w-1/2'>
            <p className='px-3 py-2 bg-jet inline-block rounded-lg hover:bg-neutral-600 transition-all cursor-pointer uppercase text-neutral-300 font-medium text-sm md:text-base'>Top qualities</p>
            <h2 className='text-3xl md:text-4xl mt-5 font-semibold'>
              <span className='text-neon-blue'>Easy</span> to get investment profit
            </h2>
          </div>
          <p className='w-full lg:w-1/2 text-neutral-300 leading-7 max-w-xl'>Discover why traders worldwide choose Coinflow. Top qualities: unparalleled security, 24/7 support, user-friendly interface, transparent fees, diverse trading options, and innovative technology.</p>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap lg:gap-10 items-center mt-10 lg:mt-20 justify-between'>
          <img className='hidden lg:block w-1/5 object-cover' src="https://ik.imagekit.io/0s9lwb2yr/Coinflow/Images/1679740918848_TbWjVs5i_.png?updatedAt=1679740953563" alt="" />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 lg:w-3/4'>
            { topQualities.map(quality => (
              <TopQuality key={quality.title} {...quality}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}